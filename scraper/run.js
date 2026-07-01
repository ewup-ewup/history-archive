// 네이버 블로그 → 일일 요약 다이제스트 파이프라인 (진입점)
// ------------------------------------------------------------
// 흐름: 최신 글 조회 → 새 글만 필터 → 본문·댓글 수집 → Claude 요약
//       → public/digest/ 에 HTML 생성 → 카카오톡으로 링크 전송
//
// 환경변수
//   BLOG_ID           대상 블로그 아이디 (기본: ranto28)
//   SITE_BASE_URL     배포된 사이트 주소 (예: https://history-archive.pages.dev)
//   MAX_POSTS         한 번에 처리할 최대 새 글 수 (기본: 5)
//   ANTHROPIC_API_KEY Claude API 키 (요약)
//   KAKAO_*           카카오 전송용 (lib/kakao.js 참고)
//   SKIP_KAKAO=1      카카오 전송 생략(로컬 테스트용)
//   DRY_RUN=1         파일 저장/전송 없이 콘솔 출력만

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { fetchRecentPosts, fetchPostContent, fetchComments } from "./lib/naver.js";
import { summarizePost, summarizeComments } from "./lib/summarize.js";
import { renderDigest, renderIndex } from "./lib/render.js";
import { sendKakaoLink } from "./lib/kakao.js";
import { loadState, saveState } from "./lib/state.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIGEST_DIR = join(ROOT, "public", "digest");

const BLOG_ID = process.env.BLOG_ID || "ranto28";
const MAX_POSTS = Number(process.env.MAX_POSTS || 5);
const SITE_BASE_URL = (process.env.SITE_BASE_URL || "").replace(/\/$/, "");
const DRY_RUN = process.env.DRY_RUN === "1";
const SKIP_KAKAO = process.env.SKIP_KAKAO === "1";

function todayKST() {
  // en-CA 로케일은 YYYY-MM-DD 형식을 보장
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Seoul" });
}

async function main() {
  const date = todayKST();
  console.log(`[run] ${date} — @${BLOG_ID} 다이제스트 시작`);

  const state = await loadState();
  const seen = new Set(state.processed);

  const recent = await fetchRecentPosts(BLOG_ID, 15);
  const fresh = recent.filter((p) => !seen.has(p.logNo)).slice(0, MAX_POSTS);
  console.log(`[run] 최신 ${recent.length}건 중 새 글 ${fresh.length}건`);

  const items = [];
  for (const post of fresh) {
    console.log(`[run] 처리: ${post.title} (${post.logNo})`);
    try {
      const content = await fetchPostContent(BLOG_ID, post.logNo);
      const title = content.title || post.title;

      let comments = [];
      try {
        comments = await fetchComments(BLOG_ID, post.logNo);
      } catch (e) {
        console.warn(`  ↳ 댓글 수집 실패(무시): ${e.message}`);
      }

      const summary = await summarizePost({ title, text: content.text });
      const commentSummary = await summarizeComments({ title, comments }).catch((e) => {
        console.warn(`  ↳ 댓글 요약 실패(무시): ${e.message}`);
        return null;
      });

      items.push({
        logNo: post.logNo,
        title,
        url: post.url,
        pubDate: post.pubDate,
        summary,
        commentSummary,
        commentCount: comments.length,
      });
      seen.add(post.logNo);
    } catch (e) {
      console.error(`  ↳ 글 처리 실패(건너뜀): ${e.message}`);
    }
  }

  // 상태 갱신: 처리 목록 + 날짜별 다이제스트(재실행 시 병합)
  state.processed = [...seen];
  state.digests = state.digests || {};
  const merged = mergeById(state.digests[date] || [], items);
  state.digests[date] = merged;
  state.digests = trimDigests(state.digests, 30);
  state.archive = Object.keys(state.digests)
    .sort()
    .map((d) => ({ date: d, count: state.digests[d].length }));

  const digestHtml = renderDigest({ blogId: BLOG_ID, date, items: merged });
  const indexHtml = renderIndex({ blogId: BLOG_ID, entries: state.archive });
  const digestUrl = SITE_BASE_URL ? `${SITE_BASE_URL}/digest/${date}.html` : `/digest/${date}.html`;

  if (DRY_RUN) {
    console.log("\n===== DRY_RUN: 다이제스트 미리보기 =====");
    console.log(JSON.stringify(merged, null, 2));
    console.log("digestUrl:", digestUrl);
    return;
  }

  await mkdir(DIGEST_DIR, { recursive: true });
  await writeFile(join(DIGEST_DIR, `${date}.html`), digestHtml, "utf8");
  await writeFile(join(DIGEST_DIR, "index.html"), indexHtml, "utf8");
  await saveState(state);
  console.log(`[run] HTML 저장 완료 → public/digest/${date}.html`);

  if (items.length === 0) {
    console.log("[run] 새 글이 없어 카카오 전송을 생략합니다.");
    return;
  }

  if (SKIP_KAKAO) {
    console.log(`[run] SKIP_KAKAO — 전송 생략. 링크: ${digestUrl}`);
    return;
  }

  const titles = items.map((i) => `· ${i.title}`).join("\n");
  await sendKakaoLink({
    text: `📮 @${BLOG_ID} 오늘의 글 ${items.length}건 요약이 도착했어요.\n\n${titles}`,
    link: digestUrl,
  });
  console.log("[run] 카카오톡 전송 완료");
}

function mergeById(prev, next) {
  const map = new Map(prev.map((x) => [x.logNo, x]));
  for (const x of next) map.set(x.logNo, x);
  return [...map.values()];
}
function trimDigests(digests, keepDays) {
  const dates = Object.keys(digests).sort().slice(-keepDays);
  const out = {};
  for (const d of dates) out[d] = digests[d];
  return out;
}

main().catch((e) => {
  console.error("[run] 치명적 오류:", e);
  process.exit(1);
});
