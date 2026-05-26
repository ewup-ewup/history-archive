import { motion, AnimatePresence } from "framer-motion";
import { Check, Diamond, RotateCcw } from "lucide-react";
import { AXIS_LABEL, EVENTS, RARITY, TYPES, resolveType } from "../data/events";
import { L } from "../data/i18n";
import { FONT, T, navBtn } from "../data/theme";
import Disclaimer from "./Disclaimer.jsx";

export default function Fork({ lang, forkState, choose, reset, setDayOffset }) {
  const fk = L[lang].fork;
  const ax = AXIS_LABEL[lang];
  const { picks, score, dayOffset, prismCount } = forkState;

  const eventForDay = (off) => EVENTS[((2 + off) % EVENTS.length + EVENTS.length) % EVENTS.length];
  const ev = eventForDay(dayOffset);
  const rar = RARITY[ev.rarity];
  const picked = picks[dayOffset];
  const daysPlayed = Object.keys(picks).length;
  const type = resolveType(score);

  const total = Math.max(1, score.R + score.C + score.P + score.A);
  const dayLabel = dayOffset === 0 ? fk.today : dayOffset > 0 ? `${dayOffset}${fk.after}` : `${-dayOffset}${fk.before}`;

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "32px 20px 60px" }}>
      {/* dock */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { n: daysPlayed, l: fk.dock[0] },
            { n: Math.min(daysPlayed, 7), l: fk.dock[1] },
            { n: prismCount, l: fk.dock[2] },
          ].map((d, i) => (
            <div key={i} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: "12px 20px", textAlign: "center", minWidth: 90 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: T.primary, lineHeight: 1 }}>{d.n}</div>
              <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 4 }}>{d.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setDayOffset((d) => d - 1)} style={navBtn}>‹</button>
          <span style={{ fontSize: 13, color: T.textSecondary, minWidth: 80, textAlign: "center" }}>{dayLabel}</span>
          <button onClick={() => setDayOffset((d) => d + 1)} style={navBtn}>›</button>
          <button onClick={reset} style={{ ...navBtn, width: "auto", borderRadius: 8, padding: "0 12px", fontSize: 12, fontFamily: FONT }}><RotateCcw size={13} /></button>
        </div>
      </div>

      {/* event prelude */}
      <AnimatePresence mode="wait">
        <motion.div key={dayOffset} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 8px" }}>
            <div style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: T.primary, lineHeight: 1, letterSpacing: -1 }}>{ev.year}</div>
            <div style={{ fontSize: 12, color: rar.color, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "10px 0 6px" }}>{ev.cat[lang]}</div>
            <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 700, color: T.strong, margin: "0 0 12px", letterSpacing: -0.5 }}>{ev.title[lang]}</h2>
            <p style={{ color: T.textSecondary, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{ev.body[lang]}</p>
          </div>

          {!picked ? (
            <>
              <div style={{ textAlign: "center", margin: "26px 0 6px" }}>
                <div style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: T.textTertiary, marginBottom: 6 }}>{fk.forkLabel}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: T.strong }}>{ev.prompt[lang]}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: rar.color, background: rar.soft, padding: "5px 12px", borderRadius: 20, marginTop: 10 }}>
                  <Diamond size={11} fill={rar.color} /> {rar.label}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginTop: 18 }} className="card-grid">
                {ev.cards.map((c, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 40, rotateX: 12 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, boxShadow: `0 20px 44px ${rar.glow}` }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => choose(c, ev)}
                    style={{ background: T.card, border: `1.5px solid ${rar.color}55`, borderRadius: 16, padding: "22px 20px", cursor: "pointer", display: "flex", flexDirection: "column", minHeight: 200 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: rar.color, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>
                      <Diamond size={9} fill={rar.color} /> {RARITY[ev.rarity].label.split(" · ")[0]}
                    </div>
                    <div style={{ fontStyle: "italic", fontSize: 13, color: T.textTertiary, marginBottom: 8 }}>{c.axis[lang]}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: T.strong, lineHeight: 1.5, flex: 1 }}>{c.text[lang]}</div>
                    <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${T.line}`, fontSize: 12.5, color: rar.color, fontWeight: 600 }}>
                      ▲ {fk.gain}{Object.values(c.s).reduce((a, b) => a + b, 0)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              style={{ maxWidth: 560, margin: "26px auto 0", background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "30px", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#E7F9ED", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <Check size={24} color={T.success} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: T.strong, margin: "0 0 8px" }}>{fk.doneTitle}</h3>
              <div style={{ background: T.primarySoft, borderRadius: 10, padding: "14px 18px", color: T.textPrimary, fontSize: 14.5, lineHeight: 1.6, margin: "14px 0" }}>
                {picked.year} · {picked.text[lang]}
              </div>
              <p style={{ fontSize: 13.5, color: T.textTertiary, margin: 0 }}>{fk.doneNote}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* cumulative portrait */}
      <div style={{ marginTop: 44, borderTop: `1px solid ${T.line}`, paddingTop: 32 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: T.textTertiary, marginBottom: 8 }}>{fk.portraitLabel}</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, letterSpacing: -0.5, background: type ? T.gradient : "none", WebkitBackgroundClip: type ? "text" : "initial", WebkitTextFillColor: type ? "transparent" : T.textTertiary }}>
            {type ? TYPES[type][lang] : "—"}
          </h2>
          <div style={{ fontSize: 13, color: T.textTertiary, marginTop: 6 }}>
            {!type ? fk.first
              : daysPlayed < 7 ? `${TYPES[type].sub} · ${fk.forming(daysPlayed)}`
              : `${TYPES[type].sub} · ${fk.fixed(daysPlayed)}`}
          </div>
        </div>
        <div style={{ maxWidth: 520, margin: "0 auto", background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: 26 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.primary, letterSpacing: 1, textTransform: "uppercase", marginBottom: 18 }}>{fk.spectrum}</div>
          {["R", "C", "P", "A"].map((axk) => {
            const pct = Math.round((score[axk] / total) * 100);
            return (
              <div key={axk} style={{ marginBottom: 14 }}>
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
      </div>

      <Disclaimer lang={lang} />
    </div>
  );
}
