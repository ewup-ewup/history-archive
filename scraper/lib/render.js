// 다이제스트 HTML 렌더러
// ------------------------------------------------------------
// 사이트(History Archive)의 디자인 토큰과 동일한 팔레트/폰트를 인라인으로 사용해
// 독립 실행형(standalone) 정적 HTML 을 만듭니다. React 번들 없이도 열립니다.
//   - public/digest/YYYY-MM-DD.html : 그 날의 요약본
//   - public/digest/index.html      : 전체 요약본 목록
// public/ 아래이므로 vite build 시 dist 로 그대로 복사되어 배포됩니다.

const CSS = `
:root{
  --bg:#F9FAFB;--card:#FFFFFF;--strong:#191F28;--txt:#333D4B;--txt2:#6B7684;
  --txt3:#8B95A1;--line:#E5E8EB;--primary:#3182F6;--accent:#8B5CF6;
  --infoSoft:#F7F4FF;--successSoft:#E7F9ED;
}
@media (prefers-color-scheme: dark){:root{
  --bg:#15171A;--card:#1C1F24;--strong:#ECEEF0;--txt:#C9CDD2;--txt2:#9AA0A8;
  --txt3:#6B7178;--line:#2C3036;--primary:#4C8DF6;--accent:#A07CF8;
  --infoSoft:#211C2E;--successSoft:#152A1C;
}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--txt);
  font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,system-ui,sans-serif;
  line-height:1.6;-webkit-font-smoothing:antialiased}
.wrap{max-width:720px;margin:0 auto;padding:24px 18px 80px}
.top{display:flex;align-items:center;justify-content:space-between;margin:8px 0 20px}
.brand{font-weight:800;color:var(--strong);font-size:15px;text-decoration:none}
.date{color:var(--txt3);font-size:13px}
h1{font-size:24px;line-height:1.35;color:var(--strong);margin:0 0 6px;letter-spacing:-.02em}
.sub{color:var(--txt2);font-size:14px;margin:0 0 24px}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;
  padding:20px;margin:0 0 18px}
.card h2{font-size:18px;color:var(--strong);margin:0 0 4px;letter-spacing:-.01em}
.meta{color:var(--txt3);font-size:12px;margin:0 0 14px}
.tldr{background:var(--infoSoft);border-radius:12px;padding:12px 14px;margin:0 0 14px;
  color:var(--strong);font-weight:600;font-size:15px}
.sec{font-size:12px;font-weight:700;color:var(--txt3);text-transform:uppercase;
  letter-spacing:.06em;margin:16px 0 8px}
ul{margin:0;padding-left:18px}li{margin:4px 0}
.take{background:var(--successSoft);border-radius:12px;padding:12px 14px;margin-top:14px;
  color:var(--strong);font-size:14px}
.chip{display:inline-block;background:var(--infoSoft);color:var(--accent);
  border-radius:999px;padding:3px 10px;font-size:12px;font-weight:600;margin:0 6px 6px 0}
a.orig{display:inline-block;margin-top:14px;color:var(--primary);font-weight:600;
  font-size:14px;text-decoration:none}
.empty{color:var(--txt3);font-size:14px}
.foot{color:var(--txt3);font-size:12px;margin-top:40px;line-height:1.7}
.idx a{display:block;background:var(--card);border:1px solid var(--line);border-radius:12px;
  padding:14px 16px;margin:0 0 10px;text-decoration:none;color:var(--strong);font-weight:600}
.idx a span{display:block;color:var(--txt3);font-size:12px;font-weight:400;margin-top:2px}
`;

const esc = (s) =>
  String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const li = (arr) => (arr || []).map((x) => `<li>${esc(x)}</li>`).join("");
const chips = (arr) => (arr || []).map((x) => `<span class="chip">${esc(x)}</span>`).join("");

function postCard(item) {
  const s = item.summary || {};
  const c = item.commentSummary;
  const commentBlock = c
    ? `<div class="sec">댓글 여론 (${item.commentCount}개)</div>
       ${c.mood ? `<p style="margin:0 0 10px">${esc(c.mood)}</p>` : ""}
       ${c.themes && c.themes.length ? `<div>${chips(c.themes)}</div>` : ""}
       ${c.notable && c.notable.length ? `<ul>${li(c.notable)}</ul>` : ""}`
    : `<div class="sec">댓글 여론</div>
       <p class="empty">${item.commentCount ? `댓글 ${item.commentCount}개 — 요약을 불러오지 못했습니다.` : "댓글을 불러오지 못했거나 아직 없습니다."}</p>`;

  return `<article class="card">
    <h2>${esc(item.title)}</h2>
    <p class="meta">${esc(item.pubDate || "")}</p>
    ${s.tldr ? `<div class="tldr">${esc(s.tldr)}</div>` : ""}
    ${s.bullets && s.bullets.length ? `<div class="sec">핵심 요약</div><ul>${li(s.bullets)}</ul>` : ""}
    ${s.takeaway ? `<div class="take">💡 ${esc(s.takeaway)}</div>` : ""}
    ${commentBlock}
    <a class="orig" href="${esc(item.url)}" target="_blank" rel="noopener">원문 보기 ↗</a>
  </article>`;
}

// 하루치 다이제스트 페이지
export function renderDigest({ blogId, date, items }) {
  const body =
    items.length === 0
      ? `<p class="empty">오늘은 새로 올라온 글이 없습니다.</p>`
      : items.map(postCard).join("\n");
  return `<!doctype html><html lang="ko"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
<meta name="theme-color" content="#3182F6" media="(prefers-color-scheme: light)"/>
<meta name="theme-color" content="#15171A" media="(prefers-color-scheme: dark)"/>
<title>${esc(date)} 블로그 요약 — @${esc(blogId)}</title>
<meta name="description" content="${esc(blogId)} 블로그 ${esc(date)} 글·댓글 요약본"/>
<meta property="og:title" content="${esc(date)} 블로그 요약 — @${esc(blogId)}"/>
<meta property="og:description" content="오늘 올라온 글과 댓글 여론을 30초 요약으로."/>
<meta property="og:type" content="article"/>
<style>${CSS}</style></head><body><div class="wrap">
  <div class="top"><a class="brand" href="./index.html">📮 블로그 요약</a><span class="date">${esc(date)}</span></div>
  <h1>@${esc(blogId)} 오늘의 요약</h1>
  <p class="sub">새 글 ${items.length}건 · 본문 + 댓글 요약</p>
  ${body}
  <p class="foot">
    자동 생성 요약본입니다. 원문의 뉘앙스와 다를 수 있으니 판단은 원문을 확인하세요.<br/>
    본 자료는 학습·참고용이며 투자 자문이 아닙니다. · Powered by Claude
  </p>
</div></body></html>`;
}

// 전체 목록 인덱스 페이지
export function renderIndex({ blogId, entries }) {
  const list = entries
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (e) =>
        `<a href="./${esc(e.date)}.html">${esc(e.date)} 요약<span>새 글 ${e.count}건</span></a>`
    )
    .join("\n");
  return `<!doctype html><html lang="ko"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
<meta name="theme-color" content="#3182F6" media="(prefers-color-scheme: light)"/>
<meta name="theme-color" content="#15171A" media="(prefers-color-scheme: dark)"/>
<title>블로그 요약 아카이브 — @${esc(blogId)}</title>
<style>${CSS}</style></head><body><div class="wrap">
  <div class="top"><span class="brand">📮 블로그 요약</span></div>
  <h1>@${esc(blogId)} 요약 아카이브</h1>
  <p class="sub">매일 자동 생성되는 글·댓글 요약본 모음</p>
  <div class="idx">${list || '<p class="empty">아직 요약본이 없습니다.</p>'}</div>
  <p class="foot">학습·참고용 자동 요약 · 투자 자문 아님 · Powered by Claude</p>
</div></body></html>`;
}
