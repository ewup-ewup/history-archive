/**
 * scripts/build-icons.js
 * favicon.svg / icon-maskable.svg → PWA PNG 아이콘 생성.
 *   - icon-192.png, icon-512.png         (any purpose, 라운드 favicon)
 *   - icon-maskable-512.png              (maskable, 풀블리드)
 *   - apple-touch-icon-180.png           (iOS 홈 화면)
 *
 * @resvg/resvg-js (WASM, 네이티브 의존성 없음). 실행: npm run build-icons
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "..", "public");

function render(svgFile, size, outFile) {
  const svg = readFileSync(resolve(pub, svgFile), "utf-8");
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: size }, background: "transparent" });
  const png = resvg.render().asPng();
  writeFileSync(resolve(pub, outFile), png);
  console.log(`✓ ${outFile} (${size}px, ${(png.length / 1024).toFixed(1)} kB)`);
}

render("favicon.svg", 192, "icon-192.png");
render("favicon.svg", 512, "icon-512.png");
render("icon-maskable.svg", 512, "icon-maskable-512.png");
render("favicon.svg", 180, "apple-touch-icon-180.png");
