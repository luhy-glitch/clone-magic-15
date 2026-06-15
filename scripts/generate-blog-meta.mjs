// Genererar src/data/blogPostsMeta.json = all bloggdata UTAN `content`, plus en
// förberäknad `readingMinutes`. Blogg-listan + relaterade artiklar använder denna
// lätta fil istället för hela blogPosts.json (där content är ~84% av storleken),
// så blogg-fliken slipper ladda+parsa alla artiklars brödtext.
// Körs FÖRST i build-smart.mjs (måste finnas innan vite build).
// Kör manuellt: node scripts/generate-blog-meta.mjs
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src/data/blogPosts.json");
const OUT = path.join(ROOT, "src/data/blogPostsMeta.json");

const posts = JSON.parse(readFileSync(SRC, "utf8"));
const meta = posts.map(({ content, ...rest }) => {
  const text = Array.isArray(content) ? content.join(" ") : content || "";
  const words = text.split(/\s+/).filter(Boolean).length;
  return { ...rest, readingMinutes: Math.max(1, Math.ceil(words / 200)) };
});

writeFileSync(OUT, JSON.stringify(meta, null, 2) + "\n");
const kb = (Buffer.byteLength(JSON.stringify(meta)) / 1024).toFixed(0);
console.log(`blogPostsMeta.json: ${meta.length} inlägg utan content (~${kb} KB).`);
