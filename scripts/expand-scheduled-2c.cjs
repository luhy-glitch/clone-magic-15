'use strict';
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../src/data/blogPosts.json');
const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// One final section added to each of the 8 short posts
const additions = {
  'lokal-seo-google-maps-vastmanland': [
    "## Sammanfattning: Lokal SEO och Google Maps i Västmanland",
    "Lokal SEO och Google Maps-optimering är inte ett engångsprojekt – det är en löpande process som kräver konsistent uppmärksamhet. De viktigaste aktiviteterna att prioritera är: optimering och komplettering av Google Business Profile, aktiv recensionsstrategi, regelbundna Google Posts och foton, NAP-konsistens across alla digitala kanaler, och kontinuerlig SEO-optimering av din hemsida med lokalt relevant innehåll.",
    "Resultaten av lokal SEO tar tid att materialisera – räkna med 3–6 månader för att se tydliga förbättringar i Maps-rankning och organisk lokal trafik. Men investeringen betalar sig mångfalt i form av fler lokala kunder som hittar dig direkt i Google utan att du behöver betala för varje klick. Kontakta LRH Konsult för en komplett lokal SEO-strategi för ditt Västmanlands-företag."
  ],
  'seo-ehandel-vastmanland-guide': [
    "## Sammanfattning: E-handels-SEO i Västmanland",
    "SEO för e-handel är en av de mest lönsamma digitala marknadsföringsinvesteringarna du kan göra – men den kräver ett systematiskt och tekniskt kompetent angreppssätt. De viktigaste prioriteringarna för en Västmanland-baserad webbutik är: unika och sökordsoptimerade produktbeskrivningar, korrekt hantering av faceted navigation och canonical-taggar, bildoptimering för PageSpeed, aktiv recensionsstrategi för produkter, och en bloggstrategi med köpintentionsorienterat innehåll.",
    "E-handels-SEO är ett långsiktigt arbete som ger avkastning i form av organisk trafik som inte kostar per klick. En väloptimerad webbutik kan om 12–24 månader ha en signifikant andel organisk trafik som minskar beroendet av Google Ads och ger lägre customer acquisition cost. Kontakta oss för att diskutera din e-handels-SEO-strategi."
  ],
  'konverteringsoptimering-hemsida-guide': [
    "## Sammanfattning: CRO för Västerås-företag",
    "Konverteringsoptimering är ett kontinuerligt förbättringsarbete, inte ett engångsprojekt. Börja med de enklaste åtgärderna med störst förväntad effekt: tydligare rubrik, bättre CTA ovanför fold, reducerat antal formulärfält, och tillägg av socialt bevis. Mät förändringen i konverteringsgrad. Iterera.",
    "Det finns ingen universell lösning för CRO – vad som fungerar för ett Västerås-företag kanske inte fungerar för ett annat. Data från din specifika sajt och din specifika målgrupp är den enda pålitliga guiden. Heatmaps, sessionsanalys och A/B-testning ger dig den datan. Kontakta LRH Konsult för att komma igång med datadrivet CRO-arbete för din hemsida."
  ],
  'teknisk-seo-guide-vasteras-2026': [
    "## Sammanfattning: Teknisk SEO för Västerås-sajter",
    "En solid teknisk SEO-grund är nödvändig för att all annan SEO-insats ska ge maximal effekt. Utan korrekt crawlbarhet, snabb laddningstid och felfri strukturerad data lämnar du SEO-värde på bordet oavsett hur bra ditt innehåll är eller hur många bakåtlänkar du har.",
    "Prioritera i den ordningen: åtgärda kritiska tekniska fel (brutna sidor, crawl-blockering, HTTPS-problem), optimera för Core Web Vitals (LCP, INP, CLS), implementera strukturerad data, och sätt upp en intern länkstrategi. Det är ett arbete som aldrig är helt 'klart' – teknisk SEO kräver löpande underhåll i takt med att din sajt växer och förändras. Kontakta LRH Konsult för en teknisk SEO-audit av din hemsida i Västerås."
  ],
  'innehallsstrategi-b2b-foretag-vastmanland': [
    "## Sammanfattning: Innehållsstrategi för B2B i Västmanland",
    "En framgångsrik B2B-innehållsstrategi i Västmanland kombinerar SEO-driven sökordsresearch, en tydlig innehållskalender anpassad till köpresans faser, konsistent distribution på rätt kanaler (primärt LinkedIn och e-post), och systematisk mätning av affärsnytta.",
    "Nyckeln är att starta enkelt och iterera. Publicera ett välresearchat, välskrivet inlägg per månad under sex månader och mät resultaten. Skala upp vad som fungerar och justera det som inte gör det. Innehållsstrategi är ett maraton, inte ett sprint – men de företag i Västmanland som investerar konsekvent under ett par år bygger en digital tillgång som levererar kvalificerade leads år efter år. Kontakta oss för att diskutera din innehållsstrategi."
  ],
  'google-analytics-4-guide-vasteras': [
    "## Sammanfattning: GA4 för Västerås-företag",
    "Google Analytics 4 är ett kraftfullt verktyg som ger dig fullständig insyn i hur din hemsida presterar – förutsatt att det är korrekt konfigurerat med tydliga konverteringsmål och fungerande händelsespårning. Utan korrekt konfiguration ser du trafik men vet inte om den genererar affärsnytta.",
    "Investeringen i en korrekt GA4-uppsättning är liten jämfört med värdet av att kunna fatta datadrivna beslut om var du ska investera din marknadsföringsbudget. Vet du vilka sidor som driver konverteringar? Vilken kanal har bäst ROI? Vilka sökord genererar leads? Med rätt GA4-konfiguration kan du svara på alla dessa frågor. Kontakta LRH Konsult för hjälp med GA4-implementation och analys."
  ],
  'lankbygge-lokal-seo-vastmanland-guide': [
    "## Sammanfattning: Länkbygge för Västerås-företag",
    "Länkbygge är en av de mest tidskrävande men också mest lönsamma SEO-aktiviteterna. Det kräver kreativitet, relationsskapande och tålamod – men resultaten är hållbara. En stark länkprofil är svår för konkurrenter att replikera snabbt och ger dig ett varaktigt konkurrensfördel i Googles sökresultat.",
    "De mest effektiva länkbyggestrategierna för lokala Västerås-företag kombinerar digital PR (skapa innehåll värt att länka till), lokal community-engagemang (sponsorskap, föreläsningar, nätverksarbete) och systematisk konkurrentsanalys (fånga möjligheter dina konkurrenter missar). Börja med din Google Search Console-länkrapport för att förstå din nuvarande länkprofil och identifiera de starkaste möjligheterna. Kontakta oss för hjälp med länkbyggestrategi."
  ],
  'seo-audit-hemsida-checklista-2026': [
    "## Sammanfattning: Din SEO-audit-process",
    "En SEO-audit är startpunkten, inte slutdestinationen. Den är värdefull inte för insikterna i sig, utan för de åtgärder den leder till. En audit utan en prioriterad handlingsplan och dedikerade resurser för implementation är ett akademiskt övning utan affärsnytta.",
    "Kör en miniaudit varje kvartal och en fullständig audit en gång per år. Det håller din SEO-hygien i ordning och identifierar nya möjligheter i takt med att marknaden och Googles algoritm förändras. För en sajt som prioriterar tillväxt via organisk sökning är löpande SEO-arbete en investering med compounding avkastning – varje förbättring bygger på de föregående. Kontakta LRH Konsult för en professionell SEO-audit och åtgärdsplan."
  ]
};

let updated = 0;
posts.forEach(post => {
  if (additions[post.slug]) {
    if (Array.isArray(post.content)) {
      post.content = [...post.content, ...additions[post.slug]];
    }
    updated++;
    const text = post.content.join(' ');
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    console.log(`Updated: ${post.slug} → ${wordCount} words`);
  }
});

fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
console.log(`\nDone. Updated ${updated} posts. Total posts: ${posts.length}`);
