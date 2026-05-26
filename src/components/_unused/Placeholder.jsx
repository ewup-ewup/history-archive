import { motion } from "framer-motion";
import { T } from "../../data/theme";
import AdSlot from "../AdSlot.jsx";

export default function Placeholder({ title, desc }) {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: T.strong, letterSpacing: -0.5 }}>{title}</h2>
        <p style={{ color: T.textSecondary, fontSize: 15, marginTop: 12, lineHeight: 1.7 }}>{desc}</p>
        <div style={{ marginTop: 24 }}><AdSlot label="Advertisement" note="이 화면은 다음 단계에서 제작 예정입니다" height={120} /></div>
      </motion.div>
    </div>
  );
}

