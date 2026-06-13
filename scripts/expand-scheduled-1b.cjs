'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/blogPosts.json');
const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const additions = {
  'webbyra-vasteras-guide-valjra-ratt': [
    "## Offertsprocessen – hur du tolkar och jämför offerter",
    "Att jämföra offerter från webbbyråer i Västerås kräver att du jämför äpplen med äpplen. Två offerter på 20 000 kr kan representera fundamentalt olika leveranser. Den ena kan inkludera skräddarsydd design i Figma, SEO-optimering av alla sidor, Google Search Console-konfiguration och en handover-session. Den andra kan vara ett standard-WordPress-tema med minimalt anpassning och ingen SEO-hänsyn.",
    "Be om en specifikation post för post: exakt hur många sidor ingår, vad innebär 'mobilanpassad' (wireframes för mobil? testad på echta enheter?), ingår SEO (on-page-optimering, sitemap, Search Console?) och ingår copywriting eller levererar du texterna?",
    "## Agile vs waterfall – hur byråer levererar projekt",
    "Traditionella webbyrån jobbar i en waterfall-modell: briefen tas emot, arbetet sker internt, resultatet levereras i slutet. Det innebär att du ser resultatet sent i processen och risken för missnöje är hög om förväntningarna inte var perfekt kommunicerade från start.",
    "Moderna byråer arbetar iterativt (agile): du involveras löpande, du ser demoversioner tidigt och kan ge feedback innan för mycket tid investerats i fel riktning. Fråga din potentiella webbyrå i Västerås hur de hanterar kundinvolvering under projektet – det avslöjar mycket om deras arbetsmetodik.",
    "Kontakta LRH Konsult för ett samtal om ditt projekt. Vi arbetar transparent med löpande kundkommunikation och inga obehagliga överraskningar vid leveransen."
  ],
  'google-ads-vasteras-guide-2026': [
    "## Annonsextensioner – maximera din synlighet i Google",
    "Annonsextensioner är gratistillägg till dina Google-annonser som visar extra information direkt i sökresultaten. Rätt använda kan de dramatiskt öka din CTR och ge potentiella kunder mer information innan de ens klickar.",
    "De viktigaste extensionerna för lokala Västerås-företag är: samtalstillägg (visar ditt telefonnummer direkt i annonsen, vilket gör det möjligt att ringa med ett klick), platsextensioner (visar din adress och en länk till Google Maps), leadformulär-extensions (låter besökaren fylla i ett kontaktformulär direkt från annonsen), och webbplatslänkextensioner (visar 4 extra länkar till specifika delar av din sajt).",
    "## Kampanjstruktur – SKAG vs breda kampanjer",
    "Kampanjstrukturen i Google Ads avgör hur effektivt du kan optimera och analysera dina resultat. SKAG-metoden (Single Keyword Ad Groups) innebär att varje annonsgrupp innehåller exakt ett sökord och en eller flera annonser specifikt skrivna för det sökordret. Det ger maximal kontroll och relevans men kräver mer arbete att sätta upp och underhålla.",
    "En mer pragmatisk approach för ett Västerås-företag med begränsad tid är att gruppera tätt relaterade sökord (2–5 termer) i samma annonsgrupp och skriva annonser som täcker dem alla. Det ger god kontroll med rimligare arbetsinsats.",
    "Oavsett struktur: separera alltid kampanjer för Sök och Display. Blanda aldrig dessa kampanjtyper – de har fundamentalt olika målsättning, KPIer och budgivningsstrategi."
  ],
  'hemsida-foretag-vasteras-guide': [
    "## Hemsidan som del av ditt digitala ekosystem",
    "Din hemsida är navet i ditt digitala ekosystem – alla andra kanaler leder till den. Google Ads-annonser skickar trafik dit. SEO-rankningen driver organiska besök dit. Dina LinkedIn-inlägg länkas till din blogg där. Din e-postmarknadsföring driver trafik till kampanjlandningssidor.",
    "Det innebär att hemsidan behöver vara optimerad för att konvertera den trafik som anländer – oavsett källa. En besökare från Google Ads har ett omedelbart behov och behöver en tydlig CTA snabbt. En besökare från organisk sökning kanske är i en tidigare fas av köpresan och behöver mer utbildande innehåll. En välstrukturerad hemsida adresserar båda besökartyperna.",
    "## Integrationer som förbättrar din hemsida",
    "En hemsida behöver inte existera i isolering. Rätt integrationer kan förvandla din sajt från ett digitalt visitkort till ett affärsverktyg. Bokningssystem som Bokadirekt eller Calendly låter potentiella kunder boka möten direkt via din sajt – utan telefonkontakt. Chatt-verktyg som Intercom eller Tidio ger besökare möjligheten att ställa frågor i realtid, vilket ökar konverteringsgraden.",
    "CRM-integration innebär att formulärifyllningar på din sajt automatiskt skapar kontakter i ditt CRM-system (HubSpot, Pipedrive). Det eliminerar manuell dataöverföring och säkerställer att potentiella kunder inte faller mellan stolarna.",
    "Vill du ha en hemsida som faktiskt driver affärer? Kontakta oss för ett gratis möte om ditt projekt i Västerås."
  ],
  'digital-marknadsforing-vasteras-guide': [
    "## Budgetplanering för digital marknadsföring",
    "Hur mycket ska ett Västerås-företag investera i digital marknadsföring? Som tumregel brukar man säga 5–10 procent av omsättningen. För ett företag med 3 miljonkronors omsättning innebär det 150 000–300 000 kr per år – tillräckligt för ett SEO-grundpaket, Google Ads-kampanjer och löpande innehållsproduktion.",
    "Börja med det som ger snabbast ROI och bygg ut därifrån. För de flesta lokala Västerås-företag är ordningen: (1) säkerställ en professionell, SEO-optimerad hemsida som bas, (2) optimera Google Business Profile för lokal synlighet, (3) starta Google Ads-kampanjer för omedelbar synlighet, (4) bygg SEO-momentum via regelbunden innehållsproduktion.",
    "## Mätning och rapportering – håll koll på din ROI",
    "Sätt upp enkla KPIer (Key Performance Indicators) för dina digitala marknadsföringsinsatser och mät dem månadsvis. Relevanta KPIer för ett lokalt Västerås-företag kan vara: antal organiska besök från Google, antal förfrågningar via hemsidan (formulärsfyllningar), antal telefonsamtal från Google Ads, position för 3–5 prioriterade sökord och Google Business Profile-insikter (visningar, klick, ruttdirektioner).",
    "En månadsvis genomgång av dessa mätvärden ger dig underlag för att allokera om budget mellan kanaler, identifiera vad som fungerar och skala upp, och flagga problem tidigt (trafiktapp kan indikera ett SEO-problem som behöver åtgärdas).",
    "Kontakta oss för att diskutera en digital marknadsföringsstrategi anpassad för ditt Västerås-företag."
  ],
  'seo-eskilstuna-lokal-guide-2026': [
    "## Teknisk SEO-checklista för Eskilstuna-sajter",
    "Gå igenom följande tekniska SEO-punkter för din sajt: Kontrollera att sajten är HTTPS. Kör Google PageSpeed Insights på din hemsida och se till att du har minst 75 i poäng på mobil. Kontrollera att du har en XML-sitemap och att den är inlämnad till Google Search Console. Verifiera att robots.txt inte blockerar viktiga sidor från Google-indexering. Kontrollera att du inte har duplicerade title-taggar eller meta-descriptions.",
    "Dessa grundläggande tekniska kontroller kostar ingenting och kan identifiera kritiska problem som hindrar din ranking i Eskilstuna. Google Search Console är ett gratis verktyg som Googles egna SEO-rekommendationer, med direkta varningar om den hittar problem.",
    "## Lokal innehållskalender för Eskilstuna-marknaden",
    "En lokal innehållsstrategi för ett Eskilstuna-företag bör kombinera evergreen-innehåll (artiklar som förblir relevanta i år) med tidsbundna artiklar kopplade till lokala events och säsong. Evergreen-innehåll kan vara 'Komplett guide till att starta företag i Eskilstuna' eller 'De 10 bästa restaurangerna i Eskilstuna 2026'. Tidsbundet innehåll kan vara 'Sommarens bästa aktiviteter i Eskilstuna' eller 'Guide till Eskilstuna Marknaden 2026'.",
    "Evergreen-innehåll bygger SEO-kapital över tid. Tidsbundet innehåll genererar kortsiktig trafik och sociala delningar. En bra innehållsstrategi för Eskilstuna blandar båda för att maximera both kortsiktig synlighet och långsiktig SEO-styrka.",
    "Vill du ha hjälp med lokal SEO i Eskilstuna? Kontakta LRH Konsult för ett kostnadsfritt samtal."
  ],
  'webbdesigner-vasteras-anlita-guide': [
    "## Design system och brandbok – en bortförsedd investering",
    "En investering som många Västerås-företag glömmer att beställa är ett enkelt design system: en brandbok som dokumenterar dina färgkoder (HEX/RGB), typsnitt och deras användningsområden, logotypvarianter och frizon, och mallar för vanliga element (knappar, formulär, kort). Det är ett dokument på 5–10 sidor som sparar tim efter tim framöver när du ska skapa nytt material.",
    "Utan en brandbok ser dina PowerPoints, offertmall, sociala medier-inlägg och hemsida alla lite olika ut – och det subtila visuella röret signalerar brist på professionalism. Med en brandbok kan du (och alla frilansar du anlitar i framtiden) producera konsekventa material direkt.",
    "## Webbdesign och tillgänglighet – ett krav från 2025",
    "EU:s European Accessibility Act (EAA) trädde i kraft 2025 och kräver att digitala produkter och tjänster uppfyller tillgänglighetskrav (WCAG 2.1 AA). Det gäller e-handelssajter, bank- och finanstjänster, och en lång rad andra kategorier av digital service. För många Västerås-företag är detta nu ett lagkrav, inte bara bästa praxis.",
    "En webbdesigner som inte kan leverera WCAG 2.1 AA-kompatibel design 2026 är bakom kurvan. Fråga alltid om WCAG-compliance ingår i leveransen och be om en verifiering via ett automatiserat tillgänglighetsverktyg (WAVE, Axe) samt manuell testning av kritiska flöden.",
    "Vi på LRH Konsult levererar tillgänglighetsoptimerad webbdesign som standard. Kontakta oss för att diskutera ditt projekt i Västerås."
  ],
  'wordpress-hemsida-pris-guide-2026': [
    "## WordPress vs Shopify för e-handel – prisaspekten",
    "Om du planerar en e-handelssajt i Västerås är valet mellan WordPress/WooCommerce och Shopify en viktig fråga. Shopify kostar 300–800 kr/månad beroende på plan och har en enklare inlärningskurva. WooCommerce är tekniskt gratis men kräver hosting och plugin-kostnader – ofta 200–400 kr/månad i totala plattformskostnader.",
    "Shopify tar dessutom en transaktionsavgift (0,5–2 procent av försäljningen) om du inte använder deras eget betalningssystem (Shopify Payments, ej tillgängligt i Sverige). Det innebär att Shopify på sikt kan bli dyrare för butiker med hög omsättning. WooCommerce har inga transaktionsavgifter.",
    "## Migrering från gammal hemsida till ny WordPress",
    "Om du har en befintlig hemsida och vill migrera till WordPress finns det SEO-risker att hantera noga. En felaktig migration kan radera Google-indexeringen och trafiken du byggt upp. De viktigaste åtgärderna är: säkerställ att alla gamla URL-er antingen bevaras eller att korrekt 301-redirect sätts upp från varje gammal URL till den nya, lägg in den nya sajten i Google Search Console och skicka in den nya sitemappen, och övervaka rankningar och trafik noggrant de första 4–6 veckorna efter launch.",
    "Vi genomför migrationer med en strukturerad process som minimerar risken för trafikfall och säkerställer att ditt SEO-värde bevaras. Hör av dig för ett samtal om din WordPress-migration i Västerås."
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
console.log(`\nDone. Updated ${updated} posts.`);
