import { T } from "../data/theme";

export default function AdSlot({ label, note, height = 90 }) {
  return (
    <div style={{
      border: `1px dashed ${T.line}`, borderRadius: 12, background: T.bgSoft,
      minHeight: height, display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 4, color: T.textTertiary,
    }}>
      <span style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>{label}</span>
      <span style={{ fontSize: 12 }}>{note}</span>
    </div>
  );
}
