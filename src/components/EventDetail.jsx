import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, ChevronLeft, ChevronRight, Flame, GitCompareArrows, Landmark, Layers, ListTree, TrendingUp } from "lucide-react";
import { L } from "../data/i18n";
import { FONT, T } from "../data/theme";
import { ERAS, ERA_EVENTS, ERA_ICON, EVENT_DETAIL } from "../data/timeline";
import { COMPARE } from "../data/compare";
import Disclaimer from "./Disclaimer.jsx";
import EventChart from "./EventChart.jsx";

// 사건 id로 글로벌 메타(year, title, eraIdx) 조회
function lookupEvent(id) {
  for (const k of Object.keys(ERA_EVENTS)) {
    const e = ERA_EVENTS[k].find((ev) => ev.id === id);
    if (e) return { ...e, eraIdx: Number(k) };
  }
  return null;
}

function findEvent(eventId) {
  for (const eraIdx of Object.keys(ERA_EVENTS)) {
    const sub = ERA_EVENTS[eraIdx].find((e) => e.id === eventId);
    if (sub) return { sub, eraIdx: Number(eraIdx) };
  }
  return null;
}

// 21사건 글로벌 순서 (시대→시대 내 순) — 이전/다음 사건 네비용
const ORDER = (() => {
  const out = [];
  Object.keys(ERA_EVENTS).forEach((k) => {
    const eraIdx = Number(k);
    ERA_EVENTS[k].forEach((e) => out.push({ id: e.id, eraIdx, year: e.year, title: e.title }));
  });
  return out;
})();

export default function EventDetail({ lang, eventId, setView, gotoEra, gotoDetail, openMarket }) {
  const tl = L[lang].timeline;
  const found = findEvent(eventId);
  const detail = EVENT_DETAIL[eventId]; // 풀 상세 (없으면 기본 페이지)

  // 스크롤 진행률 (0~1) — 상단 진행 막대용. eventId 바뀔 때마다 리스너 재설치.
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const onScroll = () => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, h.scrollTop / scrollable)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [eventId]);

  // 이전/다음 사건 (글로벌 순서 기준) — 사건 못 찾으면 빈 값
  const orderIdx = ORDER.findIndex((e) => e.id === eventId);
  const prevEv = orderIdx > 0 ? ORDER[orderIdx - 1] : null;
  const nextEv = orderIdx >= 0 && orderIdx < ORDER.length - 1 ? ORDER[orderIdx + 1] : null;

  // TOC sections — detail 유무에 따라 조건부
  const compareList = COMPARE[eventId] || [];
  const sections = useMemo(() => {
    const items = [{ id: "story", label: tl.bg }];
    if (detail?.mechanism) items.push({ id: "mechanism", label: tl.mechanism });
    items.push({ id: "psychology", label: tl.mindLabel });
    if (detail?.lesson) items.push({ id: "lesson", label: tl.lesson });
    if (detail?.aftermath) items.push({ id: "aftermath", label: tl.aftermath });
    if (compareList.length > 0) items.push({ id: "compare", label: tl.compareTitle });
    if (detail?.today) items.push({ id: "today", label: tl.todayLink });
    return items;
  }, [detail, tl, compareList.length]);

  if (!found) return null;
  const { sub, eraIdx } = found;
  const era = ERAS[eraIdx];
  const Icon = ERA_ICON[era.icon];

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80; // header offset
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 20px 60px" }}>
      {/* 반응형: 넓은 화면(≥1140px)에서만 우측 sticky TOC 노출 */}
      <style>{`
        @media (max-width: 1139px) { .event-toc { display: none !important; } }
        .event-toc a:hover { background: ${T.bgSoft}; color: ${era.color}; }
      `}</style>

      {/* 진행 막대 — 화면 상단(헤더 60px 아래) 고정 */}
      <div style={{ position: "fixed", top: 60, left: 0, right: 0, height: 3, background: "transparent", zIndex: 49, pointerEvents: "none" }}>
        <div style={{ width: `${progress * 100}%`, height: "100%", background: era.color, transition: "width 80ms linear" }} />
      </div>

      {/* 우측 sticky TOC (넓은 화면 전용) */}
      <aside className="event-toc" style={{ position: "fixed", top: 100, right: 24, width: 188, padding: "14px 14px 12px", background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, zIndex: 30, boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, color: T.textTertiary, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 9 }}>
          <ListTree size={12} /> {tl.toc}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
              style={{ fontSize: 13, color: T.textSecondary, fontWeight: 500, textDecoration: "none", padding: "5px 8px", borderRadius: 6, cursor: "pointer", transition: "all .15s" }}>
              {s.label}
            </a>
          ))}
        </div>
      </aside>

      {/* back */}
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ x: -3 }}
        onClick={() => gotoEra(eraIdx, eventId)}
        style={{ border: "none", background: "transparent", color: T.textSecondary, fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: FONT, display: "inline-flex", alignItems: "center", gap: 5, padding: "8px 0", marginBottom: 8 }}>
        <ChevronLeft size={16} /> {tl.back}
      </motion.button>

      {/* hero */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: era.soft, color: era.color, fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 20, marginBottom: 16 }}>
          <Icon size={13} /> {era.title[lang]}
        </div>
        <div style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)", fontWeight: 800, color: era.color, lineHeight: 1, letterSpacing: -1.5 }}>{sub.year[lang]}</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, color: T.strong, margin: "12px 0 10px", letterSpacing: -0.8, lineHeight: 1.2 }}>{sub.title[lang]}</h1>
        {detail && <div style={{ fontSize: 14, color: T.textTertiary, fontWeight: 600 }}>{detail.subtitle[lang]}</div>}
      </motion.div>

      {/* stats */}
      {detail && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, margin: "26px 0" }} className="stat-grid">
          {detail.stats.map((s, i) => (
            <div key={i} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 14, padding: "16px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: era.color, letterSpacing: -0.3, lineHeight: 1.2 }}>{s.v[lang]}</div>
              <div style={{ fontSize: 12, color: T.textTertiary, marginTop: 6, lineHeight: 1.4 }}>{s.k[lang]}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* price-flow chart */}
      {detail && detail.chart && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.5 }} style={{ marginBottom: 26 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: era.color, letterSpacing: 1, textTransform: "uppercase" }}>{tl.chartTitle}</span>
            <div style={{ flex: 1, height: 1, background: T.bgSoft }} />
          </div>
          <EventChart chart={detail.chart} color={era.color} lang={lang} />
        </motion.div>
      )}

      {/* body — the story */}
      <motion.div id="story" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} style={{ marginTop: detail ? 0 : 26, scrollMarginTop: 80 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: era.color, letterSpacing: 1, textTransform: "uppercase" }}>{tl.bg}</span>
          <div style={{ flex: 1, height: 1, background: T.bgSoft }} />
        </div>
        {detail ? (
          detail.body[lang].map((para, i) => (
            <p key={i} style={{ fontSize: 16, color: T.textPrimary, lineHeight: 1.95, margin: "0 0 18px" }}>{para}</p>
          ))
        ) : (
          <p style={{ fontSize: 16, color: T.textPrimary, lineHeight: 1.95, margin: "0 0 18px" }}>{sub.impact[lang]}</p>
        )}
      </motion.div>

      {/* mechanism — structural how-it-worked */}
      {detail && detail.mechanism && (
        <motion.div id="mechanism" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ margin: "10px 0 18px", scrollMarginTop: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Layers size={14} style={{ color: era.color }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: era.color, letterSpacing: 1, textTransform: "uppercase" }}>{tl.mechanism}</span>
            <div style={{ flex: 1, height: 1, background: T.bgSoft }} />
          </div>
          {detail.mechanism[lang].map((para, i) => (
            <p key={i} style={{ fontSize: 16, color: T.textPrimary, lineHeight: 1.95, margin: "0 0 18px" }}>{para}</p>
          ))}
        </motion.div>
      )}

      {/* psychology */}
      <motion.div id="psychology" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ background: "#FFF5F4", borderRadius: 16, padding: "22px 24px", borderLeft: `3px solid ${T.error}`, margin: "8px 0 18px", scrollMarginTop: 80 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.error, marginBottom: 10, letterSpacing: 0.5, textTransform: "uppercase" }}><Brain size={14} /> {tl.mindLabel}</div>
        <p style={{ fontSize: 15, color: "#7A1F1B", lineHeight: 1.85, margin: 0, fontWeight: 500 }}>{sub.mind[lang]}</p>
      </motion.div>

      {/* lesson */}
      {detail && (
        <motion.div id="lesson" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "24px 26px", marginBottom: 18, scrollMarginTop: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.primary, marginBottom: 10, letterSpacing: 0.5, textTransform: "uppercase" }}><BookOpen size={14} /> {tl.lesson}</div>
          <p style={{ fontSize: 15.5, color: T.strong, lineHeight: 1.85, margin: 0, fontWeight: 500 }}>{detail.lesson[lang]}</p>
        </motion.div>
      )}

      {/* aftermath — what changed after */}
      {detail && detail.aftermath && (
        <motion.div id="aftermath" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "24px 26px", marginBottom: 18, borderLeft: `3px solid ${era.color}`, scrollMarginTop: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: era.color, marginBottom: 12, letterSpacing: 0.5, textTransform: "uppercase" }}><Landmark size={14} /> {tl.aftermath}</div>
          {detail.aftermath[lang].map((para, i) => (
            <p key={i} style={{ fontSize: 15.5, color: T.textPrimary, lineHeight: 1.85, margin: "0 0 14px" }}>{para}</p>
          ))}
        </motion.div>
      )}

      {/* compare — similar events */}
      {compareList.length > 0 && gotoDetail && (
        <motion.div id="compare" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ margin: "10px 0 22px", scrollMarginTop: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <GitCompareArrows size={14} style={{ color: era.color }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: era.color, letterSpacing: 1, textTransform: "uppercase" }}>{tl.compareTitle}</span>
            <div style={{ flex: 1, height: 1, background: T.bgSoft }} />
          </div>
          <p style={{ fontSize: 13, color: T.textTertiary, lineHeight: 1.6, margin: "0 0 14px" }}>{tl.compareSubtitle}</p>
          <div style={{ display: "grid", gridTemplateColumns: compareList.length > 1 ? "1fr 1fr" : "1fr", gap: 12 }} className="stat-grid">
            {compareList.map((c, i) => {
              const other = lookupEvent(c.id);
              if (!other) return null;
              const otherEra = ERAS[other.eraIdx];
              return (
                <motion.div key={c.id + i} whileHover={{ y: -2, borderColor: otherEra.color }}
                  onClick={() => gotoDetail(c.id)}
                  style={{ background: T.card, border: `1px solid ${T.line}`, borderLeft: `3px solid ${otherEra.color}`, borderRadius: 12, padding: "16px 18px", cursor: "pointer", transition: "border-color .15s", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, color: otherEra.color, background: otherEra.soft, padding: "2px 8px", borderRadius: 10 }}>
                      {otherEra.title[lang]}
                    </span>
                    <span style={{ fontSize: 12.5, fontWeight: 800, color: otherEra.color, fontVariantNumeric: "tabular-nums" }}>{other.year[lang]}</span>
                  </div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: T.strong, lineHeight: 1.35, letterSpacing: -0.2 }}>{other.title[lang]}</div>
                  <p style={{ fontSize: 13, color: T.textSecondary, lineHeight: 1.7, margin: 0 }}>{c.angle[lang]}</p>
                  <div style={{ marginTop: 2, fontSize: 12, fontWeight: 700, color: otherEra.color, display: "inline-flex", alignItems: "center", gap: 3 }}>
                    {tl.detail} <ArrowRight size={12} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* today connection */}
      {detail && (
        <motion.div id="today" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: T.primarySoft, borderRadius: 16, padding: "24px 26px", marginBottom: 26, scrollMarginTop: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: T.primary, marginBottom: 10, letterSpacing: 0.5, textTransform: "uppercase" }}><TrendingUp size={14} /> {tl.todayLink}</div>
          <p style={{ fontSize: 15.5, color: T.strong, lineHeight: 1.85, margin: "0 0 16px" }}>{detail.today[lang]}</p>
          <motion.button whileHover={{ x: 3 }} onClick={openMarket}
            style={{ border: "none", background: "transparent", color: T.primary, fontWeight: 700, fontSize: 13.5, cursor: "pointer", fontFamily: FONT, display: "inline-flex", alignItems: "center", gap: 5, padding: 0 }}>
            {tl.relatedMarket} <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      )}

      {/* CTA: try at fork */}
      <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(49,130,246,0.3)" }} whileTap={{ scale: 0.98 }}
        onClick={() => setView("fork")}
        style={{ width: "100%", border: "none", background: T.gradient, color: "#fff", fontWeight: 700, fontSize: 15, padding: "16px", borderRadius: 14, cursor: "pointer", fontFamily: FONT, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <Flame size={17} /> {tl.tryFork}
      </motion.button>

      {/* source */}
      {detail && (
        <p style={{ marginTop: 22, fontSize: 12, color: T.textTertiary, lineHeight: 1.7, borderTop: `1px solid ${T.line}`, paddingTop: 16 }}>
          <b style={{ color: T.textSecondary }}>{tl.source}</b> · {detail.source[lang]}
        </p>
      )}

      {/* prev/next 사건 네비 (21사건 글로벌 순서) */}
      {(prevEv || nextEv) && gotoDetail && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 30 }} className="stat-grid">
          {prevEv ? <SiblingCard ev={prevEv} lang={lang} label={tl.prevEvent} dir="prev" onClick={() => gotoDetail(prevEv.id)} /> : <div />}
          {nextEv ? <SiblingCard ev={nextEv} lang={lang} label={tl.nextEvent} dir="next" onClick={() => gotoDetail(nextEv.id)} /> : <div />}
        </div>
      )}

      <Disclaimer lang={lang} />
    </div>
  );
}

function SiblingCard({ ev, lang, label, dir, onClick }) {
  const era = ERAS[ev.eraIdx];
  const isPrev = dir === "prev";
  return (
    <motion.div whileHover={{ y: -2, borderColor: era.color }}
      onClick={onClick}
      style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, padding: "14px 16px", cursor: "pointer", display: "flex", flexDirection: "column", gap: 6, textAlign: isPrev ? "left" : "right", transition: "border-color .15s" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: T.textTertiary, letterSpacing: 0.5, textTransform: "uppercase", justifyContent: isPrev ? "flex-start" : "flex-end" }}>
        {isPrev && <ChevronLeft size={12} />} {label} {!isPrev && <ChevronRight size={12} />}
      </div>
      <div style={{ fontSize: 12, fontWeight: 800, color: era.color, fontVariantNumeric: "tabular-nums" }}>{ev.year[lang]}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: T.strong, lineHeight: 1.35, letterSpacing: -0.2, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{ev.title[lang]}</div>
    </motion.div>
  );
}

