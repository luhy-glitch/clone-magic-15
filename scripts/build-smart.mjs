import { execSync } from 'child_process';

if (process.env.VERCEL) {
  console.log('🚀 VERCEL UPPTÄCKT! Stoppar bygget för att bevara SEO-filerna från din Mac.');
  process.exit(0);
} else {
  console.log('🖥️ LOKALT BYGGE! Startar Vite och Playwright...');
  execSync('vite build && node scripts/render-browser.mjs && node inject-meta.js && node scripts/generate-sitemap.mjs', { stdio: 'inherit' });
}
