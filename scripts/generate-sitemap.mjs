import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { build } from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const outFile = path.resolve(rootDir, ".sitemap-tmp.mjs");

await build({
  entryPoints: [path.resolve(rootDir, "src/config/sitemapRoutes.ts")],
  bundle: true, format: "esm", platform: "neutral", outfile: outFile, logLevel: "warning",
});
const { SITE_URL } = await import(`file://${outFile}`);
fs.unlinkSync(outFile);

const today = new Date().toISOString().split("T")[0];

function getAllHtmlFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles);
    } else if (file.endsWith(".html")) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const htmlFiles = getAllHtmlFiles(distDir);
const uniquePaths = new Set();

const urls = htmlFiles
  .map(file => {
    let relativePath = path.relative(distDir, file)
      .replace(/index\.html$/, "") 
      .replace(/\.html$/, "")      
      .replace(/\/$/, "");         
    return relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
  })
  .filter(p => {
    if (p.includes("404") || uniquePaths.has(p)) return false;
    uniquePaths.add(p);
    return true;
  })
  .map(p => {
    const priority = p === "/" || p === "" ? "1.0" : "0.8";
    return `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

[path.resolve(rootDir, "public/sitemap.xml"), path.resolve(rootDir, "dist/sitemap.xml")].forEach(dest => {
  fs.writeFileSync(dest, xml, "utf-8");
});
console.log(`🚀 Sitemappen är städad! Hittade ${urls.length} unika sidor.`);
