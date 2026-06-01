/**
 * History Archive — Service Worker (의존성 0, 런타임 캐싱)
 *
 * 전략:
 *  - 내비게이션(HTML): network-first → 오프라인 시 캐시된 셸(/) 폴백.
 *    온라인이면 항상 최신 index.html을 받아 새 자산 해시를 참조 → 업데이트 자연 전파.
 *  - 동일 출처 정적 자산(JS/CSS/이미지/폰트): stale-while-revalidate.
 *  - /api/*: 네트워크 전용(캐시 안 함 — 시세는 백엔드가 이미 캐시, 앱은 자체 데모 폴백).
 *  - 교차 출처(폰트 CDN 등): cache-first.
 *
 * 버전 올리면 activate에서 옛 캐시 정리.
 */
const VERSION = "ha-v1";
const SHELL_CACHE = `${VERSION}-shell`;
const ASSET_CACHE = `${VERSION}-assets`;

// 설치 시 최소 셸 선캐시 (해시 자산은 런타임에 채워짐)
const SHELL_URLS = ["/", "/index.html", "/manifest.webmanifest", "/favicon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // /api/* — 네트워크 전용 (캐시하지 않음)
  if (url.origin === self.location.origin && url.pathname.startsWith("/api/")) {
    return; // 기본 네트워크 처리
  }

  // 내비게이션(페이지 요청) — network-first, 오프라인 시 셸 폴백
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(SHELL_CACHE).then((c) => c.put("/", copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("/")))
    );
    return;
  }

  // 동일 출처 정적 자산 — stale-while-revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(ASSET_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          const network = fetch(req)
            .then((res) => {
              if (res && res.status === 200) cache.put(req, res.clone());
              return res;
            })
            .catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  // 교차 출처(폰트 CDN 등) — cache-first
  event.respondWith(
    caches.open(ASSET_CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          // 불투명 응답 포함 캐시 (폰트 등)
          if (res && (res.status === 200 || res.type === "opaque")) cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
      })
    )
  );
});
