import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// Vår fasta lista med alla sidor
const staticRoutes = [
  "/", "/om-mig", "/kontakt", "/integritetspolicy", "/webbutveckling-vasteras", 
  "/webbutveckling-enkoping", "/webbutveckling-eskilstuna", "/webbutveckling-arboga", 
  "/webbutveckling-fagersta", "/webbutveckling-hallstahammar", "/webbutveckling-kungsor", 
  "/webbutveckling-surahammar", "/webbutveckling-heby", "/webbutveckling-norberg", 
  "/webbutveckling-skinnskatteberg", "/webbutveckling-uppsala", "/webbutveckling-orebro", 
  "/seo-koping", "/hemsidor-sala", "/hemsidor-bygg-hantverkare", 
  "/digital-marknadsforing-butiker", "/restauranger-sala", "/frisor-koping", 
  "/hemsidor-restaurang", "/hemsidor-redovisning", "/hemsidor-ehandel"
];

const blogPosts = [
  "oka-hemsidans-hastighet", "lokal-seo-smaforetag", "react-vs-wordpress", 
  "komplett-seo-guide-smaforetag", "skapa-hemsida-foretag-guide", 
  "framtidsakra-foretag-react-malardalen", "lokal-sokmotoroptimering-vastmanland-2026", 
  "digital-tillvaxt-smaforetag-malardalen", "dominera-google-enkoping", 
  "webbutveckling-enkoping-partner", "komplett-guide-digital-narvaro-malardalen", 
  "webbutveckling-eskilstuna-guide", "moderna-hemsidor-vastmanland", 
  "seo-strategi-eskilstuna", "lokal-seo-tips-vastmanland", 
  "frisor-koping-dominera-google", "digital-marknadsforing-cafeer", 
  "webbdesign-advokatbyraer-vasteras", "bokningssystem-frisorer-vastmanland", 
  "e-handel-butiker-sala", "restauranghemsida-online-meny-sala", 
  "seo-byggforetag-malardalen", "hemsida-hantverkare-vasteras", 
  "byggfirma-vasteras-fler-kunder", "restaurang-sala-snabb-hemsida", 
  "hastighetsoptimering-foretag-sala", "wordpress-vs-react-vasteras", 
  "oka-hemsidans-hastighet-koping", "hur-lang-tid-bygga-hemsida-vasteras", 
  "pris-professionell-hemsida-2026", "minska-bounce-rate-vasteras", 
  "core-web-vitals-vastmanland", "react-vs-wordpress-koping", 
  "billig-vs-professionell-hemsida", "vad-kostar-hemsida-smaforetag-sala", 
  "resan-till-100-pagespeed", "framtidssakra-din-digitala-narvaro-i-vastmanland", 
  "effektiv-webbutveckling-ai-verktyg-vastmanland", "digital-synlighet-vastmanland-seo-ai", 
  "framtidssakra-foretag-vastmanland-2026", "seo-vasteras"
];

const allRoutes = [...staticRoutes, ...blogPosts.map(p => `/blogg/${p}`)];
const SITE_URL = 'https://www.lrhkonsult.se';
const TODAY = new Date().toISOString().split('T')[0];

console.log(`🗺️  Genererar sitemap för ${allRoutes.length} sidor...`);

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const route of allRoutes) {
  // Ge startsidan högst prioritet (1.0), städer 0.9, och bloggar 0.8
  const priority = route === "/" ? "1.0" : route.startsWith("/blogg") ? "0.8" : "0.9";
  const url = `${SITE_URL}${route === "/" ? "" : route}`;
  
  sitemapContent += `  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

sitemapContent += `</urlset>`;

const sitemapPath = path.join(distDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent);

console.log(`✅ Sitemap genererad framgångsrikt i ${sitemapPath}`);
