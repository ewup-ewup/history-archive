import { useState } from "react";
import { motion } from "framer-motion";
import { History } from "lucide-react";
import { L } from "../data/i18n";
import { FONT, T } from "../data/theme";

export default function QuoteChart({ q, lang, t }) {
  const periods = ["1D", "1M", "1Y", "ALL"];
  const [period, setPeriod] = useState("1Y");
  const [hover, setHover] = useState(null);
  const raw = q.ranges[period];
  // 정규화: 숫자배열 → {v}, 객체배열({x,v}) 그대로
  const data = raw.map((d) => (typeof d === "number" ? { v: d } : d));
  const isAll = period === "ALL";

  const W = 600, H = 200, padL = 8, padR = 8, padTop = 16, padBot = isAll ? 30 : 14;
  const plotH = H - padTop - padBot, plotW = W - padL - padR;
  const vals = data.map((d) => d.v);
  const vmin = Math.min(...vals), vmax = Math.max(...vals);
  const pad = (vmax - vmin) * 0.12 || 1;
  const lo = vmin - pad, hi = vmax + pad;
  const n = data.length;
  const xAt = (i) => padL + (i / (n - 1)) * plotW;
  const yAt = (v) => padTop + plotH * (1 - (v - lo) / (hi - lo));

  const first = vals[0], last = vals[n - 1];
  const up = last >= first;
  const col = up ? T.success : T.error;
  const pctFromStart = (((last - first) / first) * 100).toFixed(1);

  const linePath = data.map((d, i) => `${i === 0 ? "M" : "L"}${xAt(i).toFixed(1)},${yAt(d.v).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${xAt(n - 1).toFixed(1)},${(H - padBot).toFixed(1)} L${padL.toFixed(1)},${(H - padBot).toFixed(1)} Z`;
  const gid = `q-${q.sym.replace(/[^a-zA-Z0-9]/g, "")}-${period}`;

  // ALL 기간: 이슈 마커 매칭 (x 라벨로)
  const issueMarks = isAll ? (q.issues || []).map((iss) => {
    const idx = data.findIndex((d) => d.x === iss.at);
    return idx >= 0 ? { ...iss, idx } : null;
  }).filter(Boolean) : [];

  const fmt = (v) => q.unit === "$" ? "$" + v.toLocaleString("en-US", { maximumFractionDigits: v < 10 ? 2 : 0 }) : v.toLocaleString("ko-KR", { maximumFractionDigits: 1 });

  return (
    <div style={{ padding: "4px 2px 2px" }}>
      {/* period tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
        {periods.map((p) => (
          <button key={p} onClick={(e) => { e.stopPropagation(); setPeriod(p); setHover(null); }} style={{
            border: "none", background: period === p ? T.strong : T.bgSoft, color: period === p ? "#fff" : T.textSecondary,
            fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 8, cursor: "pointer", fontFamily: FONT, flex: 1,
          }}>{t.periods[p]}</button>
        ))}
      </div>

      {/* change summary */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 800, color: T.strong, fontVariantNumeric: "tabular-nums" }}>{fmt(last)}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: col }}>{up ? "▲" : "▼"} {Math.abs(pctFromStart)}%</span>
        <span style={{ fontSize: 11.5, color: T.textTertiary }}>{t.fromStart}</span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block", overflow: "visible" }}
        onMouseLeave={() => setHover(null)}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={col} stopOpacity="0.22" />
            <stop offset="100%" stopColor={col} stopOpacity="0.01" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gid})`} />
        <motion.path key={period} d={linePath} fill="none" stroke={col} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, ease: "easeInOut" }} />
        {/* hover points (비-ALL) */}
        {!isAll && data.map((d, i) => (
          <circle key={i} cx={xAt(i)} cy={yAt(d.v)} r="8" fill="transparent" style={{ cursor: "pointer" }}
            onMouseEnter={() => setHover({ i, v: d.v })} />
        ))}
        {hover && !isAll && (
          <>
            <line x1={xAt(hover.i)} y1={padTop} x2={xAt(hover.i)} y2={H - padBot} stroke={T.line} strokeWidth="1" strokeDasharray="3 3" />
            <circle cx={xAt(hover.i)} cy={yAt(hover.v)} r="4" fill={col} />
            <text x={Math.min(Math.max(xAt(hover.i), 30), W - 30)} y={yAt(hover.v) - 10} textAnchor="middle" fontSize="12" fontWeight="700" fill={T.strong}>{fmt(hover.v)}</text>
          </>
        )}
        {/* ALL: 이슈 마커 */}
        {issueMarks.map((m, k) => {
          const mx = xAt(m.idx), my = yAt(data[m.idx].v);
          const mc = m.dir === "up" ? T.success : T.error;
          return (
            <g key={k} style={{ cursor: "pointer" }} onMouseEnter={() => setHover({ issue: m })} onMouseLeave={() => setHover(null)}>
              <line x1={mx} y1={my} x2={mx} y2={padTop - 6} stroke={mc} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
              <circle cx={mx} cy={my} r="5" fill="#fff" stroke={mc} strokeWidth="2" />
              <circle cx={mx} cy={padTop - 9} r="3" fill={mc} />
            </g>
          );
        })}
        {/* ALL: x축 라벨 (처음·끝) */}
        {isAll && (
          <>
            <text x={padL} y={H - padBot + 18} textAnchor="start" fontSize="10" fill={T.textTertiary}>{data[0].x}</text>
            <text x={W - padR} y={H - padBot + 18} textAnchor="end" fontSize="10" fill={T.textTertiary}>{lang === "ko" ? "현재" : lang === "ja" ? "現在" : "Now"}</text>
          </>
        )}
      </svg>

      {/* 이슈 호버 툴팁 / ALL 이슈 리스트 */}
      {isAll && q.issues && q.issues.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.primary, marginBottom: 8, display: "flex", alignItems: "center", gap: 5 }}>
            <History size={13} /> {t.chartIssues}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {q.issues.map((iss, k) => {
              const mc = iss.dir === "up" ? T.success : T.error;
              return (
                <div key={k} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 12.5, lineHeight: 1.55 }}>
                  <span style={{ flexShrink: 0, marginTop: 1, width: 16, height: 16, borderRadius: "50%", background: iss.dir === "up" ? "#E7F9ED" : "#FFF0F0", color: mc, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800 }}>{iss.dir === "up" ? "▲" : "▼"}</span>
                  <span style={{ color: T.textSecondary }}><b style={{ color: T.strong }}>{iss.at}</b> · {iss.txt[lang]}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
