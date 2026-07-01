// 네이버 블로그 스크래핑 유틸
// ------------------------------------------------------------
// blog.naver.com 은 공개 엔드포인트 3개로 필요한 데이터를 모두 얻을 수 있습니다.
//   1) 최신 글 목록  : RSS( rss.blog.naver.com/{id}.xml ) → 실패 시 PostTitleListAsync
//   2) 본문         : PostView.naver?blogId=..&logNo=..  (iframe 안의 실제 문서)
//   3) 댓글         : cbox JSONP API (아래 fetchComments 주석 참고)
//
// 외부 의존성 없이 Node 18+ 의 내장 fetch 만 사용합니다.
// 파싱은 정규식 기반의 가벼운 방식이며, 네이버가 마크업/파라미터를 바꾸면
// 이 파일만 손보면 됩니다.

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0 Safari/537.36";

async function getText(url, extraHeaders = {}) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, "Accept-Language": "ko-KR,ko;q=0.9", ...extraHeaders },
  });
  if (!res.ok) throw new Error(`GET ${url} → HTTP ${res.status}`);
  return res.text();
}

// ── HTML/엔티티 → 순수 텍스트 ────────────────────────────────
export function htmlToText(html) {
  if (!html) return "";
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(br|\/p|\/div|\/li|\/h[1-6])\s*>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/[ \t ]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((l) => l.trim())
    .join("\n")
    .trim();
}

function logNoFromLink(link) {
  // 링크 형태: .../ranto28/223456789  또는  ...?blogId=ranto28&logNo=223456789
  const q = link.match(/logNo=(\d+)/);
  if (q) return q[1];
  const p = link.match(/\/(\d{6,})(?:[/?#]|$)/);
  return p ? p[1] : null;
}

// ── 1) 최신 글 목록 ─────────────────────────────────────────
export async function fetchRecentPosts(blogId, limit = 10) {
  // (a) RSS 우선
  try {
    const xml = await getText(`https://rss.blog.naver.com/${blogId}.xml`);
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
    const posts = items
      .map((item) => {
        const pick = (tag) => {
          const cdata = item.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
          if (cdata) return cdata[1].trim();
          const plain = item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
          return plain ? plain[1].trim() : "";
        };
        const link = pick("link");
        const logNo = logNoFromLink(link);
        return {
          logNo,
          title: pick("title"),
          url: logNo ? `https://blog.naver.com/${blogId}/${logNo}` : link,
          pubDate: pick("pubDate"),
        };
      })
      .filter((p) => p.logNo);
    if (posts.length) return posts.slice(0, limit);
  } catch (e) {
    console.warn(`[naver] RSS 실패, 목록 API로 폴백: ${e.message}`);
  }

  // (b) 폴백: PostTitleListAsync (JSON)
  const raw = await getText(
    `https://blog.naver.com/PostTitleListAsync.naver?blogId=${blogId}` +
      `&viewdate=&currentPage=1&categoryNo=0&parentCategoryNo=0&countPerPage=${limit}`,
    { Referer: `https://blog.naver.com/${blogId}` }
  );
  const data = JSON.parse(raw);
  const list = data.postList || [];
  return list.slice(0, limit).map((p) => ({
    logNo: String(p.logNo),
    title: decodeURIComponent((p.title || "").replace(/\+/g, " ")),
    url: `https://blog.naver.com/${blogId}/${p.logNo}`,
    pubDate: p.addDate || "",
  }));
}

// ── 2) 본문 ─────────────────────────────────────────────────
export async function fetchPostContent(blogId, logNo) {
  const url =
    `https://blog.naver.com/PostView.naver?blogId=${blogId}&logNo=${logNo}` +
    `&redirect=Dlog&widgetTypeCall=true&directAccess=false`;
  const html = await getText(url, { Referer: `https://blog.naver.com/${blogId}/${logNo}` });

  // SmartEditor 3(.se-main-container) → 구버전(#postViewArea) 순으로 본문 컨테이너 추출
  const container =
    sliceByClass(html, "se-main-container") ||
    sliceById(html, "postViewArea") ||
    html;

  const titleMatch =
    html.match(/<meta property="og:title" content="([^"]*)"/) ||
    html.match(/<title>([^<]*)<\/title>/);

  return {
    title: titleMatch ? decodeEntities(titleMatch[1]).trim() : "",
    text: htmlToText(container),
    url: `https://blog.naver.com/${blogId}/${logNo}`,
  };
}

// ── 3) 댓글 ─────────────────────────────────────────────────
// 네이버 블로그 댓글은 cbox JSONP API 로 별도 로딩됩니다.
// 아래 파라미터(pool/templateId 등)는 네이버가 조정할 수 있어,
// 최초 실 배포 시 한 번 검증하는 것을 권장합니다. 실패해도 다이제스트는
// 본문 요약만으로 계속 생성됩니다(댓글은 "불러오지 못함"으로 표기).
export async function fetchComments(blogId, logNo, limit = 100) {
  const params = new URLSearchParams({
    ticket: "blog",
    templateId: "default",
    pool: "cbox3",
    lang: "ko",
    country: "KR",
    objectId: `${blogId}_${logNo}`,
    categoryId: "",
    pageSize: String(limit),
    indexSize: "10",
    listType: "OBJECT",
    pageType: "default",
    page: "1",
    initialize: "true",
    useAltSort: "true",
    replyPageSize: "20",
    sort: "NEW",
    _callback: "cb",
  });
  const url = `https://apis.naver.com/commentBox/cbox/web_naver_list_jsonp.json?${params}`;
  const jsonp = await getText(url, {
    Referer: `https://blog.naver.com/${blogId}/${logNo}`,
  });
  const json = jsonp.replace(/^[^(]*\(/, "").replace(/\);?\s*$/, "");
  const data = JSON.parse(json);
  const list = (data.result && data.result.commentList) || [];
  return list
    .filter((c) => !c.deleted && !c.hidden)
    .map((c) => ({
      author: c.maskedUserName || c.userName || "익명",
      text: htmlToText(c.contents || ""),
      date: c.regTime || "",
      likes: c.sympathyCount || 0,
      isReply: (c.replyLevel || 0) > 1,
    }))
    .filter((c) => c.text);
}

// ── 내부 헬퍼 ───────────────────────────────────────────────
function sliceByClass(html, cls) {
  const m = html.match(new RegExp(`<div[^>]*class="[^"]*${cls}[^"]*"[^>]*>`));
  if (!m) return null;
  return sliceBalancedDiv(html, m.index);
}
function sliceById(html, id) {
  const m = html.match(new RegExp(`<div[^>]*id="${id}"[^>]*>`));
  if (!m) return null;
  return sliceBalancedDiv(html, m.index);
}
// 여는 <div> 위치부터 짝이 맞는 </div> 까지 잘라냅니다.
function sliceBalancedDiv(html, startIdx) {
  let depth = 0;
  const re = /<div\b|<\/div>/gi;
  re.lastIndex = startIdx;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].toLowerCase().startsWith("<div")) depth++;
    else depth--;
    if (depth === 0) return html.slice(startIdx, re.lastIndex);
  }
  return html.slice(startIdx);
}
function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
