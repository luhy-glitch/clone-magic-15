import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';
import { chromium } from 'playwright';
import { staticRoutes } from './static-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

let blogPosts = [];
const blogDataPath = path.resolve(__dirname, "../src/data/blogPosts.json");
if (fs.existsSync(blogDataPath)) {
  // Swedish local date (Europe/Stockholm, DST-safe). UTC would hide a post
  // scheduled for "today" until 02:00 CEST / 01:00 CET. sv-SE => YYYY-MM-DD.
  const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Stockholm' });
  const posts = JSON.parse(fs.readFileSync(blogDataPath, "utf-8"));
  blogPosts = posts.filter(p => !p.scheduled_date || p.scheduled_date <= today).map(p => p.slug);
}
const routes = [...staticRoutes, ...blogPosts.map(p => `/blogg/${p}`)];

async function renderPages() {
  console.log(`🚀 Startar Playwright SEO-rendering för ${routes.length} sidor...`);
  const server = await preview({ preview: { port: 4173 } });
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    try {
      await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      const html = await page.content();

      const filePath = path.join(distDir, route === "/" ? "index.html" : `${route}.html`);
      if (!fs.existsSync(path.dirname(filePath))) fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html);

      if (route !== "/") {
        const folderPath = path.join(distDir, route);
        if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
        fs.writeFileSync(path.join(folderPath, "index.html"), html);
      }
      console.log(`  ✅ Renderad: ${route}`);
    } catch (err) {
      console.error(`  ❌ Misslyckades med: ${route}`, err);
    }
  }
  await browser.close();
  server.httpServer.close();
  console.log("✨ Alla filer klara och sparade!");
}
renderPages();
