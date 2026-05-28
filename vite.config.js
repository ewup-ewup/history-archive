import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 서브경로(예: GitHub Pages의 /repo/)에 배포하면 base를 그 경로로 바꾸세요.
  // 루트 도메인(Vercel/Netlify 등)에 배포하면 "/" 그대로 두면 됩니다.
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
    // 콘텐츠가 21사건으로 늘면서 단일 번들이 500kB를 넘었음.
    // vendor를 분리해 첫 로드 속도·캐싱 효율을 개선.
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "motion-vendor": ["framer-motion"],
          "icons-vendor": ["lucide-react"],
        },
      },
    },
  },
});
