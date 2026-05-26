import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { L } from "../../data/i18n";
import { ICON_MAP } from "../../data/icons";
import { MIRROR_DB, MIRROR_FALLBACK } from "../../data/mirror";
import { FONT, T, navBtn } from "../../data/theme";
import AdSlot from "../AdSlot.jsx";

export default function Mirror({ setView, lang }) {
  const mt = L[lang].mirror;
  const [date, setDate] = useState(new Date(2026, 4, 25)); // 데모: 5/25 시작
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const data = MIRROR_DB[`${mm}-${dd}`] || MIRROR_FALLBACK;
  const yr = typeof data.year === "object" ? data.year[lang] : data.year;

  const MON = {
    ko: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
    en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    ja: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
  };
  const DOW = { ko: ["일","월","화","수","목","금","토"], en: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], ja: ["日","月","火","水","木","金","土"] };
  const dowSuffix = lang === "ko" ? "요일" : lang === "ja" ? "曜日" : "";
  const shift = (n) => setDate((d) => new Date(d.getTime() + n * 86400000));

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 60px" }}>
      {/* masthead + date nav */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: "center", padding: "44px 0 26px", borderBottom: `1px solid ${T.line}` }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: T.primarySoft, color: T.primary, fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 20, marginBottom: 16 }}>
          <Calendar size={13} /> {mt.flag}
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", fontWeight: 800, color: T.strong, letterSpacing: -1, lineHeight: 1.1, margin: 0 }}>
          {mt.h1a}<span style={{ background: T.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{mt.h1hl}</span>{mt.h1b}
        </h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 22 }}>
          <button onClick={() => shift(-1)} style={navBtn}><ChevronLeft size={18} /></button>
          <div style={{ minWidth: 200 }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: T.strong, letterSpacing: -0.5 }}>{MON[lang][date.getMonth()]} {date.getDate()}</div>
            <div style={{ fontSize: 12, color: T.textTertiary, letterSpacing: 1, marginTop: 2 }}>{date.getFullYear()} · {DOW[lang][date.getDay()]}{dowSuffix}</div>
          </div>
          <button onClick={() => shift(1)} style={navBtn}><ChevronRight size={18} /></button>
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 312px", gap: 32, marginTop: 32, alignItems: "start" }} className="mirror-layout">
        {/* main */}
        <AnimatePresence mode="wait">
          <motion.div key={`${mm}-${dd}-${lang}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <span style={{ fontSize: "clamp(2.4rem,6vw,4rem)", fontWeight: 800, color: T.primary, lineHeight: 1, letterSpacing: -1.5 }}>{yr}</span>
              <span style={{ fontSize: 13, color: T.error, fontWeight: 600, borderLeft: `1px solid ${T.line}`, paddingLeft: 16 }}>{data.ago[lang]}</span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.primary, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{data.cat[lang]}</div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 700, color: T.strong, margin: "0 0 16px", letterSpacing: -0.6, lineHeight: 1.3 }}>{data.title[lang]}</h2>
            <p style={{ color: T.textPrimary, fontSize: 16, lineHeight: 1.9, margin: 0 }}>{data.body[lang]}</p>

            {/* the mirror box */}
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.5 }}
              style={{ marginTop: 28, background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 40px rgba(49,130,246,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "15px 24px", background: T.primarySoft, borderBottom: `1px solid ${T.line}` }}>
                <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 8, height: 8, borderRadius: "50%", background: T.primary }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: T.primary, letterSpacing: 0.5 }}>{mt.mirrorTitle}</span>
              </div>
              <div style={{ padding: "24px 26px" }}>
                <p style={{ fontSize: 15.5, color: T.strong, lineHeight: 1.85, margin: "0 0 20px", fontWeight: 500 }}>{data.echo[lang]}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {data.persp.map((p, i) => {
                    const Icon = ICON_MAP[data.icons[i]] || Eye;
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.1 }}
                        style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", borderRadius: 10, background: T.bg }}>
                        <div style={{ width: 34, height: 34, borderRadius: 10, background: T.primarySoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon size={17} color={T.primary} />
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: T.primary, marginBottom: 3 }}>{p.lens[lang]}</div>
                          <div style={{ fontSize: 14, color: T.textSecondary, lineHeight: 1.6 }}>{p.text[lang]}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <p style={{ marginTop: 20, fontSize: 12.5, color: T.textTertiary, lineHeight: 1.7, borderTop: `1px solid ${T.line}`, paddingTop: 14 }}>
              {mt.disc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 80 }}>
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => setView("fork")}
            style={{ border: "none", background: T.gradient, color: "#fff", borderRadius: 14, padding: "18px", cursor: "pointer", fontFamily: FONT, textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>{mt.ctaTitle}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{mt.ctaSub}</div>
          </motion.button>

          <AdSlot label={L[lang].ad} note={L[lang].adNote + " · 300×250"} height={220} />

          <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.primary, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>{mt.sameDay}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {data.also.map((e, i) => (
                <motion.div key={i} whileHover={{ x: 3 }} style={{ paddingBottom: i < data.also.length - 1 ? 14 : 0, borderBottom: i < data.also.length - 1 ? `1px solid ${T.bgSoft}` : "none", cursor: "pointer" }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: T.primary }}>{e.year}</div>
                  <div style={{ fontSize: 13.5, color: T.textSecondary, lineHeight: 1.5, marginTop: 2 }}>{e.t[lang]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

