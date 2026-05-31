import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { L } from "../data/i18n";
import { FONT, T } from "../data/theme";
import { ERAS, ERA_EVENTS, ERA_ICON, EVENT_DETAIL } from "../data/timeline";

/* =========================================================
   EventsIndex — 전체 사건 인덱스 페이지
   21사건을 한눈에 grid card로 보여주고 시대 필터 + 검색 제공.
   ========================================================= */

// ERA_EVENTS 키 1..5 → ERAS[1..5] 매핑. (ERAS[0] = 교환 이전, 사건 없음)
function flattenAllEvents() {
  const out = [];
  Object.keys(ERA_EVENTS).forEach((eraKey) => {
    const eraIdx = Number(eraKey);
    ERA_EVENTS[eraKey].forEach((ev) => {
      out.push({ ...ev, eraIdx });
    });
  });
  return out;
}

export default function EventsIndex({ lang, gotoDetail, gotoEra }) {
  const t = L[lang].eventsIndex;
  const tl = L[lang].timeline;
  const [eraFilter, setEraFilter] = useState(null); // null = 전체
  const [query, setQuery] = useState("");

  const all = useMemo(() => flattenAllEvents(), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((ev) => {
      if (eraFilter !== null && ev.eraIdx !== eraFilter) return false;
      if (!q) return true;
      const hay = [
        ev.id,
        ev.year?.[lang],
        ev.title?.[lang],
        ev.impact?.[lang],
        ev.mind?.[lang],
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [all, eraFilter, query, lang]);

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 60px" }}>
      {/* hero */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: "center", padding: "40px 0 26px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: T.primarySoft, color: T.primary, fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 20, marginBottom: 16 }}>
          <Sparkles size={13} /> {t.flag}
        </div>
        <h1 style={{ fontSize: "clamp(1.9rem,5vw,3rem)", fontWeight: 800, color: T.strong, letterSpacing: -1, lineHeight: 1.12, margin: 0 }}>
          {t.h1a}
          <span style={{ background: T.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1hl}</span>
          {t.h1b}
        </h1>
        <p style={{ color: T.textSecondary, fontSize: 16, marginTop: 14, lineHeight: 1.7, maxWidth: 560, margin: "14px auto 0" }}>{t.sub}</p>
      </motion.div>

      {/* search */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: "10px 14px", marginBottom: 14 }}>
        <Search size={16} color={T.textTertiary} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          style={{ flex: 1, border: "none", outline: "none", fontFamily: FONT, fontSize: 15, background: "transparent", color: T.strong }}
        />
        {query && (
          <button onClick={() => setQuery("")} style={{ border: "none", background: T.bgSoft, color: T.textSecondary, fontWeight: 600, fontSize: 12, padding: "4px 10px", borderRadius: 6, cursor: "pointer", fontFamily: FONT }}>
            ×
          </button>
        )}
      </div>

      {/* era filter chips */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        <FilterChip active={eraFilter === null} onClick={() => setEraFilter(null)} label={t.filterAll} count={all.length} />
        {Object.keys(ERA_EVENTS).map((k) => {
          const eraIdx = Number(k);
          const era = ERAS[eraIdx];
          const cnt = ERA_EVENTS[k].length;
          return (
            <FilterChip
              key={k}
              active={eraFilter === eraIdx}
              onClick={() => setEraFilter(eraIdx)}
              label={era.title[lang]}
              count={cnt}
              color={era.color}
            />
          );
        })}
      </div>

      {/* count line */}
      <div style={{ fontSize: 13, color: T.textTertiary, marginBottom: 14, fontWeight: 600 }}>
        {t.count(filtered.length)}
      </div>

      {/* grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: T.textTertiary, fontSize: 15, background: T.card, border: `1px dashed ${T.line}`, borderRadius: 14 }}>
          {t.noResults}
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
          {filtered.map((ev) => {
            const era = ERAS[ev.eraIdx];
            const Icon = ERA_ICON[era.icon];
            const hasDetail = !!EVENT_DETAIL[ev.id];
            return (
              <motion.div
                key={ev.id}
                whileHover={{ y: -3, boxShadow: "0 14px 28px rgba(0,0,0,0.06)" }}
                transition={{ duration: 0.18 }}
                onClick={() => (hasDetail ? gotoDetail(ev.id) : gotoEra(ev.eraIdx, ev.id))}
                style={{
                  background: T.card,
                  border: `1px solid ${T.line}`,
                  borderTop: `3px solid ${era.color}`,
                  borderRadius: 14,
                  padding: "18px 18px 16px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 200,
                }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: era.soft, color: era.color, fontWeight: 700, fontSize: 11, padding: "3px 9px", borderRadius: 12 }}>
                    <Icon size={11} /> {era.title[lang]}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: era.color, fontVariantNumeric: "tabular-nums" }}>{ev.year[lang]}</div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: T.strong, letterSpacing: -0.3, lineHeight: 1.35 }}>{ev.title[lang]}</div>
                <div style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.6, flex: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{ev.impact[lang]}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12.5, fontWeight: 700, color: era.color, marginTop: 4 }}>
                  {t.readMore} <ArrowRight size={13} />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, label, count, color }) {
  const c = color || T.primary;
  return (
    <button
      onClick={onClick}
      style={{
        border: `1px solid ${active ? c : T.line}`,
        background: active ? c : T.card,
        color: active ? "#fff" : T.textSecondary,
        fontWeight: active ? 700 : 600,
        fontSize: 13,
        padding: "6px 12px",
        borderRadius: 18,
        cursor: "pointer",
        fontFamily: FONT,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        transition: "all .15s",
      }}>
      {label}
      <span style={{ fontSize: 11, opacity: 0.85, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{count}</span>
    </button>
  );
}
