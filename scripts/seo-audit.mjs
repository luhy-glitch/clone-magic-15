import { readFileSync, readdirSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = statSync(fp);
    if (st.isDirectory()) walk(fp, acc);
    else if (name === "index.html") acc.push(fp);
  }
  return acc;
}
const files = walk(distDir);

const unescape = (s) =>
  (s || "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const pathOf = (f) => {
  const p = f.slice(distDir.length).replace(/\\/g, "/").replace(/\/index\.html$/, "");
  return p || "/";
};
const attr = (tag, name) => {
  const m = tag && tag.match(new RegExp(name + '\\s*=\\s*"([^"]*)"', "i"));
  return m ? unescape(m[1]) : null;
};

const titles = new Map(), descs = new Map();
const badDesc = [], noCanon = [], noOg = [], noVp = [], noLang = [], multiH1 = [], noJsonLd = [], imgsNoAlt = [];

for (const f of files) {
  const p = pathOf(f);
  const t = readFileSync(f, "utf-8");
  const mt = t.match(/<title>([^<]*)<\/title>/);
  const title = unescape(mt ? mt[1] : "");
  if (!titles.has(title)) titles.set(title, []);
  titles.get(title).push(p);

  const md = t.match(/<meta[^>]*name="description"[^>]*>/i);
  const desc = md ? attr(md[0], "content") : "";
  if (!descs.has(desc)) descs.set(desc, []);
  descs.get(desc).push(p);
  if (!desc) badDesc.push([p, "MISSING", 0]);
  else if (desc.length < 70 || desc.length > 160) badDesc.push([p, "len", desc.length]);

  if (!/<link[^>]*rel="canonical"/i.test(t)) noCanon.push(p);
  if (!/property="og:title"/i.test(t)) noOg.push(p);
  if (!/name="viewport"/i.test(t)) noVp.push(p);
  if (!/<html[^>]*lang=/i.test(t)) noLang.push(p);
  const h1 = (t.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) multiH1.push([p, h1]);
  if (!/application\/ld\+json/.test(t)) noJsonLd.push(p);
  const imgs = t.match(/<img[^>]*>/gi) || [];
  const missing = imgs.filter((i) => !/\balt\s*=/i.test(i)).length;
  if (missing) imgsNoAlt.push([p, missing]);
}

const dupT = [...titles].filter(([t, ps]) => t && ps.length > 1);
const dupD = [...descs].filter(([t, ps]) => t && ps.length > 1);

console.log("=== DUPLICATE TITLES:", dupT.length, "groups ===");
dupT.slice(0, 20).forEach(([t, ps]) => console.log(`  x${ps.length} "${t.slice(0, 50)}" -> ${ps.slice(0, 6).join(", ")}`));
console.log("\n=== DUPLICATE META DESCRIPTIONS:", dupD.length, "groups ===");
dupD.slice(0, 20).forEach(([t, ps]) => console.log(`  x${ps.length} -> ${ps.slice(0, 6).join(", ")} :: "${t.slice(0, 45)}"`));
console.log("\n=== META DESC length issues (target 70-160):", badDesc.length, "===");
badDesc.slice(0, 30).forEach(([p, k, L]) => console.log(`  ${p} [${k}=${L}]`));
console.log("\n=== Missing canonical:", noCanon.length, noCanon.slice(0, 10));
console.log("=== Missing OG:title:", noOg.length, noOg.slice(0, 10));
console.log("=== Missing viewport:", noVp.length);
console.log("=== Missing <html lang>:", noLang.length, noLang.slice(0, 5));
console.log("=== Missing JSON-LD:", noJsonLd.length, noJsonLd.slice(0, 10));
console.log("=== H1 count != 1:", multiH1.length, multiH1.slice(0, 15));
console.log("=== Images missing alt:", imgsNoAlt.length, imgsNoAlt.slice(0, 12));
console.log("\nTotal pages audited:", files.length);
