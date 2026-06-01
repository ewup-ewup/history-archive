import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { T, FONT } from "./data/theme";
import { L } from "./data/i18n";
import { EVENTS } from "./data/events";
import { ERA_EVENTS } from "./data/timeline";
import { pathFromState, stateFromPath, initialRouteState } from "./router";

import Header from "./components/Header.jsx";
import ForkPopup from "./components/ForkPopup.jsx";
import Timeline from "./components/Timeline.jsx";
import EventsIndex from "./components/EventsIndex.jsx";
import EventDetail from "./components/EventDetail.jsx";
import MarketDemo from "./components/MarketDemo.jsx";
import MyPage from "./components/MyPage.jsx";
import Fork from "./components/Fork.jsx";

/* =========================================================
   History Archive — 앱 루트
   라우팅(view 상태)과 갈림길 상태 관리만 담당.
   화면별 UI는 components/, 데이터는 data/ 참고.

   영속화: localStorage `ha-fork-state-v1` (picks·score·dayOffset·prismCount·lang)
           `ha-popup-seen-date` 로 오늘의 갈림길 팝업을 하루 1회로 제한.
   ========================================================= */

const STORAGE_KEY = "ha-fork-state-v1";
const POPUP_SEEN_KEY = "ha-popup-seen-date";
const THEME_KEY = "ha-theme"; // 'light' | 'dark'

// 초기 테마: 저장값 우선, 없으면 시스템 설정(prefers-color-scheme) 따름
function initTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

function loadPersisted() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

export default function App() {
  const persisted = loadPersisted();

  const initialRoute = initialRouteState(); // 진입 URL에서 초기 뷰/사건 추출
  const [view, setView] = useState(initialRoute.view); // 홈 = 타임라인
  const [lang, setLang] = useState(persisted?.lang ?? "ko");
  const [theme, setTheme] = useState(initTheme); // 'light' | 'dark'
  const [installPrompt, setInstallPrompt] = useState(null); // PWA 설치 프롬프트 (Chromium)
  const [openIdx, setOpenIdx] = useState(null); // 타임라인에서 펼칠 시대
  const [focusEvent, setFocusEvent] = useState(null); // 타임라인에서 강조·스크롤할 사건
  const [detailId, setDetailId] = useState(initialRoute.detailId); // 상세 페이지로 볼 사건
  // 팝업: 오늘 처음 방문일 때만 노출 (데일리 컨셉)
  const [showPopup, setShowPopup] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return window.localStorage.getItem(POPUP_SEEN_KEY) !== todayKey();
    } catch {
      return true;
    }
  });

  // 갈림길 상태 (App에서 관리 → Fork/마이/팝업이 공유)
  const [picks, setPicks] = useState(persisted?.picks ?? {});
  const [score, setScore] = useState(persisted?.score ?? { R: 0, C: 0, P: 0, A: 0 });
  const [dayOffset, setDayOffset] = useState(persisted?.dayOffset ?? 0);
  const [prismCount, setPrismCount] = useState(persisted?.prismCount ?? 0);
  const forkState = { picks, score, dayOffset, prismCount };
  const todayEvent = EVENTS[2]; // 데모: 2000(gold)을 오늘로
  const tt = L[lang];
  const forkPending = !picks[0]; // 오늘(0) 미선택 시 마이에 알림 점

  function choose(card, ev) {
    if (picks[dayOffset]) return;
    const ns = { ...score };
    Object.entries(card.s).forEach(([k, v]) => (ns[k] += v));
    setScore(ns);
    setPicks({ ...picks, [dayOffset]: { ...card, year: ev.year, rarity: ev.rarity } });
    if (ev.rarity === "prism") setPrismCount((p) => p + 1);
  }
  function reset() {
    setPicks({}); setScore({ R: 0, C: 0, P: 0, A: 0 }); setPrismCount(0); setDayOffset(0);
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  }
  function gotoEra(idx, eventId) { setOpenIdx(idx); setFocusEvent(eventId || null); setView("timeline"); }
  function gotoDetail(eventId) { setDetailId(eventId); setView("detail"); }

  function dismissPopup() {
    setShowPopup(false);
    try { window.localStorage.setItem(POPUP_SEEN_KEY, todayKey()); } catch { /* ignore */ }
  }

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  async function promptInstall() {
    if (!installPrompt) return;
    installPrompt.prompt();
    try { await installPrompt.userChoice; } catch { /* ignore */ }
    setInstallPrompt(null); // 한 번 띄우면 이벤트 소진
  }

  // PWA 설치 프롬프트 캡처 (Chromium). iOS Safari는 공유→홈화면 추가 네이티브 플로우.
  useEffect(() => {
    const onBIP = (e) => { e.preventDefault(); setInstallPrompt(e); };
    const onInstalled = () => setInstallPrompt(null);
    window.addEventListener("beforeinstallprompt", onBIP);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBIP);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  // 테마를 <html data-theme>에 반영 + localStorage 영속화
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
    }
    try { window.localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  // 갈림길 상태·언어 영속화: 변경마다 localStorage에 저장
  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ picks, score, dayOffset, prismCount, lang })
      );
    } catch { /* ignore quota / private mode */ }
  }, [picks, score, dayOffset, prismCount, lang]);

  // Pretendard 폰트 런타임 주입
  useEffect(() => {
    const id = "ha-font";
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id; l.rel = "stylesheet";
      l.href = "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css";
      document.head.appendChild(l);
    }
  }, []);

  // 언어 선택과 <html lang> 동기화 (접근성·SEO)
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // ── 라우팅: view/detailId ↔ URL 동기화 ──
  // 상태 변경 → URL push (현재 경로와 다를 때만; 마운트 시 일치하므로 중복 push 없음)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = pathFromState(view, detailId);
    if (window.location.pathname !== path) {
      window.history.pushState({ view, detailId }, "", path);
    }
  }, [view, detailId]);

  // 뒤로/앞으로 가기 → URL에서 상태 복원
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPop = () => {
      const s = stateFromPath(window.location.pathname);
      setView(s.view);
      setDetailId(s.detailId);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // 뷰/사건/언어에 따라 document.title 동적 변경 (탭 제목·SEO·공유)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const brand = "History Archive";
    let title = brand;
    if (view === "detail" && detailId) {
      let ev = null;
      for (const k of Object.keys(ERA_EVENTS)) {
        const f = ERA_EVENTS[k].find((e) => e.id === detailId);
        if (f) { ev = f; break; }
      }
      if (ev) title = `${ev.title[lang]} — ${brand}`;
    } else {
      const navLabel = {
        timeline: L[lang].timeline?.flag,
        events: L[lang].eventsIndex?.flag,
        market: L[lang].nav?.market,
        my: L[lang].nav?.my,
        fork: L[lang].forkPopup?.title,
      }[view];
      title = navLabel ? `${navLabel} — ${brand}` : `${brand} — ${lang === "ko" ? "역사로 읽는 오늘의 시장" : lang === "ja" ? "歴史で読む今日の市場" : "Reading today's market through history"}`;
    }
    document.title = title;
  }, [view, detailId, lang]);

  return (
    <div style={{ background: T.bg, minHeight: "100vh", fontFamily: FONT, color: T.textPrimary }}>
      <style>{`
        @media (max-width: 860px){
          .hero-grid{grid-template-columns:1fr !important}
          .feat-grid{grid-template-columns:1fr !important}
          .trust-grid{grid-template-columns:1fr !important}
          .card-grid{grid-template-columns:1fr !important}
          .mirror-layout{grid-template-columns:1fr !important}
          .track-grid{grid-template-columns:1fr !important}
          .demo-grid{grid-template-columns:1fr !important}
          .stat-grid{grid-template-columns:1fr 1fr !important}
        }
        *{box-sizing:border-box}
      `}</style>

      {/* 로그인 시 갈림길 팝업 */}
      <AnimatePresence>
        {showPopup && (
          <ForkPopup lang={lang} todayEvent={todayEvent}
            onEnter={() => { dismissPopup(); setDayOffset(0); setView("fork"); }}
            onClose={dismissPopup} />
        )}
      </AnimatePresence>

      <Header view={view} setView={setView} lang={lang} setLang={setLang} forkPending={forkPending} theme={theme} toggleTheme={toggleTheme} canInstall={!!installPrompt} onInstall={promptInstall} />
      <AnimatePresence mode="wait">
        <motion.div key={view + lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          {view === "timeline" && <Timeline setView={setView} lang={lang} openIdx={openIdx} focusEvent={focusEvent} gotoDetail={gotoDetail} />}
          {view === "events" && <EventsIndex lang={lang} gotoDetail={gotoDetail} gotoEra={gotoEra} />}
          {view === "detail" && <EventDetail lang={lang} eventId={detailId} setView={setView} gotoEra={gotoEra} gotoDetail={gotoDetail} openMarket={() => setView("market")} />}
          {view === "market" && <MarketDemo lang={lang} setView={setView} gotoEra={gotoEra} gotoDetail={gotoDetail} />}
          {view === "my" && <MyPage lang={lang} forkState={forkState} openFork={() => { setDayOffset(0); setView("fork"); }} />}
          {view === "fork" && <Fork lang={lang} forkState={forkState} choose={choose} reset={reset} setDayOffset={setDayOffset} />}
        </motion.div>
      </AnimatePresence>

      <div style={{ borderTop: `1px solid ${T.line}`, padding: "30px 20px", textAlign: "center", color: T.textTertiary, fontSize: 13, lineHeight: 1.8, background: T.card }}>
        <div style={{ fontWeight: 800, color: T.primary, fontSize: 16, marginBottom: 4 }}>HISTORY ARCHIVE</div>
        {tt.footerTag}<br />
        {tt.footerCopy}
      </div>
    </div>
  );
}
