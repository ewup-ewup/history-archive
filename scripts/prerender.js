/**
 * scripts/prerender.js — per-event 정적 HTML 생성 (빌드 후 실행)
 *
 * 각 사건마다 dist/event/{id}/index.html 을 만들어:
 *  - 사건별 <title>/description/canonical/OG/Twitter/JSON-LD(Article)
 *  - 크롤러용 SEO 본문(#root 안, 하이드레이션 시 교체됨)
 * 을 주입한다. 동일한 해시 자산을 참조하므로 클라이언트에서 정상 하이드레이션.
 *
 * dist/index.html의 <!-- prerender:meta:start --> ~ end 블록을 사건별 메타로 교체.
 * Cloudflare Pages 빌드 명령(npm run build)에서 vite build 다음에 실행됨.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ERAS, ERA_EVENTS, EVENT_DETAIL } from "../src/data/timeline.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, "..", "dist");
const BASE = "https://history-archive.pages.dev";

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const escText = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function clip(s, n) {
  const t = String(s ?? "").replace(/\s+/g, " ").trim();
  return t.length <= n ? t : t.slice(0, n - 1).trimEnd() + "…";
}

// id → {sub, eraIdx}
function lookup(id) {
  for (const k of Object.keys(ERA_EVENTS)) {
    const f = ERA_EVENTS[k].find((e) => e.id === id);
    if (f) return { sub: f, eraIdx: Number(k) };
  }
  return null;
}

const rawShell = readFileSync(resolve(dist, "index.html"), "utf-8");
const metaRe = /<!-- prerender:meta:start[\s\S]*?prerender:meta:end -->/;

// Cloudflare Web Analytics beacon — env로만 주입(토큰을 레포에 커밋하지 않음).
// Cloudflare Pages → Settings → Environment variables 에 CF_BEACON_TOKEN 설정 시
// 다음 배포부터 홈·SPA·21개 per-event 페이지 전부에 자동 적용됨.
const CF_TOKEN = process.env.CF_BEACON_TOKEN;
const beaconTag = CF_TOKEN
  ? `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"${CF_TOKEN}"}'></script>`
  : "";
const shell = beaconTag ? rawShell.replace("</body>", `    ${beaconTag}\n  </body>`) : rawShell;

// 홈/SPA 진입점(dist/index.html)에도 beacon 주입
if (beaconTag) {
  writeFileSync(resolve(dist, "index.html"), shell);
  console.log("✓ Cloudflare Web Analytics beacon injected (CF_BEACON_TOKEN set)");
} else {
  console.log("· CF_BEACON_TOKEN not set — analytics beacon skipped");
}

const allEvents = Object.values(ERA_EVENTS).flat();
let count = 0;

for (const ev of allEvents) {
  const id = ev.id;
  const found = lookup(id);
  const detail = EVENT_DETAIL[id];
  const era = ERAS[found.eraIdx];

  const titleKo = ev.title.ko;
  const year = ev.year.ko;
  const subtitle = detail?.subtitle?.ko || "";
  const body0 = detail?.body?.ko?.[0] || ev.impact?.ko || "";
  const lesson = detail?.lesson?.ko || "";
  const source = detail?.source?.ko || "";

  const pageTitle = `${titleKo} (${year}) — History Archive`;
  const desc = clip(`${subtitle ? subtitle + " · " : ""}${body0}`, 155);
  const url = `${BASE}/event/${encodeURIComponent(id)}`;
  const ogImg = `${BASE}/og/event-${id}.png`;

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: titleKo,
    description: desc,
    image: ogImg,
    inLanguage: "ko-KR",
    isAccessibleForFree: true,
    about: { "@type": "Thing", name: `${titleKo} (${year})` },
    author: { "@type": "Organization", name: "History Archive" },
    publisher: { "@type": "Organization", name: "History Archive" },
    mainEntityOfPage: url,
    disclaimer: "본 콘텐츠는 역사적 사실에 기반한 학습·참고용 자료이며, 투자 자문이나 권유가 아닙니다.",
  };

  const metaBlock = `<!-- prerender:meta:start -->
    <title>${esc(pageTitle)}</title>
    <meta name="description" content="${esc(desc)}" />
    <meta name="author" content="History Archive" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${esc(url)}" />
    <link rel="alternate" hreflang="ko" href="${esc(url)}" />
    <link rel="alternate" hreflang="en" href="${esc(url)}" />
    <link rel="alternate" hreflang="ja" href="${esc(url)}" />
    <link rel="alternate" hreflang="x-default" href="${esc(url)}" />
    <meta property="og:site_name" content="History Archive" />
    <meta property="og:title" content="${esc(titleKo + " · " + year)}" />
    <meta property="og:description" content="${esc(desc)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:image" content="${esc(ogImg)}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(titleKo)}" />
    <meta property="og:locale" content="ko_KR" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:locale:alternate" content="ja_JP" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(titleKo + " · " + year)}" />
    <meta name="twitter:description" content="${esc(desc)}" />
    <meta name="twitter:image" content="${esc(ogImg)}" />
    <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
    <!-- prerender:meta:end -->`;

  // 크롤러용 SEO 본문 (React 마운트 시 교체됨)
  const seoBody = `<article style="max-width:760px;margin:0 auto;padding:24px 20px">
      <p style="font-size:13px;color:${era.color === undefined ? "#3182F6" : "#6B7684"}">${escText(era.title.ko)}</p>
      <h1>${escText(year)} · ${escText(titleKo)}</h1>
      ${subtitle ? `<p>${escText(subtitle)}</p>` : ""}
      <p>${escText(clip(body0, 600))}</p>
      ${lesson ? `<h2>역사가 남긴 교훈</h2><p>${escText(clip(lesson, 500))}</p>` : ""}
      ${source ? `<p style="font-size:12px;color:#8B95A1">출처: ${escText(source)}</p>` : ""}
      <p><a href="/">← History Archive 홈</a> · <a href="/events">전체 사건</a></p>
      <p style="font-size:12px;color:#8B95A1">학습·참고용 자료이며 투자 자문이 아닙니다.</p>
    </article>`;

  let html = shell.replace(metaRe, metaBlock);
  html = html.replace('<div id="root"></div>', `<div id="root">${seoBody}</div>`);

  const outDir = resolve(dist, "event", id);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), html);
  count++;
}

console.log(`✓ prerendered ${count} per-event pages → dist/event/{id}/index.html`);

// 사이트맵 재생성 (홈 + 주요 섹션 + 21개 사건 URL)
const staticUrls = [
  { loc: `${BASE}/`, priority: "1.0", freq: "weekly" },
  { loc: `${BASE}/events`, priority: "0.8", freq: "weekly" },
  { loc: `${BASE}/market`, priority: "0.6", freq: "weekly" },
];
const eventUrls = allEvents.map((ev) => ({
  loc: `${BASE}/event/${encodeURIComponent(ev.id)}`,
  priority: "0.7",
  freq: "monthly",
}));
const urlXml = [...staticUrls, ...eventUrls]
  .map((u) => {
    const alts = `\n    <xhtml:link rel="alternate" hreflang="ko" href="${u.loc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="en" href="${u.loc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="ja" href="${u.loc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${u.loc}"/>`;
    return `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.priority}</priority>${alts}\n  </url>`;
  })
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlXml}\n</urlset>\n`;
writeFileSync(resolve(dist, "sitemap.xml"), sitemap);
console.log(`✓ sitemap.xml regenerated (${staticUrls.length + eventUrls.length} URLs)`);
