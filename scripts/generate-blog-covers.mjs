// Genererar branded omslagsbilder (1200×630) för blogginlägg som saknar egen bild.
// Renderar en HTML-mall per inlägg via Playwright och sparar PNG i public/images/blog-covers/.
// Sätter sedan image_url + image_alt i blogPosts.json. Kör: node scripts/generate-blog-covers.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "src/data/blogPosts.json");
const OUT_DIR = path.join(ROOT, "public/images/blog-covers");
const PUBLIC_PREFIX = "/images/blog-covers";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function coverHtml(title, tag) {
  // Dynamisk titelstorlek så långa titlar får plats
  const len = title.length;
  const fs = len > 70 ? 52 : len > 48 ? 60 : len > 30 ? 70 : 80;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    html,body { width:1200px; height:630px; }
    .c { width:1200px; height:630px; position:relative; overflow:hidden;
         background:radial-gradient(120% 120% at 0% 0%, hsl(222 47% 9%) 0%, hsl(222 47% 5%) 60%);
         font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
         padding:72px 80px; display:flex; flex-direction:column; justify-content:space-between; }
    .arc { position:absolute; right:-180px; bottom:-220px; width:520px; height:520px; border-radius:50%;
           background:radial-gradient(circle at 50% 50%, hsl(38 92% 50% / .18), transparent 65%); }
    .bar { position:absolute; left:0; top:0; width:10px; height:100%; background:hsl(38 92% 50%); }
    .eyebrow { color:hsl(38 92% 55%); font-weight:800; letter-spacing:.22em; font-size:24px; }
    .title { color:hsl(210 40% 97%); font-family:Georgia, "Times New Roman", serif; font-weight:700;
             font-size:${fs}px; line-height:1.14; max-width:1000px; }
    .chip { align-self:flex-start; color:hsl(38 92% 55%); border:2px solid hsl(38 92% 50% / .55);
            background:hsl(38 92% 50% / .10); border-radius:999px; padding:10px 22px;
            font-size:22px; font-weight:700; letter-spacing:.03em; }
    .dot { display:inline-block; width:9px; height:9px; border-radius:50%; background:hsl(38 92% 50%); margin-right:10px; vertical-align:middle; }
  </style></head><body>
    <div class="c">
      <div class="bar"></div><div class="arc"></div>
      <div class="eyebrow"><span class="dot"></span>LRH KONSULT</div>
      <div class="title">${esc(title)}</div>
      <div class="chip">${esc(tag || "Insikter")}</div>
    </div>
  </body></html>`;
}

async function main() {
  const posts = JSON.parse(readFileSync(DATA, "utf8"));
  const targets = posts.filter((p) => !p.image_url);
  if (!targets.length) { console.log("Inga inlägg saknar image_url — inget att göra."); return; }
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

  for (const p of targets) {
    const title = p.title || p.metaTitle || p.slug;
    await page.setContent(coverHtml(title, p.tag), { waitUntil: "load" });
    const file = path.join(OUT_DIR, `${p.slug}.jpg`);
    await page.screenshot({ path: file, type: "jpeg", quality: 85, clip: { x: 0, y: 0, width: 1200, height: 630 } });
    p.image_url = `${PUBLIC_PREFIX}/${p.slug}.jpg`;
    if (!p.image_alt) p.image_alt = `${title} – LRH Konsult`;
    console.log(`  ✅ ${p.slug}.jpg`);
  }

  await browser.close();
  writeFileSync(DATA, JSON.stringify(posts, null, 2) + "\n");
  console.log(`\nKlart: ${targets.length} omslag genererade och image_url satt i blogPosts.json.`);
}
main().catch((e) => { console.error("❌", e.message); process.exit(1); });
