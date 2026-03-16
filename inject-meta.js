import fs from 'fs';
import path from 'path';

const PAGES_DATA_PATH = './pages_data_STEPBYSTEP.json';
const OUTPUT_DIR = './dist';

function inject() {
    console.log("🔍 Startar SEO-injicering...");
    const pages = JSON.parse(fs.readFileSync(PAGES_DATA_PATH, 'utf8'));

    pages.forEach(page => {
        const fileName = page.slug === 'index' ? 'index.html' : `${page.slug}.html`;
        const filePath = path.join(OUTPUT_DIR, fileName);

        if (fs.existsSync(filePath)) {
            let html = fs.readFileSync(filePath, 'utf8');

            const canonicalSlug = page.slug === 'index' ? '' : page.slug;
            const canonicalUrl = `https://www.lrhkonsult.se/${canonicalSlug}`;

            const seoBlock = `
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    `;

            html = html.replace(/<title>.*?<\/title>/gi, '');
            html = html.replace(/<meta name="description".*?>/gi, '');
            html = html.replace(/<link rel="canonical".*?>/gi, '');

            html = html.replace('</head>', `${seoBlock}\n  </head>`);
            // Injicera statiska interna länkar för SEO-crawlers
const internalLinks = `
<nav aria-hidden="true" style="display:none" id="seo-internal-links">
  <a href="/tjanster/webbutveckling">Webbutveckling</a>
  <a href="/tjanster/seo-optimering">SEO-optimering</a>
  <a href="/tjanster/webbdesign">Webbdesign</a>
  <a href="/tjanster/google-ads">Google Ads</a>
  <a href="/tjanster/wordpress-losningar">WordPress</a>
  <a href="/tjanster/underhall-support">Underhåll</a>
  <a href="/tjanster/prestanda-optimering">Prestandaoptimering</a>
  <a href="/tjanster/vad-kostar-en-hemsida-2026">Vad kostar en hemsida</a>
  <a href="/webbutveckling-vasteras">Västerås</a>
  <a href="/webbutveckling-enkoping">Enköping</a>
  <a href="/webbutveckling-eskilstuna">Eskilstuna</a>
  <a href="/webbutveckling-arboga">Arboga</a>
  <a href="/webbutveckling-fagersta">Fagersta</a>
  <a href="/webbutveckling-hallstahammar">Hallstahammar</a>
  <a href="/webbutveckling-kungsor">Kungsör</a>
  <a href="/webbutveckling-surahammar">Surahammar</a>
  <a href="/webbutveckling-heby">Heby</a>
  <a href="/webbutveckling-norberg">Norberg</a>
  <a href="/webbutveckling-skinnskatteberg">Skinnskatteberg</a>
  <a href="/webbutveckling-uppsala">Uppsala</a>
  <a href="/webbutveckling-orebro">Örebro</a>
  <a href="/hemsidor-restaurang">Restaurang</a>
  <a href="/hemsidor-redovisning">Redovisning</a>
  <a href="/hemsidor-ehandel">E-handel</a>
  <a href="/hemsidor-bygg-hantverkare">Bygg</a>
  <a href="/hemsidor-sala">Sala</a>
  <a href="/seo-koping">SEO Köping</a>
  <a href="/frisor-koping">Frisör Köping</a>
  <a href="/restauranger-sala">Restauranger Sala</a>
  <a href="/digital-marknadsforing-butiker">Digital marknadsföring</a>
  <a href="/blogg">Blogg</a>
  <a href="/om-mig">Om mig</a>
  <a href="/case">Kundcase</a>
  <a href="/kontakt">Kontakt</a>
  <a href="/gratis-seo-analys">Gratis SEO-analys</a>
  <a href="/integritetspolicy">Integritetspolicy</a>
</nav>`;
html = html.replace('</body>', `${internalLinks}\n</body>`);

            fs.writeFileSync(filePath, html);
            console.log(`✅ Injicerat i: ${fileName}`);
        }
    });
}

inject();