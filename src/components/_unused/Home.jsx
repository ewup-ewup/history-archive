import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ChevronRight, Compass, Diamond, Flame, History, LineChart, Sparkles, TrendingUp } from "lucide-react";
import { RARITY } from "../../data/events";
import { L } from "../../data/i18n";
import { FONT, T } from "../../data/theme";
import AdSlot from "../AdSlot.jsx";
import Disclaimer from "../Disclaimer.jsx";

export default function Home({ setView, todayEvent, lang }) {
  const tt = L[lang];
  const h = tt.home;
  const rar = RARITY[todayEvent.rarity];
  const featDesc = {
    ko: [
      "매일 하나의 역사적 순간 앞에서 세 갈래 길 중 하나를 선택합니다. 매일의 선택이 쌓여 당신의 진짜 투자 성향이 됩니다.",
      "오늘 이 날짜의 역사적 사건과, 그것이 지금의 시장과 닮은 점을 비춰봅니다. 예언이 아닌, 음미할 거리를 매일 하나씩.",
      "인류가 거쳐온 결정적 순간들을 하나의 연표로. 지금과 닮은 과거의 국면을 한눈에 살핍니다.",
      "당신의 누적된 선택이 그려낸 초상. 네 축으로 보는, 단일 진단이 아닌 행동의 기록입니다.",
      "같은 질문에 동서양의 철학과 사상이 어떻게 답했는지 나란히 펼칩니다. 음미하는 큐레이션.",
      "버블과 붕괴, 회복의 역사적 사례를 여러 관점으로 정리한 심층 아카이브.",
    ],
    en: [
      "Each day, choose one of three roads before a moment of history. Daily choices accumulate into your true investing temperament.",
      "Today's historical event and how it echoes in today's market. Not prophecy — one thing to savor each day.",
      "Humanity's decisive moments on a single timeline. See past phases that resemble today at a glance.",
      "A portrait drawn from your accumulated choices. Four axes — a record of behavior, not a one-off test.",
      "How Eastern and Western philosophy answered the same questions, side by side. A curation to savor.",
      "A deep archive of bubbles, crashes, and recoveries, organized through multiple perspectives.",
    ],
    ja: [
      "毎日ひとつの歴史的瞬間の前で三つの道から一つを選びます。日々の選択が積もり、本当の投資傾向になります。",
      "今日のこの日付の歴史的出来事と、それが今の市場とどう共鳴するか。予言ではなく、味わう一片を毎日。",
      "人類が辿った決定的瞬間を一つの年表に。今と似た過去の局面を一目で見渡します。",
      "あなたの累積された選択が描く肖像。四つの軸で見る、単発診断ではなく行動の記録です。",
      "同じ問いに東西の哲学と思想がどう答えたかを並べて広げます。味わうキュレーション。",
      "バブルと崩壊、回復の歴史的事例を多様な視点で整理した深層アーカイブ。",
    ],
  };
  const ft = (lang in featDesc) ? featDesc[lang] : featDesc.ko;
  const features = [
    { icon: Compass, title: tt.nav.fork, en: "The Daily Fork", desc: ft[0], badge: h.daily, go: "fork" },
    { icon: History, title: tt.nav.mirror, en: "The Daily Mirror", desc: ft[1], badge: h.daily, go: "mirror" },
    { icon: LineChart, title: tt.nav.timeline, en: "The Grand Timeline", desc: ft[2], go: "timeline" },
    { icon: TrendingUp, title: lang === "ko" ? "나의 투자 초상" : lang === "ja" ? "私の投資肖像" : "My Portrait", en: "Your Portrait", desc: ft[3], go: "fork" },
    { icon: Sparkles, title: lang === "ko" ? "삶의 지혜 서가" : lang === "ja" ? "人生の知恵の書架" : "Wisdom Shelf", en: "Wisdom Shelf", desc: ft[4], soon: true },
    { icon: BookOpen, title: lang === "ko" ? "역사로 보는 시장 사례" : lang === "ja" ? "歴史で見る市場事例" : "Market Echoes", en: "Market Echoes", desc: ft[5], soon: true },
  ];

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
  const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 60px" }}>
      {/* masthead */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: "center", padding: "48px 0 36px" }}>
        <div style={{ fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: T.textTertiary, marginBottom: 16 }}>
          {tt.brandTag}
        </div>
        <h1 style={{ fontSize: "clamp(2.2rem,6vw,3.6rem)", fontWeight: 800, color: T.strong, letterSpacing: -1.5, lineHeight: 1.1, margin: 0 }}>
          {h.h1a}<br />
          <span style={{ background: T.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{h.h1b}</span>
        </h1>
        <p style={{ color: T.textSecondary, fontSize: 16, marginTop: 16, lineHeight: 1.7 }}>
          {h.sub}
        </p>
      </motion.div>

      {/* hero: today's fork */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: T.card, borderRadius: 20, border: `1px solid ${T.line}`, overflow: "hidden", boxShadow: "0 10px 40px rgba(49,130,246,0.06)", display: "grid", gridTemplateColumns: "1.4fr 1fr" }}
        className="hero-grid">
        <div style={{ padding: "36px 38px", borderRight: `1px solid ${T.line}` }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: T.primarySoft, color: T.primary, fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 20, marginBottom: 18 }}>
            <Flame size={13} /> {h.forkFlag}
          </div>
          <div style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, color: T.primary, lineHeight: 1, letterSpacing: -1 }}>{todayEvent.year}</div>
          <h2 style={{ fontSize: "clamp(1.3rem,2.6vw,1.7rem)", fontWeight: 700, color: T.strong, margin: "10px 0 12px", letterSpacing: -0.5 }}>{todayEvent.title[lang]}</h2>
          <p style={{ color: T.textSecondary, fontSize: 15, lineHeight: 1.75, margin: 0 }}>{todayEvent.body[lang]} {h.forkAsk}</p>
          <motion.button whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(49,130,246,0.35)" }} whileTap={{ scale: 0.97 }}
            onClick={() => setView("fork")}
            style={{ marginTop: 24, border: "none", background: T.gradient, color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 12, cursor: "pointer", fontFamily: FONT, display: "inline-flex", alignItems: "center", gap: 8 }}>
            {h.forkCta} <ArrowRight size={17} />
          </motion.button>
        </div>
        <div style={{ padding: "30px 26px", background: T.bg }}>
          <div style={{ fontSize: 12, color: T.textSecondary, marginBottom: 6 }}>{h.todayCards}<b style={{ color: T.strong }}>{h.threeRoads}</b></div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: rar.color, background: rar.soft, padding: "5px 10px", borderRadius: 20, marginBottom: 14 }}>
            <Diamond size={11} fill={rar.color} /> {rar.label}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {todayEvent.cards.map((c, i) => (
              <motion.div key={i} whileHover={{ x: 4 }}
                style={{ border: `1px solid ${rar.color}33`, background: rar.soft, borderRadius: 10, padding: "11px 13px", cursor: "pointer", display: "flex", gap: 10 }}
                onClick={() => setView("fork")}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", border: `1px solid ${rar.color}`, color: rar.color, fontWeight: 700, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{"ABC"[i]}</div>
                <div>
                  <div style={{ fontSize: 11, color: rar.color, fontWeight: 600, marginBottom: 2 }}>{c.axis[lang]}</div>
                  <div style={{ fontSize: 13, color: T.textPrimary, lineHeight: 1.4 }}>{c.text[lang]}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <div style={{ textAlign: "center", fontSize: 13, color: T.textTertiary, marginTop: 12 }}>
        {h.forkNote}
      </div>

      <div style={{ margin: "28px 0" }}><AdSlot label={tt.ad} note={tt.adNote + " · 728×90"} /></div>

      {/* feature grid */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "40px 0 20px" }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: T.strong, margin: 0, letterSpacing: -0.5 }}>{h.explore}</h3>
        <div style={{ flex: 1, height: 1, background: T.line }} />
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="feat-grid">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={i} variants={item} whileHover={!f.soon ? { y: -6, boxShadow: "0 20px 44px rgba(0,0,0,0.08)" } : {}}
              onClick={() => !f.soon && f.go && setView(f.go)}
              style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: "26px 24px", cursor: f.soon ? "default" : "pointer", position: "relative", opacity: f.soon ? 0.66 : 1, minHeight: 210, display: "flex", flexDirection: "column" }}>
              {f.badge && <span style={{ position: "absolute", top: 16, right: 16, fontSize: 11, fontWeight: 700, color: "#fff", background: T.primary, padding: "3px 9px", borderRadius: 20 }}>{f.badge}</span>}
              {f.soon && <span style={{ position: "absolute", top: 16, right: 16, fontSize: 11, fontWeight: 600, color: T.textTertiary, background: T.bgSoft, padding: "3px 9px", borderRadius: 20 }}>{h.soon}</span>}
              <div style={{ width: 44, height: 44, borderRadius: 12, background: T.primarySoft, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Icon size={22} color={T.primary} />
              </div>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: T.strong, margin: "0 0 2px", letterSpacing: -0.4 }}>{f.title}</h4>
              <div style={{ fontSize: 12, color: T.primary, fontWeight: 600, marginBottom: 10 }}>{f.en}</div>
              <p style={{ fontSize: 14, color: T.textSecondary, lineHeight: 1.65, margin: 0, flex: 1 }}>{f.desc}</p>
              {!f.soon && <div style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: T.primary, display: "flex", alignItems: "center", gap: 5 }}>{h.goto} <ChevronRight size={15} /></div>}
            </motion.div>
          );
        })}
      </motion.div>

      {/* trust strip */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, overflow: "hidden", marginTop: 40 }} className="trust-grid">
        {h.trust.map((v, i) => (
          <div key={i} style={{ padding: "26px 26px", borderRight: i < 2 ? `1px solid ${T.line}` : "none", textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: T.primary, fontSize: 16, marginBottom: 8 }}>{v.t}</div>
            <p style={{ fontSize: 13.5, color: T.textSecondary, lineHeight: 1.7, margin: 0 }}>{v.d}</p>
          </div>
        ))}
      </motion.div>

      <Disclaimer lang={lang} />
    </div>
  );
}

