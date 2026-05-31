import { History } from "lucide-react";
import { L } from "../data/i18n";
import { FONT, T } from "../data/theme";

export default function Header({ view, setView, lang, setLang, forkPending }) {
  const tt = L[lang];
  const nav = [
    { id: "timeline", label: tt.nav.home },
    { id: "events", label: tt.nav.events },
    { id: "market", label: tt.nav.market },
    { id: "my", label: tt.nav.my, dot: forkPending },
  ];
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.78)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${T.line}`,
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px", minHeight: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div onClick={() => setView("timeline")} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: T.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <History size={16} color="#fff" />
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, color: T.strong, letterSpacing: -0.4 }}>History Archive</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 2 }}>
            {nav.map((n) => (
              <button key={n.id} onClick={() => setView(n.id)} style={{
                position: "relative", border: "none", background: view === n.id ? T.primarySoft : "transparent",
                color: view === n.id ? T.primary : T.textSecondary,
                fontWeight: view === n.id ? 700 : 500, fontSize: 14, padding: "8px 14px",
                borderRadius: 8, cursor: "pointer", fontFamily: FONT, transition: "all .15s", whiteSpace: "nowrap",
              }}>
                {n.label}
                {n.dot && <span style={{ position: "absolute", top: 6, right: 8, width: 6, height: 6, borderRadius: "50%", background: T.error }} />}
              </button>
            ))}
          </div>
          <div style={{ display: "inline-flex", background: T.bgSoft, borderRadius: 8, padding: 2, gap: 1 }}>
            {Object.entries(L).map(([k, v]) => (
              <button key={k} onClick={() => setLang(k)} title={v.langName} style={{
                border: "none", background: lang === k ? T.card : "transparent",
                boxShadow: lang === k ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                fontSize: 14, padding: "5px 8px", borderRadius: 6, cursor: "pointer", lineHeight: 1,
                opacity: lang === k ? 1 : 0.5, transition: "all .15s",
              }}>{v.flag}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
