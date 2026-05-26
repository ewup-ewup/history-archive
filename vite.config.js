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
  },
});
