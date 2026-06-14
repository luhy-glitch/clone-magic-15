import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { staticRoutes } from './static-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(__dirname, '../dist');

const SITE_URL = 'https://www.lrhkonsult.se';
const TODAY = new Date().toISOString().split('T')[0];

let blogPosts = [];
// Real per-post lastmod (updated_at || date) so Google gets accurate freshness
// signals instead of "today" on every build.
const lastmodByRoute = {};
const blogDataPath = path.resolve(rootDir, "src/data/blogPosts.json");
if (fs.existsSync(blogDataPath)) {
  const posts = JSON.parse(fs.readFileSync(blogDataPath, "utf-8"));
  // Only published posts belong in the sitemap. Future scheduled_date posts are
  // NOT prerendered (see render-browser.mjs), so including them here would put
  // URLs with no static HTML in the sitemap → 404 / 4XX-in-sitemap crawl errors.
  blogPosts = posts
    .filter(p => !p.scheduled_date || p.scheduled_date <= TODAY)
    .map(p => {
      const route = `/blogg/${p.slug}`;
      lastmodByRoute[route] = (p.updated_at || p.date || TODAY).slice(0, 10);
      return p.slug;
    });
}

const allRoutes = [...staticRoutes, ...blogPosts.map(p => `/blogg/${p}`)];

// Uteslut noindex-sidor ur sitemap (en sitemap ska bara lista indexerbara URL:er –
// annars motsägelsefull signal). Läser den prerendrade HTML:en så alla noindex-sidor
// (de 6 minsta stadssidorna, /case och ev. framtida) exkluderas automatiskt.
const isNoindex = (route) => {
  const file = route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route.replace(/^\//, ""), "index.html");
  try { return /name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(fs.readFileSync(file, "utf8")); }
  catch { return false; }
};
const indexableRoutes = allRoutes.filter((r) => !isNoindex(r));
const excludedCount = allRoutes.length - indexableRoutes.length;

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const route of indexableRoutes) {
  const priority = route === "/" ? "1.0" : route.startsWith("/blogg") ? "0.8" : "0.9";
  const url = `${SITE_URL}${route === "/" ? "" : route}`;
  const lastmod = lastmodByRoute[route] || TODAY;
  sitemapContent += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}
sitemapContent += `</urlset>`;

const xslContent = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
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
          details { margin-bottom: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
          summary { padding: 1rem; background: #f8fafc; font-weight: 600; font-size: 16px; cursor: pointer; outline: none; list-style: none; }
          summary::-webkit-details-marker { display: none; }
          summary:hover { background: #f1f5f9; }
          details[open] summary { border-bottom: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🗺️ LRH Konsult Sitemap</h1>
          <p class="desc">Denna sitemap används av sökmotorer, men visas här i mappar för enkel överblick. Totalt <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> sidor.</p>
          
          <details open="open">
            <summary>📁 Huvudsidor</summary>
            <table>
              <thead><tr><th>URL</th><th>Prioritet</th><th>Uppdaterad</th></tr></thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url[
                  sitemap:loc = 'https://www.lrhkonsult.se' or 
                  sitemap:loc = 'https://www.lrhkonsult.se/blogg' or 
                  sitemap:loc = 'https://www.lrhkonsult.se/om-mig' or 
                  sitemap:loc = 'https://www.lrhkonsult.se/kontakt' or 
                  sitemap:loc = 'https://www.lrhkonsult.se/integritetspolicy' or 
                  sitemap:loc = 'https://www.lrhkonsult.se/case' or 
                  sitemap:loc = 'https://www.lrhkonsult.se/gratis-seo-analys'
                ]">
                  <xsl:sort select="sitemap:loc"/>
                  <tr>
                    <td><a href="{sitemap:loc}" target="_blank"><xsl:value-of select="sitemap:loc"/></a></td>
                    <td><span class="badge"><xsl:value-of select="sitemap:priority"/></span></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </details>

          <details>
            <summary>📁 Tjänster</summary>
            <table>
              <thead><tr><th>URL</th><th>Prioritet</th><th>Uppdaterad</th></tr></thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url[contains(sitemap:loc, '/tjanster/')]">
                  <xsl:sort select="sitemap:loc"/>
                  <tr>
                    <td><a href="{sitemap:loc}" target="_blank"><xsl:value-of select="sitemap:loc"/></a></td>
                    <td><span class="badge"><xsl:value-of select="sitemap:priority"/></span></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </details>

          <details>
            <summary>📁 Lokala Landningssidor (Städer)</summary>
            <table>
              <thead><tr><th>URL</th><th>Prioritet</th><th>Uppdaterad</th></tr></thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url[
                  not(sitemap:loc = 'https://www.lrhkonsult.se') and 
                  not(sitemap:loc = 'https://www.lrhkonsult.se/blogg') and 
                  not(sitemap:loc = 'https://www.lrhkonsult.se/om-mig') and 
                  not(sitemap:loc = 'https://www.lrhkonsult.se/kontakt') and 
                  not(sitemap:loc = 'https://www.lrhkonsult.se/integritetspolicy') and 
                  not(sitemap:loc = 'https://www.lrhkonsult.se/case') and 
                  not(sitemap:loc = 'https://www.lrhkonsult.se/gratis-seo-analys') and 
                  not(contains(sitemap:loc, '/tjanster/')) and 
                  not(contains(sitemap:loc, '/blogg/'))
                ]">
                  <xsl:sort select="sitemap:loc"/>
                  <tr>
                    <td><a href="{sitemap:loc}" target="_blank"><xsl:value-of select="sitemap:loc"/></a></td>
                    <td><span class="badge"><xsl:value-of select="sitemap:priority"/></span></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </details>

          <details>
            <summary>📁 Blogginlägg</summary>
            <table>
              <thead><tr><th>URL</th><th>Prioritet</th><th>Uppdaterad</th></tr></thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url[contains(sitemap:loc, '/blogg/') and sitemap:loc != 'https://www.lrhkonsult.se/blogg']">
                  <xsl:sort select="sitemap:loc"/>
                  <tr>
                    <td><a href="{sitemap:loc}" target="_blank"><xsl:value-of select="sitemap:loc"/></a></td>
                    <td><span class="badge"><xsl:value-of select="sitemap:priority"/></span></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </details>

        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
fs.writeFileSync(path.join(distDir, 'sitemap.xsl'), xslContent);

console.log(`✅ Sitemap genererad (${indexableRoutes.length} URL:er, ${excludedCount} noindex-sidor exkluderade).`);
