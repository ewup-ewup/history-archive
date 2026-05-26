import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, ChevronLeft, Flame, TrendingUp } from "lucide-react";
import { L } from "../data/i18n";
import { FONT, T } from "../data/theme";
import { ERAS, ERA_EVENTS, ERA_ICON, EVENT_DETAIL } from "../data/timeline";
import Disclaimer from "./Disclaimer.jsx";
import EventChart from "./EventChart.jsx";

function findEvent(eventId) {
  for (const eraIdx of Object.keys(ERA_EVENTS)) {
    const sub = ERA_EVENTS[eraIdx].find((e) => e.id === eventId);
    if (sub) return { sub, eraIdx: Number(eraIdx) };
  }
  return null;
}

export default function EventDetail({ lang, eventId, setView, gotoEra, openMarket }) {
  const tl = L[lang].timeline;
  const found = findEvent(eventId);
  if (!found) return null;
  const { sub, eraIdx } = found;
  const era = ERAS[eraIdx];
  const Icon = ERA_ICON[era.icon];
  const detail = EVENT_DETAIL[eventId]; // 풀 상세 (없으면 기본 페이지)

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [eventId]);

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 20px 60px" }}>
      {/* back */}
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ x: -3 }}
        onClick={() => gotoEra(eraIdx, eventId)}
        style={{ border: "none", background: "transparent", color: T.textSecondary, fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: FONT, display: "inline-flex", alignItems: "center", gap: 5, padding: "8px 0", marginBottom: 8 }}>
        <ChevronLeft size={16} /> {tl.back}
      </motion.button>

      {/* hero */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: era.soft, color: era.color, fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 20, marginBottom: 16 }}>
          <Icon size={13} /> {era.title[lang]}
        </div>
        <div style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)", fontWeight: 800, color: era.color, lineHeight: 1, letterSpacing: -1.5 }}>{sub.year[lang]}</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, color: T.strong, margin: "12px 0 10px", letterSpacing: -0.8, lineHeight: 1.2 }}>{sub.title[lang]}</h1>
        {detail && <div style={{ fontSize: 14, color: T.textTertiary, fontWeight: 600 }}>{detail.subtitle[lang]}</div>}
      </motion.div>

      {/* stats */}
      {detail && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, margin: "26px 0" }} className="stat-grid">
          {detail.stats.map((s, i) => (
            <div key={i} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: "16px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: era.color, letterSpacing: -0.3, lineHeight: 1.2 }}>{s.v[lang]}</div>
              <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 6, lineHeight: 1.4 }}>{s.k[lang]}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* price-flow chart */}
      {detail && detail.chart && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.5 }} style={{ marginBottom: 26 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: era.color, letterSpacing: 1, textTransform: "uppercase" }}>{tl.chartTitle}</span>
            <div style={{ flex: 1, height: 1, background: T.bgSoft }} />
          </div>
          <EventChart chart={detail.chart} color={era.color} lang={lang} />
        </motion.div>
      )}

      {/* body — the story */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} style={{ marginTop: detail ? 0 : 26 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: era.color, letterSpacing: 1, textTransform: "uppercase" }}>{tl.bg}</span>
          <div style={{ flex: 1, height: 1, background: T.bgSoft }} />
        </div>
        {detail ? (
          detail.body[lang].map((para, i) => (
            <p key={i} style={{ fontSize: 16, color: T.textPrimary, lineHeight: 1.95, margin: "0 0 18px" }}>{para}</p>
          ))
        ) : (
          <p style={{ fontSize: 16, color: T.textPrimary, lineHeight: 1.95, margin: "0 0 18px" }}>{sub.impact[lang]}</p>
        )}
      </motion.div>

      {/* psychology */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ background: "#FFF5F4", borderRadius: 16, padding: "22px 24px", borderLeft: `3px solid ${T.error}`, margin: "8px 0 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.error, marginBottom: 10, letterSpacing: 0.5, textTransform: "uppercase" }}><Brain size={14} /> {tl.mindLabel}</div>
        <p style={{ fontSize: 15, color: "#7A1F1B", lineHeight: 1.85, margin: 0, fontWeight: 500 }}>{sub.mind[lang]}</p>
      </motion.div>

      {/* lesson */}
      {detail && (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "24px 26px", marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.primary, marginBottom: 10, letterSpacing: 0.5, textTransform: "uppercase" }}><BookOpen size={14} /> {tl.lesson}</div>
          <p style={{ fontSize: 15.5, color: T.strong, lineHeight: 1.85, margin: 0, fontWeight: 500 }}>{detail.lesson[lang]}</p>
        </motion.div>
      )}

      {/* today connection */}
      {detail && (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: T.primarySoft, borderRadius: 16, padding: "24px 26px", marginBottom: 26 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.primary, marginBottom: 10, letterSpacing: 0.5, textTransform: "uppercase" }}><TrendingUp size={14} /> {tl.todayLink}</div>
          <p style={{ fontSize: 15.5, color: T.strong, lineHeight: 1.85, margin: "0 0 16px" }}>{detail.today[lang]}</p>
          <motion.button whileHover={{ x: 3 }} onClick={openMarket}
            style={{ border: "none", background: "transparent", color: T.primary, fontWeight: 700, fontSize: 13.5, cursor: "pointer", fontFamily: FONT, display: "inline-flex", alignItems: "center", gap: 5, padding: 0 }}>
            {tl.relatedMarket} <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      )}

      {/* CTA: try at fork */}
      <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(49,130,246,0.3)" }} whileTap={{ scale: 0.98 }}
        onClick={() => setView("fork")}
        style={{ width: "100%", border: "none", background: T.gradient, color: "#fff", fontWeight: 700, fontSize: 15, padding: "16px", borderRadius: 14, cursor: "pointer", fontFamily: FONT, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <Flame size={17} /> {tl.tryFork}
      </motion.button>

      {/* source */}
      {detail && (
        <p style={{ marginTop: 22, fontSize: 12, color: T.textTertiary, lineHeight: 1.7, borderTop: `1px solid ${T.line}`, paddingTop: 16 }}>
          <b style={{ color: T.textSecondary }}>{tl.source}</b> · {detail.source[lang]}
        </p>
      )}
      <Disclaimer lang={lang} />
    </div>
  );
}

