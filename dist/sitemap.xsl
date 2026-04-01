<?xml version="1.0" encoding="UTF-8"?>
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
          .container { max-width: 1000px; margin: 0 auto; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
          h1 { color: #0f172a; margin-top: 0; font-size: 24px; }
          .desc { color: #64748b; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; }
          th { text-align: left; padding: 12px; background: #f1f5f9; color: #475569; font-weight: 600; border-bottom: 2px solid #cbd5e1; }
          td { padding: 12px; border-bottom: 1px solid #e2e8f0; }
          tr:hover { background-color: #f8fafc; }
          a { color: #2563eb; text-decoration: none; font-weight: 500; }
          a:hover { text-decoration: underline; color: #1d4ed8; }
          .badge { background: #e2e8f0; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600; color: #475569; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🗺️ LRH Konsult Sitemap</h1>
          <p class="desc">Denna sitemap används främst av sökmotorer, men visas här i ett läsbart format. Totalt hittades <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> sidor.</p>
          <table>
            <thead>
              <tr>
                <th>URL (Klicka för att öppna)</th>
                <th>Prioritet</th>
                <th>Senast uppdaterad</th>
              </tr>
            </thead>
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
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>