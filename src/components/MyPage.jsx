import { motion } from "framer-motion";
import { Check, ChevronRight, Flame, TrendingUp } from "lucide-react";
import { AXIS_LABEL, TYPES, resolveType } from "../data/events";
import { L } from "../data/i18n";
import { T } from "../data/theme";
import Disclaimer from "./Disclaimer.jsx";

export default function MyPage({ lang, forkState, openFork }) {
  const m = L[lang].my;
  const ax = AXIS_LABEL[lang];
  const { picks, score, prismCount } = forkState;
  const daysPlayed = Object.keys(picks).length;
  const type = resolveType(score);
  const total = Math.max(1, score.R + score.C + score.P + score.A);
  const todayPicked = !!picks[0];
  const pickList = Object.entries(picks).sort((a, b) => Number(a[0]) - Number(b[0]));

  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "36px 20px 60px" }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: T.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TrendingUp size={24} color="#fff" />
          </div>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: T.strong, margin: 0, letterSpacing: -0.5 }}>{m.title}</h1>
            <div style={{ fontSize: 13.5, color: T.textTertiary, marginTop: 2 }}>Guest{m.greeting}</div>
          </div>
        </div>

        {/* today's fork card */}
        <motion.div whileHover={{ y: -3 }} onClick={openFork}
          style={{ background: todayPicked ? T.card : T.gradient, border: todayPicked ? `1px solid ${T.line}` : "none", borderRadius: 18, padding: "22px 24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, boxShadow: todayPicked ? "none" : "0 12px 32px rgba(49,130,246,0.25)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: todayPicked ? T.primarySoft : "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {todayPicked ? <Check size={22} color={T.primary} /> : <Flame size={22} color="#fff" />}
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: todayPicked ? T.strong : "#fff" }}>{m.forkCard}</div>
              <div style={{ fontSize: 13, color: todayPicked ? T.textTertiary : "rgba(255,255,255,0.85)", marginTop: 2 }}>{todayPicked ? m.forkDone : m.forkCardSub}</div>
            </div>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13.5, fontWeight: 700, color: todayPicked ? T.primary : "#fff" }}>
            {m.openFork} <ChevronRight size={16} />
          </div>
        </motion.div>

        {/* stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 18 }}>
          {[{ n: daysPlayed, l: m.picks }, { n: Math.min(daysPlayed, 7), l: m.streak }, { n: prismCount, l: m.prisms }].map((d, i) => (
            <div key={i} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: "18px", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: T.primary, lineHeight: 1 }}>{d.n}</div>
              <div style={{ fontSize: 12.5, color: T.textTertiary, marginTop: 5 }}>{d.l}</div>
            </div>
          ))}
        </div>

        {/* portrait */}
        <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 18, padding: "26px", marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.primary, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{m.portrait}</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 18px", letterSpacing: -0.5, background: type ? T.gradient : "none", WebkitBackgroundClip: type ? "text" : "initial", WebkitTextFillColor: type ? "transparent" : T.textTertiary }}>
            {type ? TYPES[type][lang] : "—"}
          </h2>
          {["R", "C", "P", "A"].map((axk) => {
            const pct = Math.round((score[axk] / total) * 100);
            return (
              <div key={axk} style={{ marginBottom: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: T.textPrimary, marginBottom: 6 }}>
                  <span>{ax[axk]}</span><b style={{ color: T.primary }}>{pct}%</b>
                </div>
                <div style={{ height: 8, background: T.bgSoft, borderRadius: 8, overflow: "hidden" }}>
                  <motion.div animate={{ width: `${pct}%` }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: "100%", background: T.gradient, borderRadius: 8 }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* history */}
        <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 18, padding: "24px 26px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.primary, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>{m.history}</div>
          {pickList.length === 0 ? (
            <p style={{ fontSize: 14, color: T.textTertiary, margin: 0 }}>{m.noHistory}</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {pickList.map(([off, p], i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: i < pickList.length - 1 ? 12 : 0, borderBottom: i < pickList.length - 1 ? `1px solid ${T.bgSoft}` : "none" }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: T.primary, minWidth: 42 }}>{p.year}</span>
                  <span style={{ fontSize: 13.5, color: T.textSecondary, lineHeight: 1.55 }}>{p.text[lang]}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <Disclaimer lang={lang} />
      </motion.div>
    </div>
  );
}

