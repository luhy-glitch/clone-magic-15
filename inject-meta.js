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
  <a href="/blogg/komplett-seo-guide-smaforetag">SEO-guide småföretag</a>
  <a href="/blogg/skapa-hemsida-foretag-guide">Skapa hemsida guide</a>
  <a href="/blogg/oka-hemsidans-hastighet">Öka hemsidans hastighet</a>
  <a href="/blogg/lokal-seo-smaforetag">Lokal SEO småföretag</a>
  <a href="/blogg/react-vs-wordpress">React vs WordPress</a>
  <a href="/blogg/framtidsakra-foretag-react-malardalen">Framtidssäkra React Mälardalen</a>
  <a href="/blogg/lokal-sokmotoroptimering-vastmanland-2026">Lokal SEO Västmanland 2026</a>
  <a href="/blogg/digital-tillvaxt-smaforetag-malardalen">Digital tillväxt Mälardalen</a>
  <a href="/blogg/dominera-google-enkoping">Dominera Google Enköping</a>
  <a href="/blogg/webbutveckling-enkoping-partner">Webbutveckling Enköping</a>
  <a href="/blogg/komplett-guide-digital-narvaro-malardalen">Digital närvaro Mälardalen</a>
  <a href="/blogg/webbutveckling-eskilstuna-guide">Webbutveckling Eskilstuna</a>
  <a href="/blogg/moderna-hemsidor-vastmanland">Moderna hemsidor Västmanland</a>
  <a href="/blogg/seo-strategi-eskilstuna">SEO strategi Eskilstuna</a>
  <a href="/blogg/lokal-seo-tips-vastmanland">Lokal SEO tips Västmanland</a>
  <a href="/blogg/frisor-koping-dominera-google">Frisör Köping Google</a>
  <a href="/blogg/digital-marknadsforing-cafeer">Digital marknadsföring caféer</a>
  <a href="/blogg/webbdesign-advokatbyraer-vasteras">Webbdesign advokatbyråer</a>
  <a href="/blogg/bokningssystem-frisorer-vastmanland">Bokningssystem frisörer</a>
  <a href="/blogg/e-handel-butiker-sala">E-handel butiker Sala</a>
  <a href="/blogg/restauranghemsida-online-meny-sala">Restauranghemsida Sala</a>
  <a href="/blogg/seo-byggforetag-malardalen">SEO byggföretag Mälardalen</a>
  <a href="/blogg/hemsida-hantverkare-vasteras">Hemsida hantverkare Västerås</a>
  <a href="/blogg/byggfirma-vasteras-fler-kunder">Byggfirma Västerås</a>
  <a href="/blogg/restaurang-sala-snabb-hemsida">Restaurang Sala hemsida</a>
  <a href="/blogg/hastighetsoptimering-foretag-sala">Hastighetsoptimering Sala</a>
  <a href="/blogg/wordpress-vs-react-vasteras">WordPress vs React Västerås</a>
  <a href="/blogg/oka-hemsidans-hastighet-koping">Hastighet Köping</a>
  <a href="/blogg/hur-lang-tid-bygga-hemsida-vasteras">Byggtid hemsida Västerås</a>
  <a href="/blogg/pris-professionell-hemsida-2026">Pris hemsida 2026</a>
  <a href="/blogg/minska-bounce-rate-vasteras">Bounce rate Västerås</a>
  <a href="/blogg/core-web-vitals-vastmanland">Core Web Vitals Västmanland</a>
  <a href="/blogg/react-vs-wordpress-koping">React vs WordPress Köping</a>
  <a href="/blogg/billig-vs-professionell-hemsida">Billig vs professionell hemsida</a>
  <a href="/blogg/vad-kostar-hemsida-smaforetag-sala">Vad kostar hemsida Sala</a>
  <a href="/blogg/resan-till-100-pagespeed">100/100 PageSpeed</a>
  <a href="/blogg/framtidssakra-din-digitala-narvaro-i-vastmanland">Digital närvaro Västmanland</a>
  <a href="/blogg/effektiv-webbutveckling-ai-verktyg-vastmanland">Webbutveckling AI Västmanland</a>
  <a href="/blogg/digital-synlighet-vastmanland-seo-ai">Digital synlighet SEO AI</a>
  <a href="/blogg/framtidssakra-foretag-vastmanland-2026">Framtidssäkra företag 2026</a>
  <a href="/blogg/seo-vasteras">SEO Västerås – Ranka högst på Google 2026</a>  
</nav>`;

            // Lägg till aggregateRating JSON-LD för startsidan
            if (page.slug === 'index') {
                const aggregateRatingLd = JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "LRH Konsult",
                    "url": "https://www.lrhkonsult.se",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5",
                        "bestRating": "5",
                        "worstRating": "1",
                        "ratingCount": "5",
                        "reviewCount": "5"
                    }
                });
                html = html.replace('</head>', `<script type="application/ld+json">${aggregateRatingLd}</script>\n</head>`);
            }

            html = html.replace('</body>', `${internalLinks}\n</body>`);

            fs.writeFileSync(filePath, html);
            console.log(`✅ Injicerat i: ${fileName}`);
        }
    });
}

inject();