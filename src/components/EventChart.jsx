import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { L } from "../data/i18n";
import { T } from "../data/theme";

export default function EventChart({ chart, color, lang }) {
  if (!chart) return null;
  const W = 640, H = 250, padL = 48, padR = 18, padTop = 30, padBot = 34;
  const plotH = H - padTop - padBot;
  const plotW = W - padL - padR;

  // 실측 데이터 모드
  if (chart.real) {
    const s = chart.series;
    const n = s.length;
    const ymax = chart.ymax;
    const stepX = plotW / (n - 1);
    const xAt = (i) => padL + i * stepX;
    const yAt = (v) => padTop + plotH * (1 - v / ymax);
    const linePath = s.map((d, i) => `${i === 0 ? "M" : "L"}${xAt(i).toFixed(1)},${yAt(d.v).toFixed(1)}`).join(" ");
    const areaPath = `${linePath} L${xAt(n - 1).toFixed(1)},${(H - padBot).toFixed(1)} L${padL.toFixed(1)},${(H - padBot).toFixed(1)} Z`;
    const peakX = xAt(chart.peakAt), peakY = yAt(s[chart.peakAt].v);
    const gid = `gr-${Math.round(peakX)}-${Math.round(peakY)}`;
    // Y축 눈금 (0, 1/2, max)
    const yticks = [0, Math.round(ymax / 2), ymax];
    // X축 라벨 (처음, 정점, 끝)
    const xticks = [{ i: 0, label: s[0].x }, { i: chart.peakAt, label: s[chart.peakAt].x }, { i: n - 1, label: s[n - 1].x }];

    return (
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "18px 18px 14px", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: T.strong }}>{chart.unit[lang]}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, fontWeight: 700, color: T.success, background: "#E7F9ED", padding: "3px 8px", borderRadius: 20 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: T.success }} /> {lang === "ko" ? "실제 데이터" : lang === "ja" ? "実データ" : "Real data"}
          </span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={chart.cap[lang]} style={{ display: "block" }}>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.26" />
              <stop offset="100%" stopColor={color} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {/* Y축 눈금선 + 값 */}
          {yticks.map((v, i) => {
            const y = yAt(v);
            return (
              <g key={i}>
                <line x1={padL} y1={y} x2={W - padR} y2={y} stroke={T.bgSoft} strokeWidth="1" />
                <text x={padL - 8} y={y + 3.5} textAnchor="end" fontSize="10" fill={T.textTertiary}>{v.toLocaleString()}</text>
              </g>
            );
          })}
          {/* area + line */}
          <path d={areaPath} fill={`url(#${gid})`} />
          <motion.path d={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }} />
          {/* 데이터 점 (포인트가 적을 때만 표시) */}
          {n <= 16 && s.map((d, i) => (
            <circle key={i} cx={xAt(i)} cy={yAt(d.v)} r={i === chart.peakAt ? 0 : 2.5} fill={color} opacity="0.5" />
          ))}
          {/* peak marker */}
          <motion.circle cx={peakX} cy={peakY} r="5.5" fill={color}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring", stiffness: 300 }} />
          <circle cx={peakX} cy={peakY} r="5.5" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3">
            <animate attributeName="r" from="5.5" to="14" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.4" to="0" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <text x={Math.min(Math.max(peakX, 80), W - 80)} y={Math.max(peakY - 14, 16)} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>{chart.peak[lang]}</text>
          {/* X축 라벨 */}
          {xticks.map((t, i) => (
            <text key={i} x={xAt(t.i)} y={H - padBot + 16} textAnchor={i === 0 ? "start" : i === xticks.length - 1 ? "end" : "middle"} fontSize="10" fill={T.textTertiary}>{t.label}</text>
          ))}
        </svg>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginTop: 8, paddingTop: 10, borderTop: `1px solid ${T.bgSoft}` }}>
          <Info size={12} color={T.textTertiary} style={{ flexShrink: 0, marginTop: 1 }} />
          <span style={{ fontSize: 11, color: T.textTertiary, lineHeight: 1.5 }}>{chart.dataNote[lang]}</span>
        </div>
      </div>
    );
  }

  // 개념도 모드 (데이터 없는 고대·중세 사건)
  const pts = chart.pts;
  const n = pts.length;
  const stepX = plotW / (n - 1);
  const xAt = (i) => padL + i * stepX;
  const yAt = (v) => padTop + plotH * (1 - v / 100);
  const solid = pts.map((v, i) => (v == null ? null : [xAt(i), yAt(v), i])).filter(Boolean);
  const linePath = solid.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const last = solid[solid.length - 1];
  const areaPath = `${linePath} L${last[0].toFixed(1)},${(H - padBot).toFixed(1)} L${solid[0][0].toFixed(1)},${(H - padBot).toFixed(1)} Z`;
  const peakX = xAt(chart.peakAt), peakY = yAt(pts[chart.peakAt]);
  const gid = `gc-${Math.round(peakX)}-${Math.round(peakY)}`;

  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "18px 18px 14px", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: 6 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, fontWeight: 700, color: T.textTertiary, background: T.bgSoft, padding: "3px 8px", borderRadius: 20 }}>
          {lang === "ko" ? "개념도" : lang === "ja" ? "概念図" : "Conceptual"}
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={chart.cap[lang]} style={{ display: "block" }}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.22" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <line x1={padL} y1={H - padBot} x2={W - padR} y2={H - padBot} stroke={T.line} strokeWidth="1" />
        <path d={areaPath} fill={`url(#${gid})`} />
        <motion.path d={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={chart.real === false ? "0" : "0"}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, ease: "easeInOut" }} />
        {chart.ongoing && (
          <>
            <path d={`M${last[0].toFixed(1)},${last[1].toFixed(1)} L${(W - padR).toFixed(1)},${yAt(pts[chart.peakAt] - 6).toFixed(1)}`}
              fill="none" stroke={color} strokeWidth="2" strokeDasharray="3 5" opacity="0.5" />
            <text x={W - padR} y={yAt(pts[chart.peakAt] - 6) - 8} textAnchor="end" fontSize="20" fontWeight="800" fill={color} opacity="0.6">?</text>
          </>
        )}
        <motion.circle cx={peakX} cy={peakY} r="5" fill={color}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring", stiffness: 300 }} />
        <circle cx={peakX} cy={peakY} r="5" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3">
          <animate attributeName="r" from="5" to="13" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x={Math.min(Math.max(peakX, 70), W - 70)} y={Math.max(peakY - 14, 16)} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>{chart.peak[lang]}</text>
      </svg>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, paddingTop: 10, borderTop: `1px solid ${T.bgSoft}` }}>
        <Info size={12} color={T.textTertiary} style={{ flexShrink: 0 }} />
        <span style={{ fontSize: 11.5, color: T.textTertiary, lineHeight: 1.5 }}>{chart.cap[lang]} · {L[lang].timeline.chartNote}</span>
      </div>
    </div>
  );
}
