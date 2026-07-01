// 처리 상태(이미 요약한 글 목록) 저장/조회
// ------------------------------------------------------------
// 매일 "새로 올라온 글"만 요약하기 위해, 이미 처리한 logNo 를 기록합니다.
// GitHub Action 이 이 파일을 커밋해 다음 실행에서 중복을 방지합니다.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const STATE_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "state.json"
);

export async function loadState() {
  try {
    const raw = await readFile(STATE_PATH, "utf8");
    const s = JSON.parse(raw);
    return { processed: Array.isArray(s.processed) ? s.processed : [] };
  } catch {
    return { processed: [] };
  }
}

export async function saveState(state) {
  // 최근 500개만 유지(무한 증가 방지)
  const trimmed = { processed: state.processed.slice(-500) };
  await writeFile(STATE_PATH, JSON.stringify(trimmed, null, 2) + "\n", "utf8");
}
