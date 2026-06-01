/**
 * i18nFallback — es(스페인어)를 4번째 언어로 점진 추가하기 위한 폴백 주입.
 *
 * Phase 2 Step 1: es를 등록하되 아직 번역 전이므로, 모든 번역 리프({ko,en,ja})에
 * es가 없으면 es = en(영어)로 폴백을 채워 앱이 깨지지 않게 한다.
 * 이후 단계에서 실제 스페인어를 채우면 그 부분만 영어 대신 스페인어로 보인다.
 *
 * 동작: 콘텐츠 데이터 객체를 깊이 순회 → `en` 키를 가진 객체(=번역 리프)에
 *       es가 없으면 es = en(문자열/배열 참조)로 설정. UI(L·I18N)는 독립 복사 +
 *       스페인 국기/이름만 교체(내용은 영어 폴백).
 *
 * main.jsx에서 첫 렌더 전에 ensureEsFallback()를 1회 호출. 멱등(중복 호출 안전).
 */
import { L, I18N } from "./i18n";
import { ERAS, ERA_EVENTS, EVENT_DETAIL } from "./timeline";
import { COMPARE } from "./compare";
import { REFLECTIONS } from "./reflections";
import { EVENT_LINKS } from "./eventLinks";

const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

function addEsLeaf(node, seen) {
  if (node == null || typeof node !== "object") return;
  if (seen.has(node)) return;
  seen.add(node);
  if (Array.isArray(node)) {
    for (const item of node) addEsLeaf(item, seen);
    return;
  }
  // 번역 리프: en 키를 가진 객체 → es 폴백 후 내부는 더 내려가지 않음
  if (has(node, "en")) {
    if (!has(node, "es")) node.es = node.en;
    return;
  }
  for (const key of Object.keys(node)) addEsLeaf(node[key], seen);
}

export function ensureEsFallback() {
  // UI 사전: 독립 얕은 복사 + 국기/언어명만 스페인어 (내용은 영어 폴백)
  if (!L.es) L.es = { ...L.en, langName: "Español", flag: "🇪🇸" };
  if (!I18N.es) I18N.es = { ...I18N.en, name: "Español", flag: "🇪🇸" };

  // 콘텐츠 데이터: 모든 {ko,en,ja} 리프에 es 폴백
  const seen = new WeakSet();
  for (const data of [ERAS, ERA_EVENTS, EVENT_DETAIL, COMPARE, REFLECTIONS, EVENT_LINKS]) {
    addEsLeaf(data, seen);
  }
}
