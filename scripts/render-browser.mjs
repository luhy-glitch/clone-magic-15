import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// Alla dina 78 rutter
const routes = ["/", "/om-mig", "/kontakt", "/integritetspolicy", "/case", "/gratis-seo-analys", "/tjanster/webbutveckling", "/tjanster/webbdesign", "/tjanster/seo-optimering", "/tjanster/wordpress-losningar", "/tjanster/underhall-support", "/tjanster/prestanda-optimering", "/tjanster/google-ads", "/tjanster/vad-kostar-en-hemsida-2026", "/blogg", "/webbutveckling-vasteras", "/webbutveckling-enkoping", "/webbutveckling-eskilstuna", "/webbutveckling-arboga", "/webbutveckling-fagersta", "/webbutveckling-hallstahammar", "/webbutveckling-kungsor", "/webbutveckling-surahammar", "/webbutveckling-heby", "/webbutveckling-norberg", "/webbutveckling-skinnskatteberg", "/webbutveckling-uppsala", "/webbutveckling-orebro", "/seo-koping", "/hemsidor-sala", "/hemsidor-bygg-hantverkare", "/digital-marknadsforing-butiker", "/restauranger-sala", "/frisor-koping", "/hemsidor-restaurang", "/hemsidor-redovisning", "/hemsidor-ehandel"];
const blogPosts = ["oka-hemsidans-hastighet", "lokal-seo-smaforetag", "react-vs-wordpress", "komplett-seo-guide-smaforetag", "skapa-hemsida-foretag-guide", "framtidsakra-foretag-react-malardalen", "lokal-sokmotoroptimering-vastmanland-2026", "digital-tillvaxt-smaforetag-malardalen", "dominera-google-enkoping", "webbutveckling-enkoping-partner", "komplett-guide-digital-narvaro-malardalen", "webbutveckling-eskilstuna-guide", "moderna-hemsidor-vastmanland", "seo-strategi-eskilstuna", "lokal-seo-tips-vastmanland", "frisor-koping-dominera-google", "digital-marknadsforing-cafeer", "webbdesign-advokatbyraer-vasteras", "bokningssystem-frisorer-vastmanland", "e-handel-butiker-sala", "restauranghemsida-online-meny-sala", "seo-byggforetag-malardalen", "hemsida-hantverkare-vasteras", "byggfirma-vasteras-fler-kunder", "restaurang-sala-snabb-hemsida", "hastighetsoptimering-foretag-sala", "wordpress-vs-react-vasteras", "oka-hemsidans-hastighet-koping", "hur-lang-tid-bygga-hemsida-vasteras", "pris-professionell-hemsida-2026", "minska-bounce-rate-vasteras", "core-web-vitals-vastmanland", "react-vs-wordpress-koping", "billig-vs-professionell-hemsida", "vad-kostar-hemsida-smaforetag-sala", "resan-till-100-pagespeed", "framtidssakra-din-digitala-narvaro-i-vastmanland", "effektiv-webbutveckling-ai-verktyg-vastmanland", "digital-synlighet-vastmanland-seo-ai", "framtidssakra-foretag-vastmanland-2026", "seo-vasteras"];

const allRoutes = [...routes, ...blogPosts.map(p => `/blogg/${p}`)];

async function run() {
  console.log("🚀 Startar tillfällig server...");
  const server = spawn('npx', ['vite', 'preview', '--port', '5173'], { stdio: 'inherit' });
  
  await new Promise(r => setTimeout(r, 2500)); // Ge servern tid att starta

  console.log("🌐 Öppnar webbläsare för rendering...");
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const route of allRoutes) {
    const url = `http://localhost:5173${route}`;
    process.stdout.write(`📸 Renderar: ${route} ... `);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500); // Vänta på att React-hydration ska bli klar

      const content = await page.content();
      
      const filePath = path.join(distDir, route === "/" ? "index.html" : `${route}.html`);
      const folderPath = path.join(distDir, route);
      
      if (!fs.existsSync(path.dirname(filePath))) fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, content);

      if (route !== "/") {
        if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
        fs.writeFileSync(path.join(folderPath, "index.html"), content);
      }
      console.log("✅");
    } catch (e) {
      console.log("❌ Fel!");
    }
  }

  await browser.close();
  server.kill();
  console.log("\n🎉 ALLA 78 SIDOR ÄR NU KLARA MED RIKTIG TEXT!");
  process.exit(0);
}

run();
