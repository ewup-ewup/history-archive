import { motion } from "framer-motion";
import { ArrowRight, Diamond, Flame } from "lucide-react";
import { RARITY } from "../data/events";
import { L } from "../data/i18n";
import { FONT, T } from "../data/theme";

export default function ForkPopup({ lang, todayEvent, onEnter, onClose }) {
  const fp = L[lang].forkPopup;
  const rar = RARITY[todayEvent.rarity];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(17,24,39,0.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <motion.div initial={{ scale: 0.92, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 10, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 440, background: T.card, borderRadius: 24, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.3)" }}>
        {/* gradient top */}
        <div style={{ background: T.gradient, padding: "28px 28px 24px", color: "#fff", position: "relative" }}>
          <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 6 }}>{fp.greeting}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Flame size={22} />
            <span style={{ fontSize: 23, fontWeight: 800, letterSpacing: -0.5 }}>{fp.title}</span>
          </div>
          <button onClick={onClose} aria-label="close" style={{ position: "absolute", top: 20, right: 20, width: 30, height: 30, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.2)", color: "#fff", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
        <div style={{ padding: "24px 28px 28px" }}>
          {/* today's event preview */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 30, fontWeight: 800, color: T.primary, letterSpacing: -1 }}>{todayEvent.year}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, color: rar.color, background: rar.soft, padding: "3px 9px", borderRadius: 20 }}>
              <Diamond size={9} fill={rar.color} /> {rar.label.split(" · ")[0]}
            </span>
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: T.strong, marginBottom: 6, letterSpacing: -0.4 }}>{todayEvent.title[lang]}</div>
          <p style={{ fontSize: 13.5, color: T.textSecondary, lineHeight: 1.7, margin: "0 0 20px" }}>{fp.sub}</p>
          <motion.button whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(49,130,246,0.35)" }} whileTap={{ scale: 0.97 }} onClick={onEnter}
            style={{ width: "100%", border: "none", background: T.gradient, color: "#fff", fontWeight: 700, fontSize: 15, padding: "15px", borderRadius: 14, cursor: "pointer", fontFamily: FONT, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            {fp.enter} <ArrowRight size={17} />
          </motion.button>
          <button onClick={onClose} style={{ width: "100%", border: "none", background: "transparent", color: T.textTertiary, fontSize: 13, padding: "12px 0 2px", cursor: "pointer", fontFamily: FONT }}>{fp.later}</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

