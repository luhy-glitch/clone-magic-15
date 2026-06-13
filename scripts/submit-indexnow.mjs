// IndexNow-submission för lrhkonsult.se
// Skickar alla URL:er i dist/sitemap.xml till IndexNow (Bing, Yandex, Seznam, Naver m.fl.).
// OBS: Google deltar INTE i IndexNow — detta påskyndar indexering hos Bing/Yandex etc., inte Google.
//
// Körs: node scripts/submit-indexnow.mjs
// Kräver att nyckelfilen ligger live på domänen (finns redan i dist/ + public/).

import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const HOST = "www.lrhkonsult.se";
const KEY = "a5d5940c0ba847d2b5afc11b8105fe83";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = path.join(ROOT, "dist", "sitemap.xml");
const ENDPOINT = "https://api.indexnow.org/indexnow";

function getUrls() {
  const xml = readFileSync(SITEMAP, "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  // Endast URL:er på rätt host (IndexNow kräver samma host)
  return [...new Set(urls)].filter((u) => u.includes(HOST));
}

async function main() {
  const urlList = getUrls();
  if (!urlList.length) {
    console.error("❌ Inga URL:er hittades i", SITEMAP);
    process.exit(1);
  }
  console.log(`📤 Skickar ${urlList.length} URL:er till IndexNow…`);
  console.log(`   host=${HOST}  key=${KEY}`);

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  const text = await res.text();
  console.log(`\nSvar: HTTP ${res.status} ${res.statusText}`);
  if (text.trim()) console.log("Body:", text.trim());

  // 200 = OK, 202 = Accepted (mottaget, valideras). Båda = lyckat.
  if (res.status === 200 || res.status === 202) {
    console.log("✅ Submission accepterad.");
  } else if (res.status === 422) {
    console.log("⚠️ 422: URL:er matchar inte host eller nyckel ogiltig. Kontrollera KEY_LOCATION är live.");
    process.exit(1);
  } else if (res.status === 403) {
    console.log("⚠️ 403: Nyckelfilen kunde inte verifieras på", KEY_LOCATION);
    process.exit(1);
  } else {
    console.log("⚠️ Oväntad status.");
    process.exit(1);
  }
}

main().catch((e) => {
  console.error("❌ Fel:", e.message);
  process.exit(1);
});
