/**
 * scripts/build-og-events.js — 사건별 OG 이미지(1200×630 PNG) 생성 → public/og/
 * 공유 시 각 사건 링크가 고유한 미리보기 카드를 갖도록. (로컬 실행, 결과는 커밋)
 * 실행: npm run build-og-events
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";
import { ERAS, ERA_EVENTS } from "../src/data/timeline.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "public", "og");
mkdirSync(outDir, { recursive: true });

// era.color가 CSS var()라 OG(독립 SVG)에선 못 씀 → 라이트 concrete hex 매핑
const ERA_HEX = ["#888780", "#BA7517", "#BA7517", "#1D9E75", "#185FA5", "#534AB7"];

const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// 제목을 최대 2줄로 wrap (대략 14자/줄)
function wrap(title, max = 14) {
  const words = String(title).split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max && cur) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
    if (lines.length === 2) break;
  }
  if (cur && lines.length < 2) lines.push(cur.trim());
  // 넘치면 마지막 줄 말줄임
  if (lines.length === 2 && words.join(" ").length > lines.join(" ").length) {
    lines[1] = lines[1].slice(0, max - 1).trimEnd() + "…";
  }
  return lines.slice(0, 2);
}

function svgFor(ev, eraIdx) {
  const accent = ERA_HEX[eraIdx] || "#3182F6";
  const era = ERAS[eraIdx];
  const titleLines = wrap(ev.title.ko);
  const titleSvg = titleLines
    .map((ln, i) => `<text x="80" y="${340 + i * 78}" font-size="64" font-weight="800" fill="#fff" letter-spacing="-1.5">${esc(ln)}</text>`)
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3182F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- 우상단 accent 점 장식 -->
  <g opacity="0.28" fill="#fff">
    <circle cx="1080" cy="120" r="6"/><circle cx="1130" cy="90" r="4"/><circle cx="1040" cy="160" r="4"/>
  </g>
  <!-- 로고 -->
  <g transform="translate(80 84)">
    <rect width="56" height="56" rx="13" fill="rgba(255,255,255,0.22)"/>
    <g fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" transform="translate(12 12) scale(1.33)">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>
    </g>
  </g>
  <text x="152" y="122" font-size="30" font-weight="800" fill="#fff" letter-spacing="-0.5">History Archive</text>
  <!-- era + year 칩 -->
  <g transform="translate(80 200)">
    <rect width="${44 + era.title.ko.length * 19 + ev.year.ko.length * 17}" height="42" rx="21" fill="rgba(0,0,0,0.18)"/>
    <text x="22" y="28" font-size="18" font-weight="700" fill="#fff">${esc(era.title.ko)} · ${esc(ev.year.ko)}</text>
  </g>
  <!-- 제목 -->
  ${titleSvg}
  <!-- 하단 -->
  <text x="80" y="560" font-size="20" font-weight="600" fill="rgba(255,255,255,0.82)">돈의 역사 21사건 · 학습·참고용 (투자 자문 아님)</text>
  <text x="80" y="592" font-size="15" fill="rgba(255,255,255,0.55)">history-archive.pages.dev/event/${esc(ev.id)}</text>
</svg>`;
}

const all = Object.entries(ERA_EVENTS).flatMap(([k, list]) => list.map((ev) => ({ ev, eraIdx: Number(k) })));
let n = 0;
for (const { ev, eraIdx } of all) {
  const svg = svgFor(ev, eraIdx);
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  writeFileSync(resolve(outDir, `event-${ev.id}.png`), png);
  n++;
}
console.log(`✓ generated ${n} per-event OG images → public/og/event-{id}.png`);
