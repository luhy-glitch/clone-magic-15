import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const TAKEAWAYS: Record<string, string[]> = {
  // Post titles mapped to curated key takeaways from PDF
  "Så nådde jag 100/100 PageSpeed – en teknisk guide": [
    "Målsättning: Att uppnå maximal prestanda (100/100) för att bevisa styrkan i Next.js.",
    "Teknisk metod: Implementering av AVIF-bilder och 'Critical CSS Inlining' för att kapa laddtider under 1,5 sekunder.",
    "Resultat: En blixtsnabb användarupplevelse med 0 millisekunder i Total Blocking Time (TBT).",
    "Affärsnytta: Högre förtroende, bättre konvertering och en direkt rankningsfördel i Västmanland.",
  ],
  "Komplett guide till digital närvaro i Mälardalen": [
    "Navet: Hemsidan är centrum för all digital aktivitet och bör nå 100/100 i PageSpeed.",
    "SEO: Fungerar som en långsiktig tillväxtmotor som genererar leads automatiskt.",
    "Lokalitet: Google Business Profile är avgörande för synlighet i lokala kartresultat.",
    "Strategi: Analys och datadrivna beslut är nödvändiga för kontinuerlig förbättring.",
  ],
  "Framtidssäkra ditt företag i Mälardalen med React": [
    "Teknikval: React erbjuder en framtidssäker grund som används av världens största företag.",
    "Prestanda: En React-sajt ger en omedelbar fördel genom laddtider under en sekund.",
    "Säkerhet: Arkitekturen eliminerar vanliga säkerhetshål som finns i traditionella CMS.",
    "Skalbarhet: Enkel utbyggnad av funktioner utan att prestandan försämras över tid.",
  ],
  "Lokal sökmotoroptimering i Västmanland 2026": [
    "Fokus 2026: Google prioriterar nu teknisk prestanda och lokal relevans högre än någonsin.",
    "AI-sök: Stark positionering krävs för att bli citerad i AI-genererade sökresultat.",
    "E-E-A-T: Unikt och lokalt förankrat innehåll är nyckeln till auktoritet.",
    "Röstsök: Strukturering för naturligt språk och FAQ-schema blir kritiskt för lokala frågor.",
  ],
  "Webbutveckling i Eskilstuna – från idé till lansering": [
    "Process: Från strategisk planering och sökordsanalys till en färdig, konverterande sajt.",
    "Teknik: Användning av React och Next.js för 100/100 i PageSpeed som standard.",
    "Lokalt fokus: Innehåll och metadata optimeras specifikt för Eskilstuna och Södermanlands län.",
    "Lansering: Inkluderar full teknisk testning och verifiering av Core Web Vitals.",
  ],
  "Digital tillväxt för småföretag i Mälardalen": [
    "Investering: Hemsidan ses som en aktiv säljare tillgänglig dygnet runt.",
    "Lokal SEO: Möjlighet att dominera lokala sökresultat med relativt små medel.",
    "Mobilitet: Över 60 % av sökningarna sker via mobilen, vilket kräver perfekt mobilanpassning.",
    "Auktoritet: Personligt innehåll och kundrelationer särskiljer småföretag från anonyma jättar.",
  ],
  "Varför Västmanlands företag behöver en modern hemsida": [
    "Marknad: Digital forskning föregår nästan alla lokala köpbeslut 2026.",
    "Modernitet: En modern sajt laddar under 1,5 sekunder och är byggd med säker arkitektur.",
    "Kostnad: En föråldrad hemsida kostar i form av förlorade leads och sämre ranking.",
    "Förtroende: Professionell design bygger omedelbar trovärdighet vid första kontakten.",
  ],
  "Så dominerar du Google i Enköping och Uppsala län": [
    "Konkurrens: En fokuserad insats i Enköping kan ge snabba resultat på grund av måttlig konkurrens.",
    "Lokalitet: Google Business Profile är hörnstenen för synlighet i Uppsala län.",
    "Struktur: Dedikerade landningssidor för lokala tjänster stärker relevansen.",
    "Social Proof: Recensioner är en avgörande rankingfaktor i de lokala kartresultaten.",
  ],
  "Webbutveckling i Enköping – din lokala digitala partner": [
    "Position: Enköpings läge i Uppsala län kräver en specifik regional SEO-strategi.",
    "Prestanda: Next.js-teknik ger 100/100 PageSpeed och en tydlig fördel mot WordPress-sajter.",
    "Geografi: JSON-LD implementeras för att korrekt identifiera staden inom Uppsala län.",
    "UX: Mobile-first-design säkerställer att lokala användare på språng kan navigera enkelt.",
  ],
  "SEO-strategi för företag i Eskilstuna": [
    "Synlighet: SEO är den mest kritiska kanalen för att attrahera nya kunder i Eskilstuna.",
    "Noggrannhet: Korrekt identifiering av Södermanland som region är ett krav för lokal ranking.",
    "Teknik: React-baserad webbutveckling ger den tekniska grund Google premierar.",
    "Innehåll: Djupgående lokalt innehåll bygger auktoritet och rankar bättre.",
  ],
  "Lokala SEO-tips för företag i Västmanland": [
    "Konstans: NAP-information (namn, adress, telefon) måste vara identisk överallt online.",
    "Innehåll: Skapa specifika landningssidor för orter som Västerås, Sala och Köping.",
    "Omdömen: Systematisk insamling av recensioner ökar rankingen i kartresultaten.",
    "Teknik: LocalBusiness Schema Markup är avgörande för hur Google tolkar din sajt.",
  ],
  "Restauranghemsida med online-meny – en guide för Sala": [
    "Digitalisering: Digitala menyer ersätter PDF-filer för bättre läsbarhet och SEO.",
    "Synlighet: En indexerbar meny låter Google visa specifika maträtter i sökresultaten.",
    "Mobilitet: Över 80 % av restaurangsökningar sker via mobilen.",
    "Uppdatering: Menyer byggda i kod kan uppdateras i realtid utan teknisk kunskap.",
  ],
  "SEO för byggföretag – ranka högst i Mälardalen": [
    "ROI: SEO bygger långsiktig synlighet som genererar offertförfrågningar utan annonskostnad.",
    "Strategi: Specifika sökord för renoveringstjänster konverterar bättre än breda termer.",
    "Innehåll: Varje tjänst kräver en unik sida med minst 800 ord djupt innehåll.",
    "Förtroende: Systematisk användning av recensioner och projektbilder stänger affärer.",
  ],
  "Bokningssystem online för frisörer i Västmanland": [
    "Tillgänglighet: Online-bokning gör att du kan ta emot kunder dygnet runt.",
    "Minskade bortfall: Automatiska påminnelser minskar 'no-shows' med upp till 90 %.",
    "Integration: Bokningsfunktionen bör vara en sömlös del av din hemsida, inte en extern länk.",
    "Mobilanpassning: Bokningsflödet måste vara optimerat för snabb touch-interaktion.",
  ],
  "Framtidssäkra din digitala närvaro i Västmanland": [
    "GEO: Optimering för att bli citerad av AI-modeller som Gemini och Google SGE.",
    "Hastighet: Next.js-prestanda är biljetten till bättre synlighet 2026.",
    "Röstsök: Fokus på naturliga, konversationsbaserade svar för röstassistenter.",
    "Säkerhet: Moderna tekniska val skyddar ditt företag mot framtida hot.",
  ],
  "Webbdesign för advokatbyråer i Västerås": [
    "Trovärdighet: En professionell design kommunicerar kompetens och seriositet omedelbart.",
    "Tydlighet: Navigering och innehåll struktureras för att klienten snabbt ska hitta rätt hjälp.",
    "Säkerhet: Strikta krav på GDPR och dataskydd hanteras genom teknisk webbutveckling.",
    "Lokal SEO: Optimering för att synas när klienter i Västerås söker juridisk hjälp.",
  ],
  "E-handelshemsida för butiker i Sala": [
    "Plattform: React erbjuder maximal hastighet och kontroll utan löpande provisioner.",
    "Prestanda: Varje sekunds fördröjning minskar konverteringen avsevärt i e-handeln.",
    "Mobilhandel: Mer än hälften av all e-handel sker via mobila enheter 2026.",
    "SEO: Produktsidor optimeras med Schema Markup för priser och betyg i Google.",
  ],
  "Digital marknadsföring för caféer i Västmanland": [
    "Synlighet: Google Business Profile är det första mötet med gästen online.",
    "Digital meny: Responsiva menyer direkt i kod laddar snabbare än PDF-filer.",
    "Social Proof: Integration av sociala medier bygger gemenskap och lockar nya gäster.",
    "Hastighet: Blixtsnabb laddning säkerställer att gäster på språng hittar dina öppettider direkt.",
  ],
  "5 tips för att öka din hemsidas hastighet": [
    "Bilder: Konvertering till WebP/AVIF kan minska filstorlekar med 30-80 %.",
    "Caching: Rätt inställda headers förbättrar upplevelsen för återkommande besökare.",
    "Minifiering: Varje kilobyte räknas – minifiera CSS och JavaScript automatiskt.",
    "Lazy Loading: Ladda endast det innehåll som faktiskt syns på skärmen.",
  ],
  "3 sätt att framtidssäkra ditt företag i Västmanland inför 2026": [
    "AI-anpassning: SEO handlar nu om att ge svar som AI-motorer vill citera.",
    "Prestanda: Laddtider under en sekund är numera en nödvändighet för ranking.",
    "Hyper-lokalt: Dominera ditt län genom att väva in lokala landmärken i din SEO.",
    "Expertis: Bli en auktoritet genom att kombinera teknisk spets med lokal kännedom.",
  ],
  "Maximera din digitala synlighet i Västmanland – Nya trender inom SEO och AI": [
    "SGE: Googles AI-sök sammanfattar svar och kräver auktoritärt innehåll för att citera dig.",
    "Strukturerad data: JSON-LD är nyckeln för att AI ska förstå din tjänst och plats.",
    "Lokal dominans: Företag i Västerås och Sala kan snabbt bli auktoriteter med rätt SEO.",
    "Konsistens: Veckovisa uppdateringar i Google Business Profile rekommenderas starkt.",
  ],
  "Hemsida för hantverkare i Västerås – från offert till avslut": [
    "Trovärdighet: En modern sajt signalerar seriositet och pålitlighet.",
    "Lead-gen: Offertformulär måste vara korta och optimerade för mobilen.",
    "Portfölj: Före-och-efter-bilder i snabba gallerier är ditt starkaste säljargument.",
    "Lokal SEO: Separata tjänstesidor för olika arbeten maximerar din synlighet.",
  ],
  "Frisörsalong i Köping – dominera Google med lokal SEO": [
    "Kart-SEO: Din Google Business Profile är det viktigaste verktyget för att fylla stolar.",
    "Bokningar: Ett integrerat system låter kunder boka tid dygnet runt.",
    "Prestanda: Mobilsajten måste ladda blixtsnabbt för kunder i farten.",
    "Visuellt: Ett snyggt galleri med tidigare arbeten fungerar som din portfolio.",
  ],
  "Restauranger i Sala – hur en snabb hemsida fyller bord": [
    "Första intrycket: Beslutet om middag fattas ofta på mobilen inom sekunder.",
    "UX: Digitala menyer direkt i kod är lättare att navigera än PDF-filer.",
    "Laddtid: En sajt som tar mer än 2 sekunder att ladda kostar gäster.",
    "Lokal SEO: Google Business Profile med aktuella öppettider är avgörande.",
  ],
  "Effektiv Webbutveckling & SEO – Din tekniska fördel": [
    "Next.js: Marknadens ledande ramverk för hastighet och organisk ranking.",
    "Headless CMS: Ger redaktörer frihet utan att kompromissa med säkerheten.",
    "Röstsök: Innehåll optimeras för naturliga frågor från röstassistenter.",
    "AI-verktyg: Används för att accelerera utveckling och identifiera SEO-möjligheter.",
  ],
  "Varför lokal SEO är avgörande för småföretag": [
    "Avsikt: 46 % av alla Google-sökningar har en lokal köpintention.",
    "Synlighet: Hjälper dig att hittas i kartvyn precis när kunden behöver hjälp.",
    "Konsekvens: Identisk NAP-information på alla plattformar är ett krav.",
    "ROI: En av de mest kostnadseffektiva marknadsföringsstrategierna över tid.",
  ],
  "Byggfirma i Västerås? Så får du fler kunder online": [
    "Trend: Nästan alla byggresor börjar idag med en Google-sökning.",
    "Säljaren: Din hemsida fungerar som din främsta säljare dygnet runt.",
    "Förtroende: En snabb sajt med 100/100 PageSpeed bygger omedelbar trovärdighet.",
    "Lokal dominans: Lokalt innehåll säkerställer att du syns vid sökningar i Mälardalen.",
  ],
  "Vad ingår i priset för en professionell hemsida 2026?": [
    "Strategi: Inkluderar analys av bransch, konkurrenter och sökordsmöjligheter.",
    "Utveckling: Fokus på hastighet (Next.js), säkerhet och konverteringsdesign.",
    "SEO: Sökmotoroptimering och Schema Markup ingår som standard.",
    "Lansering: Fullständig testning, analytik och indexering hos Google.",
  ],
  "Så minskar du bounce rate med en snabbare hemsida i Västerås": [
    "Problem: Hög 'bounce rate' innebär förlorade investeringar i trafik.",
    "Laddtid: Sannolikheten att en besökare lämnar ökar med 90 % om sidan tar 5 sekunder.",
    "Första intrycket: Besökare bildar sig en uppfattning på under en halv sekund.",
    "Lösning: React och Next.js ger laddtider under en sekund som standard.",
  ],
  "React vs WordPress – Vilken teknik passar ditt företag?": [
    "Prestanda: React laddar snabbare och ger bättre Core Web Vitals-poäng.",
    "Pris: WordPress är ofta billigare initialt, men React är billigare i underhåll.",
    "Säkerhet: Arkitekturen i React minskar attackytan dramatiskt.",
    "Skalbarhet: React är överlägset för avancerade funktioner och framtida behov.",
  ],
  "React vs WordPress – vilken teknik passar företag i Köping?": [
    "Hastighet: En optimerad React-sajt når regelbundet 95-100 i PageSpeed.",
    "Underhåll: WordPress kräver ständiga uppdateringar av plugins och säkerhet.",
    "Lokal fördel: Snabbare sajter rankar bättre i lokala sökresultat i Köping.",
    "Framtid: React-arkitekturen möjliggör enkel utbyggnad utan prestandaförlust.",
  ],
  "Laddtider som konverterar – hastighetsoptimering för företag i Sala": [
    "Konvertering: Varje sekund snabbare laddtid kan öka konverteringsgraden med 2 %.",
    "Bilder: Optimering av media kan minska filstorleken med 70-90 %.",
    "Hosting: Nordiska servrar med CDN är kritiska för prestanda i Sala.",
    "Skript: Minimera tunga tredjepartsskript för att nå 100/100 i PageSpeed.",
  ],
  "Billig hemsida vs professionell webbutveckling – vad lönar sig?": [
    "Dolda kostnader: 'Billiga' plattformar kan kosta kunder genom långsam prestanda.",
    "Synlighet: En sajt som inte rankar på Google är i praktiken osynlig.",
    "ROI: Professionellt byggda sajter betalar sig snabbt genom högre lead-generering.",
    "Underhåll: Skräddarsydd kod kräver mindre teknisk akuthjälp över tid.",
  ],
  "Core Web Vitals – så påverkar de din ranking i Västmanland": [
    "LCP: Mäter laddtid och bör ligga under 2,5 (helst 1,5) sekunder.",
    "INP: Mäter interaktivitet – tung JavaScript är den vanligaste boven.",
    "CLS: Mäter visuell stabilitet – förhindra att sidan hoppar vid laddning.",
    "Åtgärd: Optimera bilder, minimera JavaScript och sätt explicita dimensioner.",
  ],
  "Varför WordPress inte alltid är bäst för Västerås-företag": [
    "Flaskhalsar: Många plugins saktar ner sidan och sänker Google-rankingen.",
    "Säkerhet: Ökad attackyta genom föråldrade tillägg och teman.",
    "Långsiktighet: Underhållskostnader för WordPress ökar ofta med tiden.",
    "Alternativ: React/Next.js erbjuder en snabbare och säkrare plattform.",
  ],
  "5 sätt att öka hemsidans hastighet i Köping": [
    "Media: WebP/AVIF-format är obligatoriska för prestanda 2026.",
    "Rendering: Inlina kritisk CSS för att visa innehåll omedelbart.",
    "JavaScript: Minimera och fördröj icke-kritiska skript.",
    "CDN: Nordiska servrar minskar latensen för besökare i Köping.",
  ],
  "Vad kostar en hemsida för småföretag i Sala?": [
    "DIY: Billigt per månad men ofta dyrast i förlorade affärer.",
    "WordPress: Professionell hjälp ligger normalt mellan 15 000 – 45 000 kr.",
    "React: Skräddarsydda lösningar från 50 000 kr för maximal ROI.",
    "Värde: Fokusera på vad det kostar att inte synas på Google.",
  ],
  "Hur lång tid tar det att bygga en hemsida i Västerås?": [
    "Tidsram: Ett professionellt projekt tar normalt 4–8 veckor.",
    "Faser: Inkluderar strategi, design, utveckling, SEO och testning.",
    "Prestanda: Kvalitativ teknisk optimering kan inte stressas fram på en vecka.",
    "Lansering: Inkluderar verifiering av Core Web Vitals och Google-indexering.",
  ],
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" } });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceKey);

  const results: string[] = [];

  for (const [title, points] of Object.entries(TAKEAWAYS)) {
    const takeawaysText = points.map((p) => `- ${p}`).join("\n");

    const { data, error } = await supabase
      .from("blog_posts")
      .update({ key_takeaways: takeawaysText })
      .ilike("title", `%${title}%`)
      .select("title");

    if (error) {
      results.push(`❌ ${title}: ${error.message}`);
    } else if (data && data.length > 0) {
      results.push(`✅ ${title}`);
    } else {
      results.push(`⚠️ ${title}: no matching post found`);
    }
  }

  return new Response(results.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Access-Control-Allow-Origin": "*" },
  });
});
