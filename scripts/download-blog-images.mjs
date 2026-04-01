#!/usr/bin/env node
/**
 * Laddar ner alla bloggbilder från Supabase Storage till public/blog-images/
 * Kör: npm run download-blog-images
 */
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, basename } from 'path';

const BLOG_JSON = 'src/data/blogPosts.json';
const OUTPUT_DIR = 'public/blog-images';
const SUPABASE_PREFIX = 'https://egantzcnrlrkjccstmpw.supabase.co/storage/v1/object/public/blog-images/';

async function main() {
  const posts = JSON.parse(readFileSync(BLOG_JSON, 'utf-8'));

  // Collect all unique Supabase URLs from image_url and content
  const urls = new Set();
  for (const post of posts) {
    if (post.image_url && post.image_url.startsWith(SUPABASE_PREFIX)) {
      urls.add(post.image_url);
    }
    // Also check content for inline images
    const matches = (post.content || '').match(new RegExp(SUPABASE_PREFIX.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^)\\s"]+', 'g'));
    if (matches) matches.forEach(u => urls.add(u));
  }

  if (urls.size === 0) {
    console.log('Inga Supabase-URL:er hittades. Bilderna är redan migrerade!');
    return;
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Hittade ${urls.size} bilder att ladda ner...\n`);

  let ok = 0, fail = 0;
  for (const url of urls) {
    const filename = basename(new URL(url).pathname);
    const dest = join(OUTPUT_DIR, filename);

    if (existsSync(dest)) {
      console.log(`⏭  Finns redan: ${filename}`);
      ok++;
      continue;
    }

    try {
      console.log(`⬇  Laddar ner: ${filename}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      writeFileSync(dest, buf);
      console.log(`✅ Sparad: ${dest} (${(buf.length / 1024).toFixed(0)} KB)`);
      ok++;
    } catch (err) {
      console.error(`❌ Misslyckades: ${filename} – ${err.message}`);
      fail++;
    }
  }

  console.log(`\nKlart! ${ok} lyckades, ${fail} misslyckades.`);
}

main().catch(console.error);
