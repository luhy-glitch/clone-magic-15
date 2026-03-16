import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const serverOutFile = path.resolve(rootDir, "dist-server", "entry-server.mjs");

const { build } = await import("esbuild");

await build({
  entryPoints: [path.resolve(rootDir, "src/entry-server.tsx")],
  bundle: true,
  format: "esm",
  platform: "browser",
  outfile: serverOutFile,
  jsx: "automatic",
  jsxImportSource: "react",
  alias: { "@": path.resolve(rootDir, "src") },
  external: ["@supabase/supabase-js", "sonner", "stream", "http", "https", "zlib", "util", "url", "crypto"],
  define: {
    "window": "globalThis",
    "document": "globalThis.__document__",
    "localStorage": "globalThis.__localStorage__",
  },
  logLevel: "warning",
});

const g = globalThis;
g.__document__ = { getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], createElement: () => ({ setAttribute: () => {}, style: {} }), cookie: "", addEventListener: () => {}, removeEventListener: () => {} };
g.__localStorage__ = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
if (!g.navigator) g.navigator = { userAgent: "" };
if (!g.matchMedia) g.matchMedia = () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} });
if (!g.addEventListener) g.addEventListener = () => {};
if (!g.removeEventListener) g.removeEventListener = () => {};
if (!g.innerWidth) g.innerWidth = 1024;

const { render, getPageTitle, getPageDescription } = await import(pathToFileURL(serverOutFile).href);

const templatePath = path.resolve(distDir, "index.html");
const rawTemplate = fs.readFileSync(templatePath, "utf-8");
const cleanedRaw = rawTemplate.replace(/<link rel="canonical"[^>]*\/?>\n?/g, "");

let template = cleanedRaw.replace(/<link\b[^>]*?href=["']([^"']*\.css[^"']*)["'][^>]*>/gi, (linkTag, cssHref) => {
  const actualHref = cssHref.startsWith("/") ? cssHref.slice(1) : cssHref;
  const cssFilePath = path.resolve(distDir, actualHref);
  if (fs.existsSync(cssFilePath)) {
    const cssContent = fs.readFileSync(cssFilePath, "utf-8");
    return `<style>${cssContent}</style>`;
  }
  return linkTag;
});
template = template.replace(/<noscript><link\b[^>]*\.css[^>]*><\/noscript>/gi, "");

const routes = [
  "/", "/om-mig", "/kontakt", "/integritetspolicy", "/case", "/gratis-seo-analys",
  "/tjanster/webbutveckling", "/tjanster/webbdesign", "/tjanster/seo-optimering",
  "/tjanster/wordpress-losningar", "/tjanster/underhall-support", "/tjanster/prestanda-optimering",
  "/tjanster/google-ads", "/tjanster/vad-kostar-en-hemsida-2026",
  "/blogg", "/blogg/oka-hemsidans-hastighet", "/blogg/lokal-seo-smaforetag", "/blogg/react-vs-wordpress",
  "/blogg/komplett-seo-guide-smaforetag", "/blogg/skapa-hemsida-foretag-guide",
  "/webbutveckling-vasteras", "/webbutveckling-enkoping", "/webbutveckling-eskilstuna",
  "/webbutveckling-arboga", "/webbutveckling-fagersta", "/webbutveckling-hallstahammar",
  "/webbutveckling-kungsor", "/webbutveckling-surahammar", "/webbutveckling-heby",
  "/webbutveckling-norberg", "/webbutveckling-skinnskatteberg", "/webbutveckling-uppsala",
  "/webbutveckling-orebro", "/seo-koping", "/hemsidor-sala",
  "/hemsidor-bygg-hantverkare", "/digital-marknadsforing-butiker", "/restauranger-sala", "/frisor-koping",
  "/hemsidor-restaurang", "/hemsidor-redovisning", "/hemsidor-ehandel",
];

console.log("\n🔄 Pre-rendering static pages...");

for (const route of routes) {
  const appHtml = render(route);
  const pageTitle = getPageTitle(route);
  const pageDescription = getPageDescription(route);
  const canonicalUrl = `https://www.lrhkonsult.se${route === "/" ? "" : route}`;

  let html = template.replace(
    '<title>Webbutveckling &amp; SEO i V\u00e4stmanland | LRH Konsult</title>',
    `<title>${pageTitle}</title>`
  );
  if (html === template) {
    html = template.replace(
      '<title>Webbutveckling & SEO i Västmanland | LRH Konsult</title>',
      `<title>${pageTitle}</title>`
    );
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  html = html.replace(/property="og:title" content="[^"]*"/, `property="og:title" content="${pageTitle}"`);
  html = html.replace(/property="og:description" content="[^"]*"/, `property="og:description" content="${pageDescription}"`);
  html = html.replace(/property="og:url" content="[^"]*"/, `property="og:url" content="${canonicalUrl}"`);
  html = html.replace(/name="description" content="[^"]*"/, `name="description" content="${pageDescription}"`);
  html = html.replace(/<link rel="canonical"[^>]*\/?>/g, '');
  html = html.replace('\n  </head>', `\n  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);

  const filePath = path.join(distDir, route === "/" ? "index.html" : `${route}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`  ✅ ${route}`);
}

fs.rmSync(path.resolve(rootDir, "dist-server"), { recursive: true, force: true });
console.log("✅ Static site generation complete!\n");