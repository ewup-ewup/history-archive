/**
 * scripts/build-og.js
 * public/og-image.svg → public/og-image.png 변환 (1200×630).
 *
 * 트위터/X 등 SVG OG를 받지 않는 플랫폼 호환용.
 * @resvg/resvg-js는 WASM 기반이라 네이티브 의존성 없이 빌드 환경 어디서나 작동.
 *
 * 실행: `npm run build-og`
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const svgPath = resolve(root, "public/og-image.svg");
const pngPath = resolve(root, "public/og-image.png");

const svg = readFileSync(svgPath, "utf-8");

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  // Pretendard을 시스템에 깔지 않아도 텍스트가 깨지지 않게, 한국어 가능한 폴백 폰트들 안내.
  // 빌드 환경에 없는 폰트는 자동으로 substitute됨.
  font: {
    fontFiles: [],
    loadSystemFonts: true,
    defaultFontFamily: "Apple SD Gothic Neo",
  },
  background: "transparent",
});

const png = resvg.render().asPng();
writeFileSync(pngPath, png);

const sizeKB = (png.length / 1024).toFixed(1);
console.log(`✓ Generated ${pngPath} (${sizeKB} kB)`);
