'use strict';
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../src/data/blogPosts.json');
const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const additions = {
  'lokal-seo-google-maps-vastmanland': [
    "## Konkurrensanalys i Google Maps",
    "Undersök dina närmaste Maps-konkurrenter noggrant. Sök på ditt primära sökord i Västerås och analysera de tre företag som visas i Maps-paketet: Hur många recensioner har de? Vilket genomsnittligt betyg? Hur aktiv är deras profil (senaste recension, senaste Google Post)? Har de fyllt i alla fält i sin GBP?",
    "Konkurrensanalysen ger dig en realistisk bild av vad som krävs för att komma in i Maps-paketet. Om konkurrenterna har 150 recensioner och du har 15, är det tydligt var du behöver lägga energin. Om en konkurrent har ett halvtomt GBP-konto men ändå rankar är det ett tecken på svag konkurrens och en möjlighet för dig.",
    "## Attributlistan i Google Business Profile",
    "GBP låter dig specificera attribut som 'Rullstolsanpassad ingång', 'Gratis WiFi', 'Parkering tillgänglig', 'Betalkort accepteras' och branschspecifika attribut. Dessa attribut indexeras av Google och matchar mot specifika sökfrågor. En person som söker 'frisör rullstolsanpassad Västerås' matchar mot en frisörsalong med det attributet angett.",
    "Gå igenom alla tillgängliga attribut för din bransch och fyll i dem noggrant. Det är ett litet arbete med potentiellt stor effekt på matchning mot specifika sökfrågor.",
    "## Säsongsvariationer i lokal sökning",
    "Lokal sökning varierar med säsongen. En trädgårdsservice i Västerås ser mer sökningar under vår och sommar. En skidskola i Skinnskatteberg har tydlig vintertopp. Ett revisionsbolag ser ökade sökningar kring deklarationsperioden. Anpassa din GBP och ditt sökordsfokus till dessa säsongsmönster.",
    "Publicera säsongsrelaterade Google Posts och erbjudanden i förväg – Google Posts tar tid att indexeras, så publicera säsongsinnehåll 2–3 veckor innan säsongen startar. Uppdatera din GBP-beskrivning för att inkludera säsongsspecifik text under högsäsong.",
    "Kontakta oss för ett kostnadsfritt samtal om lokal SEO och Google Maps-optimering för ditt företag i Västmanland."
  ],
  'seo-ehandel-vastmanland-guide': [
    "## Blogg och guideinnehåll för e-handels-SEO",
    "En e-handelsblogg driver inte bara SEO-trafik – den är ett effektivt sätt att hålla besökare på sajten längre, presentera produkter i kontextuellt sammanhang och bygga köparintention. En guide om 'Hur du väljer rätt löparskor för maraton' som länker till dina relevanta produkter konverterar bättre än en produktlistningssida ensam.",
    "Planeringsprocessen: identifiera de 20 vanligaste frågorna dina kunder ställer om dina produkter (via kundservice-mejl, recensioner, sökordsverktyg) och skapa en artikel per fråga. Länka varje artikel till de mest relevanta produktkategorierna. Det skapar ett innehållsekosystem som stärker hela sajten.",
    "## Bildoptimering för e-handel",
    "Produktbilder är kärninnehållet på en e-handelssajt och en av de vanligaste orsakerna till dålig PageSpeed-poäng. Optimera alla produktbilder: Konvertera till WebP-format (40–80% mindre filstorlek än JPEG utan märkbar kvalitetsförlust), specificera exakta bredd- och höjddimensioner i HTML-koden, implementera lazy loading för bilder utanför synfältet, och använd bildkomprimering automatiserat via Imagify eller Smush (WordPress-plugins).",
    "Alt-texter på produktbilder fyller en dubbel funktion: tillgänglighet (skärmläsare läser dem) och SEO (Google indexerar dem och kan visa dem i Google Bilder-sökning). Skriv beskrivande alt-texter som inkluderar produktnamn, varumärke och nyckelattribut: 'Nike React Infinity Run Flyknit 3 löparskor herr svart/vit storlek 42'.",
    "## E-handel och Core Web Vitals",
    "E-handelssajter med många produktbilder och externa scripts (rekommendationsmotorer, chat-widgets, analytics) är typiskt sämre på Core Web Vitals än enklare sajter. De vanligaste problemen är LCP orsakad av stora produktbilder ovanför fold, och CLS orsakad av externa scripts och annonser som laddar async och förflyttar layout-element.",
    "Åtgärda LCP-problem med LCP-bildpreload (lägg till en `<link rel='preload'>` för din startsidas hero-bild), bildstorlekarnas komprimering och CDN-leverans. Åtgärda CLS-problem genom att reservera space för dynamiskt laddade element (ange width och height på alla bilder i HTML).",
    "Kontakta oss för hjälp med e-handels-SEO och teknisk optimering för din webbutik i Västmanland."
  ],
  'konverteringsoptimering-hemsida-guide': [
    "## Sidladdningshastighet och CRO",
    "Sidladdningshastighet är en CRO-faktor, inte bara en SEO-faktor. Varje sekund extra laddningstid ökar bounce rate och minskar konverteringsgraden. Amazon publicerade att 100ms extra laddningstid minskade deras intäkter med 1 procent. För ett lokalt Västerås-företag innebär det att en sajt som tar 5 sekunder att ladda tappar en stor andel av sina potentiella leads.",
    "Kör Google PageSpeed Insights och åtgärda de viktigaste prestationsproblemen. För de flesta WordPress-sajter i Västerås är de viktigaste åtgärderna: bildkomprimering och WebP-konvertering, caching (W3 Total Cache eller WP Rocket), ta bort oanvända plugins, och defer icke-kritiskt JavaScript.",
    "## Live-chat och konvertering",
    "Live-chat ökar konverteringsgraden på de flesta sajter som implementerat det korrekt. Potentiella kunder som tvivlar eller har en specifik fråga kan få svar omedelbart istället för att lämna sajten och kanske aldrig komma tillbaka. Verktyg som Intercom, Tidio och HubSpot Live Chat har gratisnivåer som passar SME-företag.",
    "Timing och trigger-regler för din chat-widget påverkar konverteringen. En chat-popup som visas omedelbart på varje sida är irriterande och stängs snabbt. En popup som visas efter 30 sekunder på en prissida, eller när exitintent detekteras, är kontextuellt relevant och konverterar bättre.",
    "## Prissättningstransparens och konvertering",
    "En av de vanligaste CRO-diskussionerna för tjänstebolag är prissättningstransparens. Ska du visa priser eller 'kontakta oss för offert'? Data är tydlig: sajter som visar prisintervall konverterar fler besökare till kvalificerade leads. Besökare som inte vill betala ditt lägstapris filtrerar sig själva bort, och de som kontaktar dig är mer sannolika att konvertera.",
    "Du behöver inte ge exakta priser för komplexa projekt. Prisintervall ('Webbsajter från 15 000 kr'), paketpriser och 'vad påverkar priset'-sektioner ger tillräcklig transparens för att pre-kvalificera leads utan att binda dig till ett fast pris innan du förstår projektets scope.",
    "Kontakta LRH Konsult för hjälp med konverteringsoptimering av din hemsida."
  ],
  'teknisk-seo-guide-vasteras-2026': [
    "## HTTP/2 och HTTP/3 för bättre prestanda",
    "HTTP/2 och HTTP/3 är nyare versioner av HTTP-protokollet som ger signifikant prestandaförbättring för sajter med många resurser. HTTP/2 möjliggör multiplexing (flera filer laddas parallellt över samma anslutning), headerkomprimering och server push. HTTP/3 bygger på QUIC-protokollet och ger ytterligare förbättringar, speciellt på mobila nätverk.",
    "De flesta moderna hosting-tjänster stödjer HTTP/2 som standard. Kontrollera om din sajt använder HTTP/2 via ett verktyg som HTTP/2 Test (tools.geekflare.com). Om din server fortfarande kör HTTP/1.1 – kontakta din hostingleverantör om uppgradering.",
    "## AMP – är det fortfarande relevant?",
    "AMP (Accelerated Mobile Pages) – Googles ramverk för extremt snabba mobilsidor – är 2026 mindre relevant än det var 2018–2020. Google har avvecklat AMP som krav för Google News-inkludering och Top Stories-carousel. Moderna sajter som är korrekt optimerade för Core Web Vitals matchar eller överträffar AMP-prestanda utan att behöva ett separat AMP-ramverk.",
    "Om du har AMP implementerat men din sajt är väloptimerad, är det inte nödvändigt att ta bort det – men det är heller inte nödvändigt att investera i AMP för nya projekt. Fokusera istället på Core Web Vitals-optimering på din ordinarie sajt.",
    "## Progressive Web Apps (PWA) och SEO",
    "Progressive Web Apps är webbsajter som beter sig som native mobilappar – de kan installeras på hemskärmen, fungerar offline och ger en app-liknande upplevelse. Ur SEO-perspektiv är PWA neutral: Google indexerar PWA-sajter på samma sätt som vanliga webbsajter, förutsatt att innehållet är server-side renderat eller prerenderat.",
    "PWA är mest relevant för företag med högt mobile-engagemang och frekventa återbesök – e-handel, nyhetsajter, bokningsplattformar. För ett lokalt Västerås-tjänsteföretag med en presentationssajt är PWA-funktionalitet sannolikt överkurs.",
    "Kontakta LRH Konsult för en teknisk SEO-audit och förbättringsplan för din hemsida."
  ],
  'innehallsstrategi-b2b-foretag-vastmanland': [
    "## SEO-driven innehållsproduktion",
    "Innehållsstrategi och SEO-strategi ska vara integrerade, inte separata discipliner. Varje inlägg du planerar att skriva bör ha ett primärt sökordskluster det riktar in sig mot. Det innebär inte att du skriver för sökmotorer – det innebär att du skriver om de ämnen som dina potentiella kunder faktiskt söker efter.",
    "Processen: börja med sökordsanalys för att identifiera de frågor din målgrupp i Västmanland googlar, välj de ämnen med bäst balans av sökvolym och konverteringsintention, planera innehållet som svarar på sökarens fråga bättre än befintliga sökresultat, och optimera tekniskt (title-tagg, H1, strukturerad data). SEO och innehållskvalitet samverkar – bra innehåll rankar bättre.",
    "## Intern länkning i innehållsstrategin",
    "Varje nytt innehållsstycke du publicerar ska länka internt till relevanta tjänstesidor och vice versa. Det skapar ett sammankopplat innehållsnätverk där sökmotorerna förstår relationerna mellan ditt innehåll och dina tjänster, och där besökare guidas från utbildande innehåll till konverterande sidor.",
    "En enkel regel: varje blogginlägg ska ha minst 2–3 interna länkar till relaterade sidor (andra blogginlägg, relevanta tjänstesidor). Varje tjänstesida ska länka till 2–3 relevanta blogginlägg som ger ytterligare kontext och djup.",
    "## Repurposing av innehåll – maximera varje investering",
    "Ett välskrivet blogginlägg på 1500 ord kan återanvändas som: en infografik som delar 5 nyckelinsikter, ett LinkedIn-inlägg med en vinkel från artikeln, ett avsnitt av din podcast, en e-postnyhetsbrev-version, en serie kortare Instagram-posts, och en presentation för ett lokalt nätverk-event.",
    "Content repurposing maximerar ROI på din innehållsinvestering och når din målgrupp på olika plattformar via det format de föredrar. Planera repurposing-strategin i din redaktionella kalender – avgör vid publicering vilka format du ska återpublicera innehållet i och när.",
    "Kontakta oss för hjälp med en innehållsstrategi som driver verkliga affärsresultat för ditt B2B-företag i Västmanland."
  ],
  'google-analytics-4-guide-vasteras': [
    "## Explorations-rapporten – djupdyk i din data",
    "GA4:s Explorations-rapport (tidigare kallad Analysis Hub) är ett kraftfullt verktyg för avancerad dataanalys. Det låter dig bygga anpassade rapporter som kombinerar dimensioner och mätetal på sätt som standardrapporterna inte tillåter.",
    "Användbara explorations för Västerås-företag är: Funnel Exploration som visualiserar var besökare faller av i din konverteringstratt (från landningssida till kontaktformulär-inlämning), Segment Overlap som jämför beteendet hos olika besökarsegment (t.ex. organisk trafik vs Google Ads-trafik), och User Journey som visualiserar den typiska vägen besökare tar genom din sajt.",
    "## GA4 och Google Search Console integration",
    "Genom att koppla Google Search Console till GA4 kan du se sökordsdata från GSC direkt i GA4-gränssnittet. Det ger dig ett heltäckande perspektiv: du ser sökordet som genererade klicket (från GSC), och du ser vad besökaren sedan gjorde på sajten (från GA4). Det är ett kraftfullt sätt att förstå sambandet mellan sökord och konverterande beteende.",
    "Navigera till Admin > Property Settings > Search Console i GA4 och följ kopplingsinstruktionerna. GSC-data visas i GA4 under rapporten 'Acquisition > Search Console > Queries'.",
    "## Anpassade rapporter för ditt Västerås-företag",
    "Standardrapporterna i GA4 är bra men generella. Anpassade rapporter låter dig sätta upp en rapportera som är specifikt anpassad för ditt företags viktigaste mätetal. Skapa en anpassad rapport med trafikkälla, landningssida och konverteringsgrad för att se vilka SEO-sidor som driver flest leads. Skapa en annan rapport med enhetstyp och konverteringsgrad för att identifiera om du har ett mobilt CRO-problem.",
    "Spara dina mest använda rapporter som favoriter i GA4-navigeringsmenyn för snabb åtkomst. Schemalägg regelbundna rapportutskick (veckovis eller månadsvis) till din e-post för att hålla koll på trenderna utan att behöva logga in i GA4 manuellt.",
    "Kontakta LRH Konsult för ett kostnadsfritt samtal om GA4-implementation och datadrivet beslutsfattande för ditt Västerås-företag."
  ],
  'lankbygge-lokal-seo-vastmanland-guide': [
    "## Länkprospektering – hitta rätt länkmöjligheter",
    "Länkprospektering innebär att systematiskt identifiera sajter som kan och bör länka till din sajt. Det finns flera effektiva metoder. Konkurrenternas länkanalys: Analysera vilka sajter som länkar till dina närmaste konkurrenter i Västerås men inte till dig – dessa är lämpliga att kontakta. Niche-sök: Sök på 'bästa [din tjänst] Västerås' och identifiera branschlistsidor som inte har listat dig. Länkreciprocitet: Sajter du länkar till från din blogg och resurssidor är naturliga kandidater för ett reciprokt länkbygge.",
    "Verktyg som Ahrefs Content Explorer och BuzzSumo hjälper dig hitta relevanta sajter och artikel som länkat till liknande innehåll – perfekta länkprospekter för outreach.",
    "## Outreach – bra och dålig länkbygge-kommunikation",
    "Länkbygge-outreach är en kommunikationsuppgift som kräver personalisering och genuint värde för mottagaren. Det vanligaste misstaget är mass-outreach med mallar som börjar med 'Dear Webmaster' – det sorteras direkt som spam.",
    "Effektiv outreach är personaliserad: visa att du läst deras sajt, förklara varför en länk till din resurs skulle ge värde till deras läsare, och gör det enkelt för dem att säga ja. Målet är inte att tigga om en länk – det är att erbjuda en utbyte av värde. Svarsfrekvensen för välskriven personaliserad outreach är typiskt 5–15 procent, jämfört med under 1 procent för generiska mallmejl.",
    "## Linkens attribut – follow vs nofollow",
    "Bakåtlänkar kan vara antingen 'follow' (standard) eller 'nofollow' (attributet rel='nofollow'). Follow-länkar passar PageRank och rankingvärde. Nofollow-länkar passerar inget direkt rankingvärde, men de ger fortfarande trafik och varumärkeskännedom och kan indirekt stärka din online-auktoritet.",
    "Pressreleaselänkar, reklamlänkar och sponsrade inlägg ska märkas som rel='sponsored' eller rel='nofollow' enligt Googles riktlinjer. Att inte följa dessa riktlinjer kan leda till manuella åtgärder från Google.",
    "Kontakta LRH Konsult för en professionell länkbyggestrategi för ditt Västerås-företag."
  ],
  'seo-audit-hemsida-checklista-2026': [
    "## Sida-för-sida-audit av dina viktigaste sidor",
    "En grundlig SEO-audit inkluderar en manuell granskning av dina 10 viktigaste sidor (startsida, tjänstesidor, kontaktsida, viktigaste blogginlägg). För varje sida, kontrollera: Är H1 unik och sökordsrelevant? Är title-taggen under 60 tecken och sökordsoptimerad? Har sidan en unik meta-description? Är innehållet tillräckligt djupt och unikt? Finns det interna länkar från och till sidan?",
    "Dokumentera fynden i ett kalkylblad med en rad per sida och en kolumn per kontrollfaktor. Det ger dig en visuell överblick av var de vanligaste problemen finns och hur prioriteringarna ser ut.",
    "## Konkurrensgap-analys",
    "En SEO-audit är mer komplett om den inkluderar en konkurrensgap-analys. Det innebär att jämföra din sajts sökord, bakåtlänkar och innehållsportfölj mot dina 3–5 närmaste SEO-konkurrenter i Västerås. Frågor att besvara: Vilka sökord rankar dina konkurrenter för som du inte gör? Var är skillnaden i domänauktoritet och bakåtlänksprofil? Vilken typ av innehåll driver mest trafik till dina konkurrenter?",
    "Konkurrensgap-analysen omvandlar en statisk audit till en handlingsplan med konkreta möjligheter. Det är skillnaden mellan att veta 'vi har SEO-problem' och 'dessa specifika sökord och dessa specifika innehållsluckor är vad vi ska prioritera de kommande 6 månaderna'.",
    "## Lokal SEO-specifik audit",
    "En lokal SEO-audit för ett Västerås-företag inkluderar specifika kontroller utöver generell teknisk SEO. Kontrollera Google Business Profile-status och kompletthetsgrad. Verifiera NAP-konsistens across alla digitala kanaler (hemsida, GBP, sociala medier, katalogsajter). Kontrollera om du har LocalBusiness-schema på din kontaktsida. Analysera dina kunders GBP-recensioner och svarshistorik.",
    "Lokal SEO-audits är extra värdefulla att köra inför säsongshögsäsong (t.ex. inför sommaren för en resebyrå eller inför november för en elektriker som vill fånga julbelysningsinstallationer) för att säkerställa att din lokala synlighet är maximerad under perioden med högst sökvolymer.",
    "Kontakta LRH Konsult för en fullständig SEO-audit och skräddarsydd åtgärdsplan för din hemsida."
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
