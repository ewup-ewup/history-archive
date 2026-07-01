// Claude API 요약 모듈
// ------------------------------------------------------------
// 본문 요약과 댓글 요약을 각각 생성합니다. 외부 SDK 없이 Messages API 를
// fetch 로 직접 호출합니다. ANTHROPIC_API_KEY 환경변수가 필요합니다.

const API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";

async function callClaude(system, user, maxTokens = 1200) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY 가 설정되지 않았습니다.");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Claude API HTTP ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  return (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("")
    .trim();
}

// 본문 요약 → { tldr, bullets[], takeaway } JSON
export async function summarizePost({ title, text }) {
  const clipped = text.slice(0, 24000); // 과금/컨텍스트 안전 상한
  const system =
    "너는 한국 경제·투자 블로그 글을 독자가 30초 만에 파악하도록 요약하는 애널리스트다. " +
    "과장 없이 핵심만, 사실 위주로 정리한다. 투자 권유는 하지 않는다. " +
    "반드시 아래 JSON 스키마로만 답한다.\n" +
    '{"tldr": "한 문장 핵심 요약", "bullets": ["핵심 포인트 3~6개"], ' +
    '"takeaway": "글쓴이의 결론/시사점 한두 문장"}';
  const user = `제목: ${title}\n\n본문:\n${clipped}`;
  return parseJson(await callClaude(system, user, 1200), {
    tldr: firstSentence(text),
    bullets: [],
    takeaway: "",
  });
}

// 댓글 요약 → { mood, themes[], notable[] } JSON
export async function summarizeComments({ title, comments }) {
  if (!comments || comments.length === 0) return null;
  const sample = comments
    .slice(0, 120)
    .map((c, i) => `${i + 1}. (${c.author}, 공감 ${c.likes}) ${c.text}`)
    .join("\n")
    .slice(0, 16000);
  const system =
    "너는 블로그 댓글 여론을 요약하는 분석가다. 전체 반응의 분위기와 반복되는 " +
    "주제, 눈에 띄는 의견을 균형 있게 정리한다. 특정 개인을 비방하지 않는다. " +
    "반드시 아래 JSON 스키마로만 답한다.\n" +
    '{"mood": "전반적 분위기 한 문장", "themes": ["반복되는 주제 2~5개"], ' +
    '"notable": ["대표적/인상적 의견 2~4개(요지만)"]}';
  const user = `글 제목: ${title}\n댓글 ${comments.length}개 중 일부:\n${sample}`;
  return parseJson(await callClaude(system, user, 1000), {
    mood: "",
    themes: [],
    notable: [],
  });
}

// ── 헬퍼 ────────────────────────────────────────────────────
function parseJson(raw, fallback) {
  try {
    const m = raw.match(/\{[\s\S]*\}/);
    return m ? JSON.parse(m[0]) : fallback;
  } catch {
    return fallback;
  }
}
function firstSentence(text) {
  const s = (text || "").replace(/\s+/g, " ").trim();
  const dot = s.search(/[.!?。]\s/);
  return dot > 0 ? s.slice(0, dot + 1) : s.slice(0, 120);
}
