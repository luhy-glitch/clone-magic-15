import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const serverOutFile = path.resolve(rootDir, "dist-server", "entry-server.mjs");

const { build } = await import("esbuild");

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: "https://www.lrhkonsult.se",
  pretendToBeVisual: true
});

globalThis.window = dom.window;
globalThis.document = dom.window.document;
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
Object.defineProperty(globalThis, 'location', { value: dom.window.location, configurable: true });
globalThis.Node = dom.window.Node;
globalThis.Element = dom.window.Element;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {} };

console.log("📦 Bygger renderings-motor för Vercel...");

await build({
  entryPoints: [path.resolve(rootDir, "src/entry-server.tsx")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: serverOutFile,
  jsx: "automatic",
  jsxImportSource: "react",
  alias: { "@": path.resolve(rootDir, "src") },
  external: ["@supabase/supabase-js"],
  banner: {
    js: `
      import { createRequire } from 'module';
      const require = createRequire(import.meta.url);
    `,
  },
  define: {
    "import.meta.env.MODE": JSON.stringify("production"),
    "process.env.NODE_ENV": JSON.stringify("production")
  },
  logLevel: "error",
});

const { render, getPageTitle } = await import(pathToFileURL(serverOutFile).href + '?t=' + Date.now());
const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

const routes = ["/", "/om-mig", "/kontakt", "/integritetspolicy", "/case", "/gratis-seo-analys", "/tjanster/webbutveckling", "/tjanster/webbdesign", "/tjanster/seo-optimering", "/tjanster/wordpress-losningar", "/tjanster/underhall-support", "/tjanster/prestanda-optimering", "/tjanster/google-ads", "/tjanster/vad-kostar-en-hemsida-2026", "/webbutveckling-vasteras", "/webbutveckling-enkoping", "/webbutveckling-eskilstuna", "/webbutveckling-arboga", "/webbutveckling-fagersta", "/webbutveckling-hallstahammar", "/webbutveckling-kungsor", "/webbutveckling-surahammar", "/webbutveckling-heby", "/webbutveckling-norberg", "/webbutveckling-skinnskatteberg", "/webbutveckling-uppsala", "/webbutveckling-orebro", "/seo-koping", "/hemsidor-sala", "/hemsidor-bygg-hantverkare", "/digital-marknadsforing-butiker", "/restauranger-sala", "/frisor-koping", "/hemsidor-restaurang", "/hemsidor-redovisning", "/hemsidor-ehandel"];
const blogPosts = ["oka-hemsidans-hastighet", "lokal-seo-smaforetag", "react-vs-wordpress", "komplett-seo-guide-smaforetag", "skapa-hemsida-foretag-guide", "framtidsakra-foretag-react-malardalen", "lokal-sokmotoroptimering-vastmanland-2026", "digital-tillvaxt-smaforetag-malardalen", "dominera-google-enkoping", "webbutveckling-enkoping-partner", "komplett-guide-digital-narvaro-malardalen", "webbutveckling-eskilstuna-guide", "moderna-hemsidor-vastmanland", "seo-strategi-eskilstuna", "lokal-seo-tips-vastmanland", "frisor-koping-dominera-google", "digital-marknadsforing-cafeer", "webbdesign-advokatbyraer-vasteras", "bokningssystem-frisorer-vastmanland", "e-handel-butiker-sala", "restauranghemsida-online-meny-sala", "seo-byggforetag-malardalen", "hemsida-hantverkare-vasteras", "byggfirma-vasteras-fler-kunder", "restaurang-sala-snabb-hemsida", "hastighetsoptimering-foretag-sala", "wordpress-vs-react-vasteras", "oka-hemsidans-hastighet-koping", "hur-lang-tid-bygga-hemsida-vasteras", "pris-professionell-hemsida-2026", "minska-bounce-rate-vasteras", "core-web-vitals-vastmanland", "react-vs-wordpress-koping", "billig-vs-professionell-hemsida", "vad-kostar-hemsida-smaforetag-sala", "resan-till-100-pagespeed", "framtidssakra-din-digitala-narvaro-i-vastmanland", "effektiv-webbutveckling-ai-verktyg-vastmanland", "digital-synlighet-vastmanland-seo-ai", "framtidssakra-foretag-vastmanland-2026", "seo-vasteras"];

const allRoutes = [...routes, ...blogPosts.map(p => `/blogg/${p}`)];

console.log(`🚀 Startar SEO-rendering av ${allRoutes.length} sidor...`);

for (const route of allRoutes) {
  try {
    render(route);
    await new Promise(r => setTimeout(r, 10));
    const appHtml = render(route);

    const html = template
      .replace(/<title>.*?<\/title>/, `<title>${getPageTitle(route)}</title>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Vercel fix: Spara både som .html och undermapp/index.html
    const filePath = path.join(distDir, route === "/" ? "index.html" : `${route}.html`);
    if (!fs.existsSync(path.dirname(filePath))) fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    if (route !== "/") {
      const folderPath = path.join(distDir, route);
      if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
      fs.writeFileSync(path.join(folderPath, "index.html"), html);
    }

    console.log(`  ✅ ${route}`);
  } catch (err) {
    console.error(`  ❌ Fel på ${route}:`, err.message);
  }
}
console.log("\n✨ SEO Rendering komplett!");
