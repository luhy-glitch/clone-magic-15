import { readFileSync, readdirSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const fp = path.join(dir, name);
    if (statSync(fp).isDirectory()) walk(fp, acc);
    else if (name === "index.html") acc.push(fp);
  }
  return acc;
}
const files = walk(distDir);
const pathOf = (f) => (f.slice(distDir.length).replace(/\\/g, "/").replace(/\/index\.html$/, "") || "/");

const allPaths = new Set(files.map(pathOf));
const inbound = new Map([...allPaths].map((p) => [p, 0]));
const ogIssues = [], headingIssues = [];

for (const f of files) {
  const p = pathOf(f);
  const t = readFileSync(f, "utf-8");

  // OG completeness
  for (const tag of ["og:title", "og:description", "og:image", "og:type", "og:url", "twitter:card"]) {
    if (!new RegExp(`(property|name)="${tag}"`, "i").test(t)) ogIssues.push(`${p} missing ${tag}`);
  }

  // Heading hierarchy: collect h1..h4 order, flag skips
  const heads = [...t.matchAll(/<(h[1-4])[\s>]/gi)].map((m) => parseInt(m[1][1]));
  let prev = 0, skipped = false;
  for (const lvl of heads) {
    if (prev && lvl > prev + 1) { skipped = true; break; }
    prev = lvl;
  }
  if (skipped) headingIssues.push(`${p} (seq: ${heads.join("")})`);

  // inbound internal links (count links FROM this page TO others)
  const hrefs = [...t.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1].replace(/\/$/, "") || "/");
  for (let h of new Set(hrefs)) {
    if (h !== p && inbound.has(h)) inbound.set(h, inbound.get(h) + 1);
  }
}

const orphans = [...inbound].filter(([p, n]) => n === 0 && p !== "/").sort((a, b) => a[1] - b[1]);
const low = [...inbound].filter(([p, n]) => n > 0 && n < 2 && p !== "/").sort((a, b) => a[1] - b[1]);

console.log("=== OG/Twitter tag issues:", ogIssues.length, "===");
ogIssues.slice(0, 12).forEach((x) => console.log("  " + x));
console.log("\n=== Heading hierarchy skips:", headingIssues.length, "===");
headingIssues.slice(0, 20).forEach((x) => console.log("  " + x));
console.log("\n=== ORPHAN pages (0 inbound internal links):", orphans.length, "===");
orphans.forEach(([p, n]) => console.log(`  ${p} (${n})`));
console.log("\n=== Low inbound (1 link):", low.length, "===");
low.slice(0, 20).forEach(([p, n]) => console.log(`  ${p} (${n})`));
console.log("\nTotal pages:", files.length);
