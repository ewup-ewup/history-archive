import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, BarChart3, Bitcoin, ChevronRight, ExternalLink, Info, TrendingDown, TrendingUp } from "lucide-react";
import { I18N, L } from "../data/i18n";
import { ECHOES, PARTNERS, QUOTES } from "../data/market";
import { FONT, T } from "../data/theme";
import { EVENT_DETAIL } from "../data/timeline";
import AdSlot from "./AdSlot.jsx";
import QuoteChart from "./QuoteChart.jsx";

export default function MarketDemo({ lang, setView, gotoEra, gotoDetail }) {
  const [cat, setCat] = useState("stocks");
  const [tick, setTick] = useState(0);
  const [openSym, setOpenSym] = useState(null);
  const t = I18N[lang];
  const ec = ECHOES[cat];
  const echoT = L[lang].echo;

  useEffect(() => {
    const id = setInterval(() => setTick((x) => x + 1), 2500);
    return () => clearInterval(id);
  }, []);

  const jitter = (base, i) => {
    const w = Math.sin(tick * 0.7 + i * 1.3) * (base * 0.0008);
    return base + w;
  };
  const fmt = (n, unit) => unit === "$" ? "$" + n.toLocaleString("en-US", { maximumFractionDigits: n < 10 ? 2 : 0 }) : n.toLocaleString("ko-KR", { maximumFractionDigits: 1 });

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 60px" }}>
      {/* header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ textAlign: "center", padding: "40px 0 26px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: T.primarySoft, color: T.primary, fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 20, marginBottom: 16 }}>
          <BarChart3 size={13} /> {t.tag}
        </div>
        <h1 style={{ fontSize: "clamp(1.9rem,5vw,3rem)", fontWeight: 800, color: T.strong, letterSpacing: -1, lineHeight: 1.12, margin: 0 }}>
          {t.h1a} <span style={{ background: T.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}</span>
        </h1>
        <p style={{ color: T.textSecondary, fontSize: 16, marginTop: 14, lineHeight: 1.7, maxWidth: 540, margin: "14px auto 0" }}>{t.lead}</p>
      </motion.div>

      {/* category tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 26 }}>
        {[{ k: "stocks", icon: TrendingUp, label: t.stocks }, { k: "crypto", icon: Bitcoin, label: t.crypto }].map((c) => {
          const Icon = c.icon; const on = cat === c.k;
          return (
            <button key={c.k} onClick={() => { setCat(c.k); setOpenSym(null); }} style={{
              border: `1px solid ${on ? T.primary : T.line}`, background: on ? T.primary : T.card,
              color: on ? "#fff" : T.textSecondary, fontWeight: 700, fontSize: 14, padding: "10px 22px",
              borderRadius: 10, cursor: "pointer", fontFamily: FONT, display: "flex", alignItems: "center", gap: 7,
            }}><Icon size={16} /> {c.label}</button>
          );
        })}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "start" }} className="demo-grid">
        {/* LEFT: live quotes */}
        <div>
          <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "16px 22px", borderBottom: `1px solid ${T.line}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 700, fontSize: 15, color: T.strong }}>{t.quoteTitle}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: T.textTertiary }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: "50%", background: T.success }} />
                {t.delayed}
              </span>
            </div>
            <div>
              {QUOTES[cat].map((q, i) => {
                const price = jitter(q.base, i);
                const up = q.chg >= 0;
                const isOpen = openSym === q.sym;
                return (
                  <div key={q.sym} style={{ borderBottom: i < QUOTES[cat].length - 1 ? `1px solid ${T.bgSoft}` : "none" }}>
                    <div onClick={() => setOpenSym(isOpen ? null : q.sym)}
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 22px", cursor: "pointer", background: isOpen ? T.bg : "transparent" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }} style={{ display: "flex" }}>
                          <ChevronRight size={15} color={T.textTertiary} />
                        </motion.div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14.5, color: T.strong }}>{q.sym}</div>
                          <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 1 }}>{q.name}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontWeight: 700, fontSize: 15, color: T.strong, fontVariantNumeric: "tabular-nums" }}>{fmt(price, q.unit)}</div>
                        <div style={{ fontSize: 12.5, fontWeight: 700, color: up ? T.success : T.error, display: "flex", alignItems: "center", gap: 2, justifyContent: "flex-end" }}>
                          {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {up ? "+" : ""}{q.chg}%
                        </div>
                      </div>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && q.ranges && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: "hidden" }}>
                          <div style={{ padding: "4px 22px 20px" }}>
                            <QuoteChart q={q} lang={lang} t={t} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ marginTop: 10, fontSize: 11.5, color: T.textTertiary, display: "flex", alignItems: "center", gap: 5, lineHeight: 1.5 }}>
            <Info size={13} style={{ flexShrink: 0 }} /> {t.tapHint} · {lang === "ko" ? "실제 적용 시 시세 API 연동, 데모는 가상 수치" : lang === "ja" ? "実適用時は相場API連携、デモは仮の数値" : "Real version connects a market API; demo uses sample data"}
          </div>

          {/* referral block — moved under quotes */}
          <div style={{ marginTop: 18, background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "20px 22px" }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: T.strong, marginBottom: 4 }}>{t.refTitle}</div>
            <p style={{ fontSize: 13, color: T.textTertiary, lineHeight: 1.6, margin: "0 0 14px" }}>{t.refDesc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {PARTNERS[cat].map((p, i) => (
                <motion.div key={i} whileHover={{ y: -2 }} style={{ border: `1px solid ${T.line}`, borderRadius: 12, padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", background: T.bg }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: T.strong }}>{p.name}</span>
                      <span style={{ fontSize: 11, color: T.primary, background: T.primarySoft, padding: "2px 7px", borderRadius: 6, fontWeight: 600 }}>{p.tag}</span>
                    </div>
                    <div style={{ fontSize: 12.5, color: T.textSecondary, marginTop: 3 }}>{p.note}</div>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12.5, fontWeight: 700, color: T.primary, whiteSpace: "nowrap" }}>
                    {t.refBtn} <ArrowUpRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: 12, fontSize: 11, color: T.textTertiary, display: "flex", alignItems: "center", gap: 5 }}>
              <ExternalLink size={12} /> 제휴 링크 — 가입·거래 발생 시 수수료가 발생할 수 있습니다 (레퍼럴).
            </div>
          </div>
        </div>

        {/* RIGHT: history echoes (2-3 cases) + more */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <AnimatePresence mode="wait">
            <motion.div key={cat} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
              style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 22px", background: T.primarySoft, borderBottom: `1px solid ${T.line}` }}>
                <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 8, height: 8, borderRadius: "50%", background: T.primary }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: T.primary }}>{echoT.title}</span>
              </div>
              <div style={{ padding: "18px 22px" }}>
                <p style={{ fontSize: 13.5, color: T.textSecondary, lineHeight: 1.7, margin: "0 0 16px", paddingBottom: 14, borderBottom: `1px solid ${T.bgSoft}` }}>{ec.context[lang]}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {ec.items.map((it, i) => (
                    <motion.div key={i} whileHover={{ x: 3 }} onClick={() => EVENT_DETAIL[it.eventId] ? gotoDetail(it.eventId) : gotoEra(it.eraIdx, it.eventId)}
                      style={{ cursor: "pointer", padding: "13px 15px", borderRadius: 12, background: T.bg, border: `1px solid ${T.line}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                        <span style={{ fontSize: 10.5, fontWeight: 700, color: T.primary, background: T.primarySoft, padding: "2px 8px", borderRadius: 20 }}>{it.tag[lang]}</span>
                        <span style={{ fontSize: 11.5, color: T.textTertiary, fontWeight: 600 }}>{it.year}</span>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: T.strong, marginBottom: 4, letterSpacing: -0.3 }}>{it.title[lang]}</div>
                      <div style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.6 }}>{it.line[lang]}</div>
                      <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700, color: T.primary, display: "inline-flex", alignItems: "center", gap: 3 }}>
                        {echoT.more} <ChevronRight size={13} />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => setView("timeline")}
                  style={{ width: "100%", marginTop: 14, border: `1px solid ${T.primary}`, background: T.card, color: T.primary, fontWeight: 700, fontSize: 13.5, padding: "12px", borderRadius: 12, cursor: "pointer", fontFamily: FONT, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  {echoT.more} <ArrowRight size={15} />
                </motion.button>
              </div>
            </motion.div>

            <AdSlot label={L[lang].ad} note={L[lang].adNote + " · 300×250"} height={200} />
          </AnimatePresence>
        </div>
      </div>

      <p style={{ marginTop: 26, fontSize: 12.5, color: T.textTertiary, lineHeight: 1.7, textAlign: "center", borderTop: `1px solid ${T.line}`, paddingTop: 18 }}>{t.disc}</p>
    </div>
  );
}

