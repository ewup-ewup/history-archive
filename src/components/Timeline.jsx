import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Globe, Heart, Landmark, LineChart, Plus } from "lucide-react";
import { L } from "../data/i18n";
import { FONT, T } from "../data/theme";
import { ERAS, ERA_EVENTS, ERA_ICON } from "../data/timeline";
import Disclaimer from "./Disclaimer.jsx";

export default function Timeline({ setView, lang, openIdx, focusEvent, gotoDetail }) {
  const tl = L[lang].timeline;
  const [open, setOpen] = useState(openIdx != null ? openIdx : 0); // 펼친 시대 인덱스 (-1이면 모두 닫힘)
  useEffect(() => { if (openIdx != null) setOpen(openIdx); }, [openIdx]);
  useEffect(() => {
    if (focusEvent) {
      const tmr = setTimeout(() => {
        const el = document.getElementById(`ev-${focusEvent}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 450);
      return () => clearTimeout(tmr);
    }
  }, [focusEvent, openIdx]);

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: "center", padding: "44px 0 30px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: T.primarySoft, color: T.primary, fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 20, marginBottom: 16 }}>
          <LineChart size={13} /> {tl.flag}
        </div>
        <h1 style={{ fontSize: "clamp(1.9rem,5vw,3rem)", fontWeight: 800, color: T.strong, letterSpacing: -1, lineHeight: 1.12, margin: 0 }}>
          {tl.h1a}<span style={{ background: T.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{tl.h1hl}</span>{tl.h1b}
        </h1>
        <p style={{ color: T.textSecondary, fontSize: 16, marginTop: 14, lineHeight: 1.7, maxWidth: 560, margin: "14px auto 0" }}>
          {tl.sub}
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 18, marginTop: 20, fontSize: 13, color: T.textTertiary }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Globe size={14} color={T.primary} /> {tl.legendWorld}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Landmark size={14} color={T.accent} /> {tl.legendKorea}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Brain size={14} color={T.error} /> {tl.legendMind}</span>
        </div>
      </motion.div>

      {/* the spine */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 27, top: 10, bottom: 10, width: 2, background: T.line }} className="spine-line" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {ERAS.map((era, i) => {
            const Icon = ERA_ICON[era.icon];
            const isOpen = open === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: "relative", paddingLeft: 64 }}>
                {/* node dot */}
                <div style={{ position: "absolute", left: 12, top: 18, width: 32, height: 32, borderRadius: "50%", background: era.soft, border: `2px solid ${era.color}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                  <Icon size={16} color={era.color} />
                </div>

                <div style={{ background: T.card, border: `1px solid ${isOpen ? era.color + "66" : T.line}`, borderRadius: 16, overflow: "hidden", boxShadow: isOpen ? `0 12px 32px ${era.color}1a` : "none", transition: "border-color .2s, box-shadow .2s" }}>
                  {/* header — clickable */}
                  <div onClick={() => setOpen(isOpen ? -1 : i)} style={{ padding: "18px 22px", cursor: "pointer", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 13, fontWeight: 800, color: era.color, fontVariantNumeric: "tabular-nums" }}>{era.no}</span>
                        <span style={{ fontSize: 18, fontWeight: 700, color: T.strong, letterSpacing: -0.4 }}>{era.title[lang]}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 5, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 12.5, color: T.textTertiary }}>{era.when[lang]}</span>
                        <span style={{ width: 3, height: 3, borderRadius: "50%", background: T.textTertiary, opacity: 0.5 }} />
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 700, color: era.color, background: era.soft, padding: "2px 9px", borderRadius: 20 }}>
                          <Heart size={10} /> {era.mind[lang]} — {era.mindFull[lang]}
                        </span>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: T.bgSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Plus size={16} color={T.textSecondary} />
                    </motion.div>
                  </div>

                  {/* expanded body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: "hidden" }}>
                        <div style={{ padding: "0 22px 22px" }}>
                          <p style={{ fontSize: 15, color: T.textPrimary, lineHeight: 1.85, margin: "0 0 18px", paddingTop: 4, borderTop: `1px solid ${T.bgSoft}` }}>{era.summary[lang]}</p>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="track-grid">
                            <div style={{ background: T.bg, borderRadius: 12, padding: "16px 18px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.primary, marginBottom: 8 }}><Globe size={13} /> {tl.world}</div>
                              <p style={{ fontSize: 13.5, color: T.textSecondary, lineHeight: 1.7, margin: 0 }}>{era.world[lang]}</p>
                            </div>
                            <div style={{ background: "#F7F4FF", borderRadius: 12, padding: "16px 18px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.accent, marginBottom: 8 }}><Landmark size={13} /> {tl.korea}</div>
                              <p style={{ fontSize: 13.5, color: T.textSecondary, lineHeight: 1.7, margin: 0 }}>{era.korea[lang]}</p>
                            </div>
                          </div>
                          {/* psychology — the signature */}
                          <div style={{ marginTop: 12, background: "#FFF5F4", borderRadius: 12, padding: "16px 18px", borderLeft: `3px solid ${T.error}` }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.error, marginBottom: 8 }}><Brain size={13} /> {tl.psych}</div>
                            <p style={{ fontSize: 14, color: "#7A1F1B", lineHeight: 1.75, margin: 0 }}>{era.psych[lang]}</p>
                          </div>

                          {/* 세부 사건 타임라인 */}
                          {ERA_EVENTS[i] && (
                            <div style={{ marginTop: 22 }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                                <span style={{ fontSize: 12, fontWeight: 700, color: era.color, letterSpacing: 1, textTransform: "uppercase" }}>{tl.eventsLabel}</span>
                                <div style={{ flex: 1, height: 1, background: T.bgSoft }} />
                              </div>
                              <div style={{ position: "relative", paddingLeft: 22 }}>
                                <div style={{ position: "absolute", left: 4, top: 6, bottom: 6, width: 2, background: era.color + "33" }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                  {ERA_EVENTS[i].map((sub, si) => {
                                    const hot = focusEvent === sub.id;
                                    return (
                                      <motion.div key={sub.id} id={`ev-${sub.id}`}
                                        initial={false}
                                        animate={hot ? { scale: [1, 1.015, 1] } : {}}
                                        transition={{ duration: 0.6 }}
                                        style={{ position: "relative", background: hot ? era.soft : T.bg, border: `1px solid ${hot ? era.color + "88" : T.line}`, borderRadius: 12, padding: "14px 16px" }}>
                                        <div style={{ position: "absolute", left: -22, top: 18, width: 10, height: 10, borderRadius: "50%", background: hot ? era.color : T.card, border: `2px solid ${era.color}`, zIndex: 1 }} />
                                        <div style={{ display: "flex", alignItems: "baseline", gap: 9, marginBottom: 6, flexWrap: "wrap" }}>
                                          <span style={{ fontSize: 15, fontWeight: 800, color: era.color, letterSpacing: -0.3 }}>{sub.year[lang]}</span>
                                          <span style={{ fontSize: 14.5, fontWeight: 700, color: T.strong, letterSpacing: -0.3 }}>{sub.title[lang]}</span>
                                        </div>
                                        <p style={{ fontSize: 13.5, color: T.textSecondary, lineHeight: 1.7, margin: "0 0 10px" }}>{sub.impact[lang]}</p>
                                        <div style={{ display: "flex", gap: 7, alignItems: "flex-start", background: "#FFF5F4", borderRadius: 8, padding: "9px 11px" }}>
                                          <Brain size={13} color={T.error} style={{ flexShrink: 0, marginTop: 2 }} />
                                          <span style={{ fontSize: 12.5, color: "#7A1F1B", lineHeight: 1.6 }}>{sub.mind[lang]}</span>
                                        </div>
                                        <motion.button whileHover={{ x: 3 }} onClick={() => gotoDetail(sub.id)}
                                          style={{ marginTop: 11, border: "none", background: "transparent", color: era.color, fontWeight: 700, fontSize: 12.5, cursor: "pointer", fontFamily: FONT, display: "inline-flex", alignItems: "center", gap: 4, padding: 0 }}>
                                          {tl.detail} <ArrowRight size={13} />
                                        </motion.button>
                                      </motion.div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* closing thesis */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ marginTop: 28, background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "28px 30px", textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.primary, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>{tl.thesisLabel}</div>
        <p style={{ fontSize: 17, fontWeight: 700, color: T.strong, lineHeight: 1.6, margin: "0 0 8px", letterSpacing: -0.3 }}>{tl.thesis}</p>
        <p style={{ fontSize: 14.5, color: T.textSecondary, lineHeight: 1.8, margin: 0 }}>
          {tl.thesisBody}
        </p>
        <motion.button whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(49,130,246,0.3)" }} whileTap={{ scale: 0.97 }} onClick={() => setView("fork")}
          style={{ marginTop: 20, border: "none", background: T.gradient, color: "#fff", fontWeight: 700, fontSize: 14.5, padding: "13px 26px", borderRadius: 12, cursor: "pointer", fontFamily: FONT, display: "inline-flex", alignItems: "center", gap: 8 }}>
          {tl.thesisCta} <ArrowRight size={16} />
        </motion.button>
      </motion.div>

      <Disclaimer lang={lang} />
    </div>
  );
}

