/**
 * Cloudflare Pages Function — Twelve Data 시세 프록시
 *
 * 입력:  GET /api/quote?symbol=SPX&range=all
 *        symbol : SYMBOL_MAP의 키 (SPX, BTC, ETH, SOL, XRP, KOSPI, N225, NASDAQ)
 *        range  : "all" (1D + 1M + 1Y 통합) 또는 "1D"/"1M"/"1Y" 개별
 *
 * 출력:  range=all  → { base, chg, ranges: { "1D": [...], "1M": [...], "1Y": [...] } }
 *        range=1D   → { range: "1D", values: [...] }
 *        실패·키 미설정 → { fallback: true, error: "..." } (HTTP 503/400)
 *                       프런트는 이 신호 받으면 기존 데모 데이터 그대로 사용
 *
 * 보안:  API 키는 Cloudflare Pages env var TWELVE_DATA_API_KEY 로만 주입.
 *        브라우저 코드엔 절대 노출되지 않음.
 *
 * 캐싱:  Cloudflare Cache API. 1D=1시간, 1M·1Y=하루.
 *        Twelve Data 무료 800 calls/day 한도 안에서 안전하게 운용.
 */

const SYMBOL_MAP = {
  // 주식 인덱스
  SPX: "SPX",         // S&P 500
  NASDAQ: "IXIC",     // NASDAQ Composite
  N225: "N225",       // Nikkei 225
  KOSPI: "KS11",      // KOSPI Composite (일부 플랜에서 제한될 수 있음)
  // 크립토
  BTC: "BTC/USD",
  ETH: "ETH/USD",
  SOL: "SOL/USD",
  XRP: "XRP/USD",
};

const RANGE_CONFIG = {
  "1D": { interval: "1h", outputsize: 24, cacheS: 3600 },     // 1시간 단위 24포인트, 캐시 1h
  "1M": { interval: "1day", outputsize: 22, cacheS: 86400 },  // 1일 단위 ~한 달 거래일, 캐시 1d
  "1Y": { interval: "1week", outputsize: 52, cacheS: 86400 }, // 주 단위 1년, 캐시 1d
};

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const symbolKey = url.searchParams.get("symbol");
  const range = url.searchParams.get("range") || "all";

  const apiKey = env.TWELVE_DATA_API_KEY;
  if (!apiKey) {
    return jsonResp({ fallback: true, error: "API key not configured" }, 503, 0);
  }

  const tdSymbol = SYMBOL_MAP[symbolKey];
  if (!tdSymbol) {
    return jsonResp({ fallback: true, error: `Unknown symbol: ${symbolKey}` }, 400, 0);
  }

  // Cloudflare 캐시 우선 조회
  const cache = caches.default;
  const cacheKey = new Request(request.url, { method: "GET" });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    if (range === "all") {
      const [qRes, d1Res, m1Res, y1Res] = await Promise.allSettled([
        fetchQuote(tdSymbol, apiKey),
        fetchSeries(tdSymbol, "1h", 24, apiKey),
        fetchSeries(tdSymbol, "1day", 22, apiKey),
        fetchSeries(tdSymbol, "1week", 52, apiKey),
      ]);

      const data = { ranges: {} };
      if (qRes.status === "fulfilled") {
        data.base = qRes.value.base;
        data.chg = qRes.value.chg;
      }
      if (d1Res.status === "fulfilled") data.ranges["1D"] = d1Res.value;
      if (m1Res.status === "fulfilled") data.ranges["1M"] = m1Res.value;
      if (y1Res.status === "fulfilled") data.ranges["1Y"] = y1Res.value;

      // 전부 실패하면 폴백 신호
      if (data.base === undefined && Object.keys(data.ranges).length === 0) {
        return jsonResp(
          {
            fallback: true,
            error: "All Twelve Data calls failed",
            details: [qRes, d1Res, m1Res, y1Res]
              .filter((r) => r.status === "rejected")
              .map((r) => String(r.reason)),
          },
          502,
          0
        );
      }

      const resp = jsonResp(data, 200, 3600); // 결합 응답은 1시간 캐시
      await cache.put(cacheKey, resp.clone());
      return resp;
    }

    // 단일 range
    const cfg = RANGE_CONFIG[range];
    if (!cfg) return jsonResp({ fallback: true, error: `Unknown range: ${range}` }, 400, 0);

    const series = await fetchSeries(tdSymbol, cfg.interval, cfg.outputsize, apiKey);
    const resp = jsonResp({ range, values: series }, 200, cfg.cacheS);
    await cache.put(cacheKey, resp.clone());
    return resp;
  } catch (e) {
    return jsonResp({ fallback: true, error: String(e?.message || e) }, 502, 0);
  }
}

async function fetchQuote(symbol, apiKey) {
  const r = await fetch(
    `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(symbol)}&apikey=${apiKey}`
  );
  const j = await r.json();
  if (!j || j.status === "error") throw new Error(j?.message || "quote error");
  return {
    base: parseFloat(j.close),
    chg: parseFloat(j.percent_change),
  };
}

async function fetchSeries(symbol, interval, outputsize, apiKey) {
  const r = await fetch(
    `https://api.twelvedata.com/time_series?symbol=${encodeURIComponent(
      symbol
    )}&interval=${interval}&outputsize=${outputsize}&apikey=${apiKey}`
  );
  const j = await r.json();
  if (!j || j.status === "error") throw new Error(j?.message || "series error");
  // Twelve Data는 newest-first로 반환 → 차트용으로 oldest-first 정렬
  return (j.values || [])
    .map((v) => parseFloat(v.close))
    .filter((n) => !Number.isNaN(n))
    .reverse();
}

function jsonResp(obj, status, cacheS) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  };
  if (cacheS > 0) {
    headers["Cache-Control"] = `public, max-age=${cacheS}`;
  } else {
    headers["Cache-Control"] = "no-store";
  }
  return new Response(JSON.stringify(obj), { status, headers });
}
