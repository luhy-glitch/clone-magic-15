<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - LRH Konsult</title>
        <style type="text/css">
          body { font-family: sans-serif; font-size: 14px; color: #333; margin: 0; padding: 50px; background: #f8f9fa; }
          table { border-collapse: collapse; width: 100%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          th { background: #eab308; color: #fff; text-align: left; padding: 12px; }
          td { padding: 12px; border-bottom: 1px solid #eee; }
          tr:hover { background: #fffdf5; }
          a { color: #ca8a04; text-decoration: none; }
          h1 { color: #111; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p>Denna sitemap innehåller <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URL:er.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Prioritet</th>
            <th>Ändrad</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:priority"/></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
