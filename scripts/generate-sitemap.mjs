import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { build } from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const outFile = path.resolve(rootDir, ".sitemap-tmp.mjs");

// Vi hämtar fortfarande din SITE_URL från configen för att det ska bli rätt domän
await build({
  entryPoints: [path.resolve(rootDir, "src/config/sitemapRoutes.ts")],
  bundle: true, format: "esm", platform: "neutral", outfile: outFile, logLevel: "warning",
});
const { SITE_URL } = await import(`file://${outFile}`);
fs.unlinkSync(outFile);

const today = new Date().toISOString().split("T")[0];

// Funktion för att hitta alla HTML-filer i dist-mappen
function getAllHtmlFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith(".html")) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const htmlFiles = getAllHtmlFiles(distDir);

const urls = htmlFiles
  .map(file => {
    // Gör om filstigen till en URL-vänlig länk
    let relativePath = path.relative(distDir, file)
      .replace(/index\.html$/, "") // Ta bort index.html i slutet
      .replace(/\.html$/, "")      // Ta bort .html
      .replace(/\/$/, "");         // Ta bort snedstreck i slutet

    return {
      path: relativePath.startsWith("/") ? relativePath : `/${relativePath}`,
      file: file
    };
  })
  .filter(item => !item.path.includes("404")) // Skippa 404-sidan
  .map(item => {
    // Sätt lite olika prioritet beroende på om det är startsidan eller undersidor
    const priority = item.path === "/" ? "1.0" : "0.8";
    return `  <url>\n    <loc>${SITE_URL}${item.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

const destinations = [
  path.resolve(rootDir, "public/sitemap.xml"),
  path.resolve(rootDir, "dist/sitemap.xml")
];

destinations.forEach(dest => {
  fs.writeFileSync(dest, xml, "utf-8");
  console.log(`✅ Smart sitemap uppdaterad: ${dest}`);
});

console.log(`🚀 Hittade och indexerade ${urls.length} sidor automatiskt!`);
