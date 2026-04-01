import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const serverOutFile = path.resolve(rootDir, "dist-server", "entry-server.mjs");

const { build } = await import("esbuild");

// Mocka Node v24 miljö för att slippa TypeError
const g = globalThis;
const noop = () => ({});
const mockDoc = { createElement: () => ({ setAttribute: noop, style: {} }), querySelector: () => null, getElementsByTagName: () => [{ appendChild: noop }] };
Object.defineProperty(g, 'window', { value: g, writable: true });
Object.defineProperty(g, 'document', { value: mockDoc, writable: true });
Object.defineProperty(g, 'navigator', { value: { userAgent: "node" }, writable: true, configurable: true });
Object.defineProperty(g, 'location', { value: { href: "https://www.lrhkonsult.se", pathname: "/" }, writable: true });
Object.defineProperty(g, 'localStorage', { value: { getItem: () => null, setItem: noop }, writable: true });

console.log("📦 Bygger server-bundle...");

await build({
  entryPoints: [path.resolve(rootDir, "src/entry-server.tsx")],
  bundle: true, format: "esm", platform: "node", outfile: serverOutFile,
  jsx: "automatic", jsxImportSource: "react",
  alias: { "@": path.resolve(rootDir, "src") },
  external: ["@supabase/supabase-js", "sonner"],
  define: { "import.meta.env.MODE": JSON.stringify("production") },
  logLevel: "error",
});

const { render, getPageTitle, getPageDescription } = await import(pathToFileURL(serverOutFile).href + '?t=' + Date.now());
const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

const staticRoutes = ["/", "/om-mig", "/kontakt", "/integritetspolicy", "/webbutveckling-vasteras", "/seo-koping", "/hemsidor-sala", "/webbutveckling-enkoping", "/webbutveckling-eskilstuna", "/webbutveckling-arboga", "/webbutveckling-fagersta", "/webbutveckling-hallstahammar", "/webbutveckling-kungsor", "/webbutveckling-surahammar", "/webbutveckling-heby", "/webbutveckling-norberg", "/webbutveckling-skinnskatteberg", "/webbutveckling-uppsala", "/webbutveckling-orebro", "/hemsidor-bygg-hantverkare", "/digital-marknadsforing-butiker", "/restauranger-sala", "/frisor-koping", "/hemsidor-restaurang", "/hemsidor-redovisning", "/hemsidor-ehandel"];
const blogPosts = ["oka-hemsidans-hastighet", "lokal-seo-smaforetag", "react-vs-wordpress", "komplett-seo-guide-smaforetag", "skapa-hemsida-foretag-guide", "framtidsakra-foretag-react-malardalen", "lokal-sokmotoroptimering-vastmanland-2026", "digital-tillvaxt-smaforetag-malardalen", "dominera-google-enkoping", "webbutveckling-enkoping-partner", "komplett-guide-digital-narvaro-malardalen", "webbutveckling-eskilstuna-guide", "moderna-hemsidor-vastmanland", "seo-strategi-eskilstuna", "lokal-seo-tips-vastmanland", "frisor-koping-dominera-google", "digital-marknadsforing-cafeer", "webbdesign-advokatbyraer-vasteras", "bokningssystem-frisorer-vastmanland", "e-handel-butiker-sala", "restauranghemsida-online-meny-sala", "seo-byggforetag-malardalen", "hemsida-hantverkare-vasteras", "byggfirma-vasteras-fler-kunder", "restaurang-sala-snabb-hemsida", "hastighetsoptimering-foretag-sala", "wordpress-vs-react-vasteras", "oka-hemsidans-hastighet-koping", "hur-lang-tid-bygga-hemsida-vasteras", "pris-professionell-hemsida-2026", "minska-bounce-rate-vasteras", "core-web-vitals-vastmanland", "react-vs-wordpress-koping", "billig-vs-professionell-hemsida", "vad-kostar-hemsida-smaforetag-sala", "resan-till-100-pagespeed", "framtidssakra-din-digitala-narvaro-i-vastmanland", "effektiv-webbutveckling-ai-verktyg-vastmanland", "digital-synlighet-vastmanland-seo-ai", "framtidssakra-foretag-vastmanland-2026", "seo-vasteras"];

const allRoutes = [...staticRoutes, ...blogPosts.map(p => "/blogg/" + p)];

console.log("\n🔄 Prerendering av " + allRoutes.length + " sidor...");

for (const route of allRoutes) {
  try {
    // Vi renderar, väntar 20ms på att lazy-imports ska "sätta sig", och renderar igen
    render(route);
    await new Promise(r => setTimeout(r, 20));
    const appHtml = render(route);

    const html = template
      .replace(/<title>.*?<\/title>/, `<title>${getPageTitle(route)}</title>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const filePath = path.join(distDir, route === "/" ? "index.html" : `${route}.html`);
    if (!fs.existsSync(path.dirname(filePath))) fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
    console.log(`  ✅ ${route}`);
  } catch (err) {
    console.error(`  ❌ Fel på ${route}:`, err.message);
  }
}
console.log("\n🚀 Klart! Allt renderat.");
