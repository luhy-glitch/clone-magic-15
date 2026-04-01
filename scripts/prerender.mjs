import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const serverOutFile = path.resolve(rootDir, "dist-server", "entry-server.mjs");

const { build } = await import("esbuild");

// --- MODERN MOCK FÖR NODE 20+ & VERCEL ---
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: "https://www.lrhkonsult.se",
  pretendToBeVisual: true
});

const spreadMock = (obj, target) => {
  for (const key of Object.getOwnPropertyNames(obj)) {
    if (key !== 'constructor' && key !== 'undefined') {
      try {
        Object.defineProperty(target, key, {
          value: obj[key],
          writable: true,
          configurable: true
        });
      } catch (e) {}
    }
  }
};

// Vi tvingar in DOM-objekten i globalThis på ett säkert sätt
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.Node = dom.window.Node;
globalThis.Element = dom.window.Element;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {} };

// Fix för navigator (skrivskyddad i Node 20+)
Object.defineProperty(globalThis, 'navigator', {
  value: dom.window.navigator,
  writable: true,
  configurable: true
});

// Fix för location
Object.defineProperty(globalThis, 'location', {
  value: dom.window.location,
  writable: true,
  configurable: true
});

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
  define: {
    "import.meta.env.MODE": JSON.stringify("production"),
    "process.env.NODE_ENV": JSON.stringify("production")
  },
  logLevel: "error",
});

const { render, getPageTitle } = await import(pathToFileURL(serverOutFile).href + '?t=' + Date.now());
const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

const routes = ["/", "/om-mig", "/kontakt", "/integritetspolicy", "/webbutveckling-vasteras", "/webbutveckling-enkoping", "/webbutveckling-eskilstuna", "/webbutveckling-arboga", "/webbutveckling-fagersta", "/webbutveckling-hallstahammar", "/webbutveckling-kungsor", "/webbutveckling-surahammar", "/webbutveckling-heby", "/webbutveckling-norberg", "/webbutveckling-skinnskatteberg", "/webbutveckling-uppsala", "/webbutveckling-orebro", "/seo-koping", "/hemsidor-sala", "/hemsidor-bygg-hantverkare", "/digital-marknadsforing-butiker", "/restauranger-sala", "/frisor-koping", "/hemsidor-restaurang", "/hemsidor-redovisning", "/hemsidor-ehandel"];

console.log(`🚀 Genererar HTML för ${routes.length} sidor...`);

for (const route of routes) {
  try {
    // Vi renderar två gånger för att hantera de 193 lazy-importerna
    render(route); 
    await new Promise(r => setTimeout(r, 10)); // Ge JSDOM ett ögonblick
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
console.log("\n✨ SEO-Rendering komplett!");
