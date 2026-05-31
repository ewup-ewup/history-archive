import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircleQuestion, RotateCcw } from "lucide-react";
import { L } from "../data/i18n";
import { REFLECTIONS } from "../data/reflections";
import { FONT, T } from "../data/theme";

/* =========================================================
   Reflections — 사건별 자기점검 질문 (3개) + 답 localStorage 자동 저장.
   props: lang, eventId, color (해당 사건의 era 색)
   ========================================================= */

const STORAGE_KEY = "ha-reflections-v1";

function loadAll() {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveAll(data) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota / private mode */
  }
}

export default function Reflections({ lang, eventId, color }) {
  const tl = L[lang].timeline;
  const questions = REFLECTIONS[eventId]?.[lang] || [];
  const [answers, setAnswers] = useState({}); // { 0: "..", 1: ".." }
  const [savedFlash, setSavedFlash] = useState({}); // 임시 "저장됨" 표시
  const debounceTimers = useRef({});

  // 마운트 시 + eventId 변경 시 답 로드
  useEffect(() => {
    const all = loadAll();
    setAnswers(all[eventId] || {});
  }, [eventId]);

  function onChange(idx, value) {
    setAnswers((prev) => {
      const next = { ...prev, [idx]: value };
      // 디바운스 저장
      clearTimeout(debounceTimers.current[idx]);
      debounceTimers.current[idx] = setTimeout(() => {
        const all = loadAll();
        const eventAnswers = { ...(all[eventId] || {}) };
        if (value.trim() === "") delete eventAnswers[idx];
        else eventAnswers[idx] = value;
        if (Object.keys(eventAnswers).length === 0) delete all[eventId];
        else all[eventId] = eventAnswers;
        saveAll(all);
        // 저장됨 표시 1.2초
        setSavedFlash((s) => ({ ...s, [idx]: true }));
        setTimeout(() => setSavedFlash((s) => ({ ...s, [idx]: false })), 1200);
      }, 400);
      return next;
    });
  }

  function resetEvent() {
    if (!window.confirm(tl.reflectionResetConfirm)) return;
    const all = loadAll();
    delete all[eventId];
    saveAll(all);
    setAnswers({});
  }

  if (questions.length === 0) return null;

  return (
    <motion.div
      id="reflections"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ margin: "10px 0 24px", scrollMarginTop: 80 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <MessageCircleQuestion size={14} style={{ color }} />
        <span style={{ fontSize: 13, fontWeight: 700, color, letterSpacing: 1, textTransform: "uppercase" }}>
          {tl.reflectionsTitle}
        </span>
        <div style={{ flex: 1, height: 1, background: T.bgSoft }} />
      </div>
      <p style={{ fontSize: 13, color: T.textTertiary, lineHeight: 1.6, margin: "0 0 14px" }}>
        {tl.reflectionsSubtitle}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {questions.map((q, i) => (
          <div
            key={i}
            style={{
              background: T.card,
              border: `1px solid ${T.line}`,
              borderRadius: 12,
              padding: "16px 18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color, fontVariantNumeric: "tabular-nums", letterSpacing: 0.5 }}>
                Q{i + 1}
              </span>
              <span style={{ fontSize: 14.5, fontWeight: 600, color: T.strong, lineHeight: 1.55, flex: 1 }}>
                {q}
              </span>
            </div>
            <div style={{ position: "relative" }}>
              <textarea
                value={answers[i] || ""}
                onChange={(e) => onChange(i, e.target.value)}
                placeholder={tl.reflectionPlaceholder}
                rows={3}
                style={{
                  width: "100%",
                  border: `1px solid ${T.line}`,
                  borderRadius: 8,
                  padding: "10px 12px",
                  fontFamily: FONT,
                  fontSize: 14,
                  color: T.textPrimary,
                  background: T.bg,
                  resize: "vertical",
                  minHeight: 72,
                  outline: "none",
                  boxSizing: "border-box",
                  lineHeight: 1.6,
                }}
                onFocus={(e) => { e.target.style.borderColor = color; }}
                onBlur={(e) => { e.target.style.borderColor = T.line; }}
              />
              {savedFlash[i] && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "absolute",
                    right: 10,
                    bottom: 10,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    color: T.success,
                    background: "#E7F9ED",
                    padding: "3px 7px",
                    borderRadius: 6,
                    pointerEvents: "none",
                  }}
                >
                  <Check size={11} /> {tl.reflectionSaved}
                </motion.span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 초기화 — 답이 하나라도 있을 때만 노출 */}
      {Object.values(answers).some((v) => v && v.trim() !== "") && (
        <button
          onClick={resetEvent}
          style={{
            marginTop: 10,
            border: "none",
            background: "transparent",
            color: T.textTertiary,
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: FONT,
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "6px 4px",
          }}
        >
          <RotateCcw size={12} /> {tl.reflectionReset}
        </button>
      )}
    </motion.div>
  );
}
