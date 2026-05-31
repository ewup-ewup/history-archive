import { EVENT_LINKS } from "../data/eventLinks";
import { ERAS, ERA_EVENTS } from "../data/timeline";

/* =========================================================
   linkify — 본문 텍스트에 사건 cross-link 자동 적용
   사용법: buildIndex로 인덱스를 메모이즈한 뒤 linkifyText에 전달.
   ========================================================= */

// 사건 id → eraColor 매핑 (링크 hover 색용)
const COLOR_BY_ID = (() => {
  const map = {};
  Object.keys(ERA_EVENTS).forEach((k) => {
    const eraIdx = Number(k);
    const color = ERAS[eraIdx]?.color;
    ERA_EVENTS[k].forEach((e) => { map[e.id] = color; });
  });
  return map;
})();

/**
 * buildLinkIndex — 현재 사건/언어 기준으로 패턴 인덱스 생성.
 * 긴 패턴이 먼저 매칭되도록 길이 내림차순 정렬.
 * 자기 자신은 제외.
 */
export function buildLinkIndex(lang, currentEventId) {
  const out = [];
  for (const [id, langs] of Object.entries(EVENT_LINKS)) {
    if (id === currentEventId) continue;
    const patterns = langs[lang] || [];
    for (const p of patterns) out.push({ pattern: p, id });
  }
  out.sort((a, b) => b.pattern.length - a.pattern.length);
  return out;
}

/**
 * linkifyText — 텍스트에서 사건 패턴을 찾아 React 조각 배열로 변환.
 * 매칭된 부분은 클릭 가능한 <a>, 나머지는 plain text.
 * 매칭이 없으면 원본 텍스트 그대로 반환.
 */
export function linkifyText(text, index, onClickId) {
  if (!text || typeof text !== "string" || index.length === 0) return text;

  // Non-overlapping 매칭 수집
  const matches = [];
  for (const { pattern, id } of index) {
    let i = 0;
    while (i < text.length) {
      const found = text.indexOf(pattern, i);
      if (found === -1) break;
      const end = found + pattern.length;
      // 기존 매칭과 겹치는지 확인
      const overlap = matches.some((m) => !(end <= m.start || found >= m.end));
      if (!overlap) matches.push({ start: found, end, id, pattern });
      i = end;
    }
  }

  if (matches.length === 0) return text;

  // 시작 위치 오름차순 정렬
  matches.sort((a, b) => a.start - b.start);

  // React 조각 배열 빌드
  const out = [];
  let cursor = 0;
  matches.forEach((m, idx) => {
    if (cursor < m.start) out.push(text.slice(cursor, m.start));
    const color = COLOR_BY_ID[m.id] || "#3182F6";
    out.push(
      <a
        key={`xlink-${idx}-${m.start}`}
        href={`#event-${m.id}`}
        onClick={(e) => { e.preventDefault(); onClickId(m.id); }}
        title={`→ ${m.id}`}
        className="event-xlink"
        data-xcolor={color}
        style={{
          color: "inherit",
          textDecoration: "underline",
          textDecorationStyle: "dotted",
          textDecorationThickness: "1px",
          textDecorationColor: color,
          textUnderlineOffset: "3px",
          cursor: "pointer",
          transition: "color .15s, text-decoration-thickness .15s",
        }}
      >
        {m.pattern}
      </a>
    );
    cursor = m.end;
  });
  if (cursor < text.length) out.push(text.slice(cursor));

  return out;
}
