/**
 * 미니멀 라우터 — view/detailId 상태와 URL 경로를 양방향 매핑.
 * React Router 없이 History API만으로 동작 (의존성 0).
 *
 *  /            ↔ timeline
 *  /events      ↔ events
 *  /event/:id   ↔ detail (detailId = :id)
 *  /market      ↔ market
 *  /my          ↔ my
 *  /fork        ↔ fork
 *  (그 외)       → timeline (fallback)
 */

export function pathFromState(view, detailId) {
  switch (view) {
    case "events": return "/events";
    case "detail": return detailId ? `/event/${encodeURIComponent(detailId)}` : "/events";
    case "market": return "/market";
    case "my": return "/my";
    case "fork": return "/fork";
    case "timeline":
    default: return "/";
  }
}

export function stateFromPath(pathname) {
  const p = (pathname || "/").replace(/\/+$/, "") || "/";
  if (p === "/" || p === "") return { view: "timeline", detailId: null };
  if (p === "/events") return { view: "events", detailId: null };
  if (p === "/market") return { view: "market", detailId: null };
  if (p === "/my") return { view: "my", detailId: null };
  if (p === "/fork") return { view: "fork", detailId: null };
  const m = p.match(/^\/event\/(.+)$/);
  if (m) return { view: "detail", detailId: decodeURIComponent(m[1]) };
  return { view: "timeline", detailId: null }; // 알 수 없는 경로 → 홈
}

// 현재 브라우저 경로에서 초기 상태 추출 (마운트 시 사용)
export function initialRouteState() {
  if (typeof window === "undefined") return { view: "timeline", detailId: null };
  return stateFromPath(window.location.pathname);
}
