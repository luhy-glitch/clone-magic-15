import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { build } from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outFile = path.resolve(rootDir, ".sitemap-tmp.mjs");

// Buntlar din TS-konfiguration
await build({
  entryPoints: [path.resolve(rootDir, "src/config/sitemapRoutes.ts")],
  bundle: true,
  format: "esm",
  platform: "neutral",
  outfile: outFile,
  logLevel: "warning",
});

const { SITE_URL, SITEMAP_ROUTES } = await import(`file://${outFile}`);
fs.unlinkSync(outFile);

const today = new Date().toISOString().split("T")[0];

const urls = SITEMAP_ROUTES.map(
  (r) =>
    `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

// Vi definierar båda platserna där filen ska sparas
const destinations = [
  path.resolve(rootDir, "public/sitemap.xml"),
  path.resolve(rootDir, "dist/sitemap.xml")
];

destinations.forEach(dest => {
  fs.writeFileSync(dest, xml, "utf-8");
  console.log(`✅ Sitemap uppdaterad: ${dest}`);
});

console.log(`🚀 Totalt ${SITEMAP_ROUTES.length} URL:er inlagda med dagens datum (${today}).`);
