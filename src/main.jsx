import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ensureEsFallback } from "./data/i18nFallback";

// es(스페인어)를 4번째 언어로 등록 + 미번역분 영어 폴백 (첫 렌더 전 1회)
ensureEsFallback();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 서비스워커 등록 (오프라인·설치 지원). 프로덕션·dev 모두 동작.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* 등록 실패해도 앱은 정상 동작 */
    });
  });
}
