import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(__dirname, '../dist');

const staticRoutes = ["/", "/blogg", "/om-mig", "/kontakt", "/integritetspolicy", "/case", "/gratis-seo-analys", "/tjanster/webbutveckling", "/tjanster/webbdesign", "/tjanster/seo-optimering", "/tjanster/wordpress-losningar", "/tjanster/underhall-support", "/tjanster/prestanda-optimering", "/tjanster/google-ads", "/tjanster/vad-kostar-en-hemsida-2026", "/webbutveckling-vasteras", "/webbutveckling-enkoping", "/webbutveckling-eskilstuna", "/webbutveckling-arboga", "/webbutveckling-fagersta", "/webbutveckling-hallstahammar", "/webbutveckling-kungsor", "/webbutveckling-surahammar", "/webbutveckling-heby", "/webbutveckling-norberg", "/webbutveckling-skinnskatteberg", "/webbutveckling-uppsala", "/webbutveckling-orebro", "/seo-koping", "/hemsidor-sala", "/hemsidor-bygg-hantverkare", "/digital-marknadsforing-butiker", "/restauranger-sala", "/frisor-koping", "/hemsidor-restaurang", "/hemsidor-redovisning", "/hemsidor-ehandel"];

// Läs in blogginlägg dynamiskt
let blogPosts = [];
const blogDataPath = path.resolve(rootDir, "src/data/blogPosts.json");
if (fs.existsSync(blogDataPath)) {
  const posts = JSON.parse(fs.readFileSync(blogDataPath, "utf-8"));
  blogPosts = posts.map(p => p.slug);
}

const allRoutes = [...staticRoutes, ...blogPosts.map(p => `/blogg/${p}`)];
const SITE_URL = 'https://www.lrhkonsult.se';
const TODAY = new Date().toISOString().split('T')[0];

// 1. Skapa XML Sitemappen
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const route of allRoutes) {
  const priority = route === "/" ? "1.0" : route.startsWith("/blogg") ? "0.8" : "0.9";
  const url = `${SITE_URL}${route === "/" ? "" : route}`;
  sitemapContent += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}
sitemapContent += `</urlset>`;

// 2. Skapa den nya avancerade XSL-mallen med grupperings-funktion
const xslContent = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap - LRH Konsult</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px; color: #333; margin: 0; padding: 2rem; background: #f8fafc; }
          .container { max-width: 1000px; margin: 0 auto; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
          h1 { color: #0f172a; margin-top: 0; font-size: 24px; }
          .desc { color: #64748b; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; }
          th { text-align: left; padding: 12px; background: #f1f5f9; color: #475569; font-weight: 600; border-bottom: 2px solid #cbd5e1; }
          td { padding: 12px; border-bottom: 1px solid #e2e8f0; }
          tr:hover { background-color: #f8fafc; }
          a { color: #2563eb; text-decoration: none; font-weight: 500; }
          a:hover { text-decoration: underline; color: #1d4ed8; }
          .badge { background: #e2e8f0; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600; color: #475569; }
          
          /* Ny styling för mappar */
          details { margin-bottom: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
          summary { padding: 1rem; background: #f8fafc; font-weight: 600; font-size: 16px; cursor: pointer; outline: none; list-style: none; display: flex; align-items: center; justify-content: space-between;}
          summary:hover { background: #f1f5f9; }
          summary::after { content: '▼'; font-size: 12px; color: #64748b; transition: transform 0.2s;}
          details[open] summary { border-bottom: 1px solid #e2e8f0; }
          details[open] summary::after { transform: rotate(180deg); }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🗺️ LRH Konsult Sitemap</h1>
          <p class="desc">Denna sitemap används främst av sökmotorer. Sidorna är uppdelade i kategorier för enkel överblick. Totalt <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> sidor.</p>
          
          <div id="grouped-sitemap"></div>

          <table id="raw-data" style="display:none;">
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><a href="{sitemap:loc}" target="_blank"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td><span class="badge"><xsl:value-of select="sitemap:priority"/></span></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>

        <script>
          document.addEventListener("DOMContentLoaded", function() {
            const rows = Array.from(document.querySelectorAll("#raw-data tbody tr"));
            const container = document.getElementById("grouped-sitemap");
            
            const groups = {
              "Huvudsidor": [],
              "Tjänster": [],
              "Lokala Landningssidor": [],
              "Blogginlägg": []
            };

            rows.forEach(row => {
              const url = row.querySelector("a").innerText;
              
              if (url.includes("/blogg") &#38;&#38; url !== "https://www.lrhkonsult.se/blogg") {
                groups["Blogginlägg"].push(row.outerHTML);
              } else if (url.includes("/tjanster/")) {
                groups["Tjänster"].push(row.outerHTML);
              } else if (url.match(/\\/(webbutveckling|hemsidor|seo|restauranger|frisor|digital-marknadsforing)-/)) {
                groups["Lokala Landningssidor"].push(row.outerHTML);
              } else {
                groups["Huvudsidor"].push(row.outerHTML);
              }
            });

            let newHTML = "";
            for (const [groupName, htmlRows] of Object.entries(groups)) {
              if (htmlRows.length === 0) continue;
              
              // Huvudsidor är öppen som standard, resten stängda
              const isOpen = groupName === "Huvudsidor" ? "open" : "";
              
              newHTML += \`
                <details \${isOpen}>
                  <summary>
                    <span>📁 \${groupName} (\${htmlRows.length} sidor)</span>
                  </summary>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>URL (Klicka för att öppna)</th>
                          <th>Prioritet</th>
                          <th>Senast uppdaterad</th>
                        </tr>
                      </thead>
                      <tbody>
                        \${htmlRows.join('')}
                      </tbody>
                    </table>
                  </div>
                </details>
              \`;
            }
            container.innerHTML = newHTML;
          });
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
fs.writeFileSync(path.join(distDir, 'sitemap.xsl'), xslContent);

console.log(`✅ Sitemap och stilmall genererad framgångsrikt med ${allRoutes.length} sidor.`);
