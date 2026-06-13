'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/blogPosts.json');
const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const additions = {
  'sokmotoroptimering-vasteras-komplett-guide': [
    "## Konkurrentanalys för SEO i Västerås",
    "Att förstå vad dina konkurrenter i Västerås gör rätt är lika viktigt som att förstå vad du gör fel. En konkurrentanalys identifierar vilka sökord de rankar för, vilka sidor som driver deras trafik och var deras backlink-profil kommer ifrån. Med den informationen kan du sätta realistiska benchmarks och identifiera möjligheter att gå om dem.",
    "Verktyg som Ahrefs och SEMrush ger dig detaljerad data om dina SEO-konkurrenters styrkor och svagheter. Du kan se exakt vilka sökord de rankar för, vilken position de har, och hur deras trafik förändrats över tid. Det är ovärderlig information för att prioritera dina egna SEO-insatser.",
    "## Schema Markup och strukturerad data för Västerås-företag",
    "Strukturerad data (schema.org markup) hjälper Google förstå innebörden av ditt innehåll, inte bara orden. För ett lokalt Västerås-företag är de viktigaste schema-typerna LocalBusiness (med adress, öppettider och telefonnummer), Organization (med logotyp och kontaktuppgifter), BlogPosting (för blogginlägg), och FAQPage (för sidor med vanliga frågor och svar).",
    "Rätt implementerat schema kan leda till rika sökresultat (rich snippets) – extra visuella element i sökresultaten som stjärnor för recensioner, öppettider och FAQ-svar direkt i söksidan. Rich snippets ökar click-through rate (CTR) markant, vilket ger mer trafik även utan en höjd rankingposition.",
    "## Intern länkstruktur – en underskattad SEO-faktor",
    "Interna länkstrukturer – hur du länkar mellan dina egna sidor – är en av de mest underskattade SEO-faktorerna. Varje intern länk kommunicerar till Google: 'den här sidan är viktig, och den är relaterad till den här sidan.' En logisk intern länkstruktur hjälper Google crawla din sajt effektivt och distribuerar 'länkkraft' (PageRank) från dina starka sidor till sidor du vill förbättra.",
    "En enkel princip: länka ofta och med relevanta ankarltexter från dina högtrafic-sidor till de sidor du vill ranka. Om din blogg genererar mycket trafik, se till att ha interna länkar från blogginläggen till dina viktigaste tjänstesidor.",
    "## Mobiloptimering och Core Web Vitals för Västerås-sajter",
    "Google använde sedan 2021 Core Web Vitals som rankingfaktor. Det är tre mätetal som mäter hur snabbt och stabilt din sajt laddar: LCP (Largest Contentful Paint) ska vara under 2,5 sekunder, INP (Interaction to Next Paint) ska vara under 200 millisekunder, och CLS (Cumulative Layout Shift) ska vara under 0,1.",
    "Att förbättra Core Web Vitals innebär typiskt att optimera bildstorlekar (konvertera till WebP/AVIF), ta bort render-blocking JavaScript, använda lazy loading för bilder utanför synfältet, och säkerställa att layout-element inte förflyttar sig under laddning.",
    "## Lokala citeringar och NAP-konsistens",
    "Lokala citeringar – omnämnanden av ditt företags namn, adress och telefonnummer (NAP) på andra webbplatser – är en viktig rankingfaktor för lokal SEO i Västerås. Google använder citeringar för att verifiera att ditt företag faktiskt finns på den adress du anger.",
    "Säkerställ att ditt NAP är exakt identiskt på alla ställen du finns online: din hemsida, Google Business Profile, Eniro, Hitta.se, 118700 och branschspecifika kataloger. Även små skillnader (Storgatan 5 vs Storgatan 5A) kan förvirra Google och försvaga din lokala ranking.",
    "Kontakta oss för en gratis SEO-audit av din sajt. Vi identifierar de viktigaste förbättringsåtgärderna och sätter upp en prioriterad handlingsplan."
  ],
  'webbyra-vasteras-guide-valjra-ratt': [
    "## Hur du utvärderar byråns tekniska kompetens",
    "De flesta företagsägare i Västerås saknar teknisk bakgrund för att bedöma om en webbyrå verkligen är duktig. Här är några praktiska tester du kan göra utan teknisk förkunskap: Kör en av byråns kundernas sajter genom Google PageSpeed Insights. Ser du 40–50 i poäng på mobil är det en byrå som inte prioriterar prestanda. Kör sajten genom web.dev och kontrollera Core Web Vitals. Granska källkoden (högerklicka, 'Visa sidkälla' i webbläsaren) för att se om sajten använder semantisk HTML.",
    "En annan enkel test: fråga byrån vad de levererar för att säkerställa att sajten rankar i Google. Om de svarar enbart 'SEO-vänlig kod' utan att nämna on-page-optimering, strukturerad data, sitemap-inlämning och Search Console är svaret ofullständigt.",
    "## Kontraktsgenomgång – vad du ska titta på",
    "Läs alltid kontraktet noga innan du skriver på. De viktigaste klausulerna att kontrollera är: äganderätt (vem äger koden och designen efter projektet är klart?), betalningsvillkor och milestones (undvik att betala allt i förskott), vad som händer om projektet överstiger budget eller tidplan, revisionsomfång (hur många ändringsrundor ingår?), och exit-klausuler (hur avslutar ni samarbetet om ni inte är nöjda?).",
    "En välformulerad kontrakt skyddar båda parter och förebygger konflikter. En byrå som är ovillig att diskutera kontraktet eller lägga till rimliga skyddsklausuler för dig som kund är en varningssignal.",
    "## Referensuppdrag – fråga rätt frågor",
    "Be om 2–3 referensuppdrag och ta faktiskt kontakt med dem. De flesta byråer ger dig referenserna som en formalitet med förväntan att du inte ringer – men om du faktiskt ringer, ställ specifika frågor: Var de nöjda med kommunikationen under projektet? Levererades projektet i tid och inom budget? Vad fungerade bra och vad skulle de önska hade gått annorlunda? Skulle de anlita byrån igen?",
    "Autentiska svar på dessa frågor ger mer information om byrån än all marknadsföring de producerat.",
    "## Onboarding och kommunikation under projektet",
    "En professionell byrå har en tydlig onboarding-process: ett kickoff-möte, ett delat projektverktyg (Notion, Basecamp, Trello eller liknande), en kommunikationskanal för löpande dialog och en definierad process för att lämna feedback. Byråer utan dessa strukturer förlitar sig på oregelbundna e-postkedjor och ad hoc-kommunikation – vilket leder till missförstånd och förseningar.",
    "Klargör kommunikationsförväntningarna tidigt. Hur snabbt svarar byrån på frågor? Vem är din primära kontakt? Hur bokar du möten? En byrå med tydliga svar på dessa frågor visar att de har erfarenhet av att hantera kundrelationer professionellt.",
    "Vi på LRH Konsult är en webbyrå i Västerås med ett strukturerat projektflöde, transparent kommunikation och en portfölj av nöjda kunder i Västmanland. Hör av dig för ett kostnadsfritt samtal."
  ],
  'google-ads-vasteras-guide-2026': [
    "## Konverteringsspårning – grunden för väloptimerade kampanjer",
    "Utan konverteringsspårning flyger du i blindo. Du vet hur mycket du spenderar men inte hur mycket du tjänar. Korrekt konverteringsspårning i Google Ads innebär att varje önskad handling på din sajt – ett ifyllt kontaktformulär, ett telefonsamtal, ett köp – spåras tillbaka till den specifika annons och det specifika sökord som ledde till handlingen.",
    "Med denna data kan du se vilka kampanjer, annonsgrupper och sökord som faktiskt genererar affärer – och allokera mer budget till dem. Utan konverteringsspårning lägger du lika mycket på sökord som konverterar som på sökord som aldrig ger en enda kund.",
    "## Dynamiska sökannonser (DSA) för Västerås-företag",
    "Dynamiska sökannonser (DSA) är en Google Ads-funktion som automatiskt skapar annonser baserat på innehållet på din hemsida. Google crawlar din sajt och matchar sökfrågor mot relevant innehåll – utan att du behöver välja sökord manuellt. Det är ett effektivt sätt att fånga long-tail-sökningar som du inte tänkt på, och att täcka in ett bredare sökordsunivers.",
    "DSA fungerar bäst som komplement till dina manuella sökkampanjer. Kör dem med en lägre budget och separata kampanjer, och använd negativa sökord aggressivt för att filtrera bort irrelevanta sökningar.",
    "## Remarketing – nå tillbaka till besökare som lämnade",
    "Statistiskt sett lämnar 97 procent av besökarna din sajt utan att konvertera. Remarketing låter dig nå tillbaka till dessa besökare med riktade annonser när de fortsätter browsa webben. Eftersom de redan känner till ditt varumärke är konverteringsgraden för remarketing-annonser typiskt 2–3 gånger högre än för kalla kampanjer.",
    "Google Ads remarketing fungerar via en pixel (ett litet skript) på din sajt som sätter en cookie i besökarens webbläsare. Du kan sedan visa annonser specifikt för dessa personer på sajter i Googles Display Nätverk. Du kan segmentera remarketing-listor baserat på vilka sidor de besökte – till exempel visa en specifik annons till personer som besökt din prissida men inte fyllt i kontaktformuläret.",
    "## Smart Bidding och automatisk budgivning",
    "Google Ads erbjuder automatiska budgivningsstrategier som använder maskininlärning för att optimera dina bud i realtid. Strategier som 'Maximera konverteringar' och 'Mål-CPA' (Target Cost Per Acquisition) justerar automatiskt dina bud för varje auktion baserat på sannolikheten att en specifik sökning leder till en konvertering.",
    "Smart Bidding fungerar bäst när kampanjen har tillräcklig historisk data – minst 30–50 konverteringar per månad per kampanj. Nya kampanjer bör starta med manuell budgivning för att samla data, och sedan gradvis övergå till automatisk budgivning när dataunderlag finns.",
    "Kontakta oss för hjälp med Google Ads-kampanjer i Västerås. Vi sätter upp korrekt konverteringsspårning, optimerar kampanjstrukturen och hjälper dig maximera avkastningen på din annonskrona."
  ],
  'hemsida-foretag-vasteras-guide': [
    "## Google Analytics och Search Console – din hemsidas kontrollpanel",
    "En hemsida utan analysmätning är en investering utan ROI-spårning. Google Analytics 4 (GA4) och Google Search Console (GSC) är gratis verktyg som tillsammans ger dig en komplett bild av hur din sajt presterar.",
    "Google Analytics 4 spårar besökardata: hur många besöker din sajt, varifrån de kommer (Google, direkttrafik, sociala medier), vilka sidor de besöker, hur länge de stannar och om de konverterar. Med GA4 kan du sätta upp specifika konverteringsmål och mäta hur effektivt din sajt driver affärsmål.",
    "Google Search Console ger dig data om din sajts synlighet i Google: vilka sökord som genererar visningar och klick, din genomsnittliga position för olika söktermer, om Google kan crawla och indexera din sajt korrekt och om det finns tekniska problem som påverkar din synlighet.",
    "## Upphandlingsprocessen – steg för steg",
    "En strukturerad upphandlingsprocess minskar risken för ett misslyckat projekt. Börja med att definiera dina mål och krav – inte tekniska specifikationer, utan affärsmål: 'Jag vill att sajten ska generera 10 förfrågningar per månad' är mer användbart än 'Jag vill ha en snygg responsiv hemsida'.",
    "Begär offerter från minst 3 olika leverantörer för att få en känsla för marknaden. Jämför inte bara pris – jämför vad som ingår, hur processen ser ut och vilket intryck du får av byrån i kommunikationen. Hur snabbt svarar de? Ställer de intelligenta frågor om ditt projekt eller levererar de en standardoffert utan att ha förstått dina behov?",
    "Välj baserat på total value, inte lägst pris. Den billigaste offertan resulterar sällan i det bästa resultatet. Räkna med att investera i ett projekt som faktiskt kan leverera den affärsnytta du söker.",
    "## GDPR och cookiehantering på din hemsida",
    "GDPR-regelverket kräver att din hemsida hanterar besökarnas personuppgifter på ett korrekt och transparent sätt. För de flesta Västerås-företag innebär det att ha en uppdaterad integritetspolicy, ett cookie-consent-verktyg som låter besökaren välja vilka cookies de accepterar, och att analytics-verktyg som Google Analytics är konfigurerade för att respektera användarens val.",
    "Cookie-compliance är inte bara en lagfråga – det är också en trovärdighetsfaktor. Sajter med välimplementerad och transparent cookie-hantering signalerar att de tar datasäkerhet på allvar, vilket stärker förtroendet hos besökare.",
    "Hör av dig för ett gratis samtal om din hemsida i Västerås. Vi hjälper dig från idé till lansering med fokus på affärsnytta och mätbara resultat."
  ],
  'digital-marknadsforing-vasteras-guide': [
    "## Marketing automation för Västerås-företag",
    "Marketing automation innebär att automatisera repetitiva marknadsföringsuppgifter – som att skicka ett välkomstmejl till en ny prenumerant, ett follow-up-mejl 3 dagar efter en kontaktformsifyllning, eller ett erbjudande till kunder som inte köpt på 6 månader. Rätt implementerat kan marketing automation förbättra konverteringsgraden dramatiskt utan att kräva manuell tid.",
    "Verktyg som HubSpot, ActiveCampaign och Mailchimp erbjuder marketing automation-funktionalitet. För ett litet Västerås-företag som just börjar med digital marknadsföring räcker Mailchimp Free-plan för att komma igång med automatiserade e-postflöden.",
    "## Influencer marketing för lokala Västerås-företag",
    "Influencer marketing associeras ofta med stora varumärken och nationella kampanjer, men det finns en skalad version som fungerar utmärkt för lokala Västerås-företag: mikro-influencers och lokal community-building.",
    "En matbloggare i Västerås med 5 000 följare på Instagram är en mikro-influencer. Om du driver en restaurang eller delikatessbutik och erbjuder henne en avsmakningskväll i utbyte mot ett inlägg, når du direkt hennes engagerade lokala målgrupp till en minimal kostnad. Det är långt ifrån de sex-siffriga summor som nationella influencer-kampanjer kostar.",
    "## Video marketing som växande kanal",
    "Video är den snabbast växande innehållsformen online, och den ger högst engagemang i sociala medier. YouTube är världens näst största sökmotor – potentiella kunder söker även där efter lösningar på sina problem. Korta 60-sekunders-videos på Instagram Reels och TikTok kan nå tusentals lokala Västerås-bor utan annonseringskostnad.",
    "Du behöver inte en professionell filmstudio eller dyr utrustning. En smartphone med bra ljus och ett extern mikrofon (200–400 kr) räcker för att producera videos av tillräckligt hög kvalitet för sociala medier. Det viktigaste är att innehållet är genuint och värdefullt – äkthet väger tyngre än produktion i sociala medier-algoritmer.",
    "## Säsongs- och lokalanpassad marknadsföring",
    "Digital marknadsföring i Västerås bör anpassas till lokala säsongsmönster. Byggföretag ser fler sökningar på renoveringstjänster under vår och höst. Restauranger i centrum ser ökad trafik kring Västerås Marknaden och andra lokala events. Skidanläggningar i Skinnskatteberg genererar högt sökintresse under vintermånaderna.",
    "Planera din digitala marknadsföring i förväg med ett årskalendarium som tar hänsyn till dessa säsongsmönster. Öka annonseringsbudgeten inför högsäsong, publicera relevant innehåll i förväg för att bygga SEO-momentum, och skapa kampanjer kopplade till lokala event och högtider.",
    "Kontakta oss för att diskutera en helhetsstrategi för digital marknadsföring för ditt Västerås-företag."
  ],
  'seo-eskilstuna-lokal-guide-2026': [
    "## SEO för specifika branscher i Eskilstuna",
    "Branschspecifik SEO kräver djup förståelse för hur din målgrupp söker. En hantverkare i Eskilstuna bör optimera för 'snickare Eskilstuna', 'elektriker Eskilstuna akut' och 'rörmokare Strängnäs', medan en advokatbyrå bör fokusera på 'familjerätt Eskilstuna', 'arbetsrätt advokat Södermanland' och 'bostadsrättsavtal Eskilstuna'. Sökintentionen och sökordsfrasyerna är fundamentalt olika.",
    "Restauranger och caféer i Eskilstuna gynnas enormt av optimerade Google Business Profile-profiler med regelbundna inlägg, foton av maten och svar på recensioner. Lokala sökningar som 'restaurang Eskilstuna centrum' och 'brunch Eskilstuna söndag' drivs primärt av GBP-rankning snarare än traditionell organisk sökning.",
    "## Länkbygge i Södermanland",
    "Länkbygge i Södermanlands-marknaden innebär att skapa relationer med andra lokala aktörer som kan länka till din sajt. Eskilstuna Kuriren, Eskilstuna Direkt och andra lokala mediasajter har hög lokal auktoritet hos Google. Att få en omnämning och länk i en lokal nyhet eller reportage om ditt företag kan ha en mätbar effekt på din lokala ranking.",
    "Branschorganisationer, lokala handelskammaren och Eskilstuna kommuns näringsliv-sidor är också värdefullt länkade resurser. Se till att ditt företag är korrekt listat i kommunens och handelskammarens företagskataloger.",
    "## E-handels-SEO i Eskilstuna",
    "E-handel från Eskilstuna-baserade företag kräver en bredare geografisk SEO-strategi. En webbutik konkurrerar inte enbart lokalt – du konkurrerar nationellt och ibland globalt. Det kräver produktsidas-SEO (unika produktbeskrivningar, schema markup för produkter, korrekt kanonisering), kategoriside-optimering, och en strukturerad intern länkstruktur som prioriterar dina mest lönsamma kategorier.",
    "Om du kombinerar fysisk butik i Eskilstuna med en webbutik bör du implementera lokal schema markup och Google Business Profile på ett sätt som tydliggör den fysiska adressen, medan webbutikssidorna optimeras för bredare nationella söktermer.",
    "Kontakta oss för en konsultation om lokal SEO för ditt företag i Eskilstuna och Södermanland."
  ],
  'webbdesigner-vasteras-anlita-guide': [
    "## Design för mobil – vad du måste kräva",
    "Mobilanpassning är inte ett alternativ 2026 – det är ett grundkrav. Men det räcker inte att sajten 'fungerar på mobil'. En professionell mobildesign innebär touchvänliga knappar med tillräcklig ytstorlek (minst 44x44px), typography som läses enkelt utan att zooma in, formulär optimerade för mobilinmatning, och bilder som laddar snabbt utan att offra kvalitet.",
    "Be alltid din webbdesigner att visa designmockups för mobil (375px viewport) parallellt med skrivbordsdesignen. En designer som enbart visar skrivbordsdesign och säger 'det anpassar sig automatiskt' utan att visa hur, tar inte mobilanvändaren på allvar.",
    "## UX-testning och användartester",
    "En bra webbdesign är inte subjektiv – det finns mätbara sätt att utvärdera om designen faktiskt fungerar för din målgrupp. UX-testning innebär att du observerar riktiga användare navigera din sajt och noterar var de fastnar, vad de missar och vad som förvirrar dem.",
    "Enkel UX-testning kan göras med verktyg som Hotjar, som spelar in besökares musrörelser och klick som en heatmap. Du kan se exakt vad besökare klickar på, hur långt de scrollar och var de lämnar sidan. Det ger mer värdefull information om din design än vilken expert-åsikt som helst.",
    "Be din webbdesigner att inkludera en Hotjar-installation och en initial heatmap-analys ett par veckor efter lansering. Det ger data att basera framtida designförbättringar på.",
    "## Tillgänglighet och inkluderande design",
    "Tillgänglighetsoptimering (WCAG-compliance) är en etisk förpliktelse och en SEO-fördel. Google premierar sajter med korrekt semantisk HTML – vilket är grunden i WCAG-tillgänglighet. En tillgänglig sajt är en välstrukturerad sajt, vilket gynnar sökmotorers förmåga att tolka och indexera den korrekt.",
    "Säkerställ att din webbdesigner levererar en sajt med korrekt alt-texter på alla bilder, tillräcklig textkontrast (minst 4.5:1 för normaltext), tangentbordsnavigering för alla interaktiva element och semantisk HTML-struktur med tydlig rubrikhierarki.",
    "Vi på LRH Konsult erbjuder webbdesign och webbutveckling med inbyggd tillgänglighet, mobiloptimering och konverteringsfokus. Kontakta oss för ett samtal om ditt projekt i Västerås."
  ],
  'wordpress-hemsida-pris-guide-2026': [
    "## Prisjämförelse: Bygga WordPress-sajt själv vs anlita en byrå",
    "Kan du bygga din WordPress-sajt själv och spara pengar? Ja – om du har tid och teknisk aptit. Elementor Pro eller Divi-byggaren kostar 700–1 500 kr per år och ger dig drag-and-drop-designverktyg som gör det möjligt för icke-tekniska användare att bygga acceptabla sajter.",
    "Nackdelen med self-service-alternativet är tid och opportunity cost. Den tid du lägger på att lära dig WordPress, lösa tekniska problem och bygga sajten är tid du inte lägger på din kärnverksamhet. Om din timpenning är 500 kr och du lägger 50 timmar på att bygga en sajt som du kunde köpt för 20 000 kr, är det ett plusminus-noll-spel – och du har sannolikt fått en sämre sajt.",
    "## Vad som påverkar priset utöver grundsajten",
    "E-handelsfunktionalitet (WooCommerce) är den enskilt dyraste funktionen att lägga till en WordPress-sajt. En enkel WooCommerce-butik med 10–50 produkter och standardcheckout kostar 15 000–30 000 kr extra ovanpå baissajten. Mer komplex e-handel med produktvarianter, prenumerationsprodukter och anpassad checkout kan kosta 50 000 kr extra.",
    "Flerspråksstöd med WPML eller Polylang kostar extra i plugin-licens (1 000–2 000 kr/år) och extra i implementationstid (10–20 timmar beroende på mängden innehåll). Om du planerar en flerspråkig sajt från start, kommunicera det i din brief – det påverkar strukturen.",
    "Prestationsoptimering ovanpå en standardinstallation kan vara en separata post. En väloptimerad WordPress-sajt som levererar 95+ i PageSpeed på mobil kräver konfiguration av caching, bildoptimering, kritisk CSS-extrahering och lazy loading. Det ingår i ett professionellt projekt men kan kostar extra hos byråer som jobbar med premiumpaket.",
    "## Underhållsavtal – varför det är nödvändigt",
    "WordPress-ekosystemet uppdateras kontinuerligt. WordPress-kärnan, teman och plugins släpper regelbundet säkerhetsuppdateringar som behöver installeras. En sajt som inte uppdateras i 6–12 månader har sannolikt säkerhetssårbarheter som hackare aktivt utnyttjar.",
    "Utöver säkerhet kan föråldrade plugins orsaka kompatibilitetsproblem med WordPress-kärnan, vilket kan bryta funktionalitet. Det är inte ovanligt att ett plugin-update krockar med ett tema-update och skapar ett vitt fönster (WSOD – White Screen of Death) som gör sajten oåtkomlig.",
    "Ett professionellt underhållsavtal eliminerar dessa risker. Vi hanterar alla uppdateringar systematiskt, tar en backup innan varje uppdatering och testar kritisk funktionalitet efteråt. Om något går fel rullar vi tillbaka och löser problemet – utan att du ens behöver veta om det.",
    "Kontakta oss för en transparent offert på din WordPress-sajt i Västerås. Vi levererar inom budget och tidplan."
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
