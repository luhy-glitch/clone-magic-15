import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";
import { createRequire } from "module";
import { staticRoutes } from "./static-routes.mjs";

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

await build({
  entryPoints: [path.resolve(rootDir, "src/entry-server.tsx")],
  bundle: true, format: "esm", platform: "node", outfile: serverOutFile,
  jsx: "automatic", jsxImportSource: "react",
  alias: { "@": path.resolve(rootDir, "src") },
  external: ["@supabase/supabase-js"],
  banner: { js: "import { createRequire } from 'module';\nconst require = createRequire(import.meta.url);" },
  define: { "import.meta.env.MODE": JSON.stringify("production"), "process.env.NODE_ENV": JSON.stringify("production") },
  logLevel: "error",
});

const { render, getPageTitle } = await import(pathToFileURL(serverOutFile).href + '?t=' + Date.now());
const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

// LÄS IN BLOGGINLÄGG DYNAMISKT
let blogPosts = [];
const blogDataPath = path.resolve(rootDir, "src/data/blogPosts.json");
if (fs.existsSync(blogDataPath)) {
  const posts = JSON.parse(fs.readFileSync(blogDataPath, "utf-8"));
  blogPosts = posts.map(p => p.slug);
}

const allRoutes = [...staticRoutes, ...blogPosts.map(p => `/blogg/${p}`)];

console.log(`🚀 Startar SEO-rendering av ${allRoutes.length} sidor...`);

for (const route of allRoutes) {
  try {
    render(route); await new Promise(r => setTimeout(r, 10));
    const appHtml = render(route);
    const html = template.replace(/<title>.*?<\/title>/, `<title>${getPageTitle(route)}</title>`).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const filePath = path.join(distDir, route === "/" ? "index.html" : `${route}.html`);
    if (!fs.existsSync(path.dirname(filePath))) fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    if (route !== "/") {
      const folderPath = path.join(distDir, route);
      if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
      fs.writeFileSync(path.join(folderPath, "index.html"), html);
    }
  } catch (err) { console.error(`  ❌ Fel på ${route}:`, err.message); }
}
console.log("✨ SEO Rendering komplett!");
