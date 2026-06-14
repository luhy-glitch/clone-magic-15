import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import SocialShare from "@/components/SocialShare";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SITE_URL = "https://www.lrhkonsult.se";

function estimateReadingTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
}

function parseContentLines(raw: string) {
  const lines = raw.split("\n");
  const elements: { type: "h2" | "h3" | "p" | "quote" | "li"; text: string; id?: string }[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      listBuffer.forEach((item) => elements.push({ type: "li", text: item }));
      listBuffer = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      const text = trimmed.slice(3);
      const id = text.toLowerCase().replace(/[^a-zåäö0-9]+/g, "-").replace(/-+$/, "");
      elements.push({ type: "h2", text, id });
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push({ type: "h3", text: trimmed.slice(4) });
    } else if (trimmed.startsWith("> ")) {
      flushList();
      elements.push({ type: "quote", text: trimmed.slice(2) });
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      listBuffer.push(trimmed.slice(2));
    } else {
      flushList();
      const last = elements[elements.length - 1];
      if (last && last.type === "p") {
        last.text += " " + trimmed;
      } else {
        elements.push({ type: "p", text: trimmed });
      }
    }
  }

  flushList();
  return elements;
}

function renderInline(text: string) {
  const linkParts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return linkParts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <Link key={i} to={linkMatch[2]} className="text-primary hover:underline underline-offset-2 font-medium">
          {linkMatch[1]}
        </Link>
      );
    }

    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bp, j) =>
      bp.startsWith("**") && bp.endsWith("**") ? (
        <strong key={`${i}-${j}`} className="text-foreground font-semibold">
          {bp.slice(2, -2)}
        </strong>
      ) : (
        <span key={`${i}-${j}`}>{bp}</span>
      )
    );
  });
}

const TITLE = "Komplett SEO-guide för småföretag 2025";
const DESCRIPTION = "Komplett SEO-guide för småföretag i Västerås och Västmanland – från nyckelordsanalys och on-page till lokal SEO och länkbygge. Så syns du högre på Google.";
const PATH = "/blogg/seo-vasteras-guide";

const CONTENT = `
Att driva ett litet företag idag innebär att du måste konkurrera om uppmärksamhet på internet. Sökmotoroptimering (SEO) är det verktyg som hjälper dig att synas när dina framtida kunder söker efter tjänster och produkter som du erbjuder. Den här guiden är skriven för 2025 och tar dig steg för steg genom allt du behöver veta för att börja ranka bättre i Google – från grunderna till mer avancerade strategier.

## Vad är SEO?
SEO står för *Search Engine Optimization* och handlar om att optimera din webbplats så att den rankar högre i sökmotorernas organiska resultat. Det handlar inte om att lura sökmotorer, utan om att göra din webbplats tydlig, relevant och snabb.

### Varför är SEO viktigt för småföretag?
Som småföretagare har du ofta begränsad budget för marknadsföring. SEO är en av de mest kostnadseffektiva kanalerna eftersom det bygger organiskt värde över tid. När du väl börjar ranka för relevanta sökningar, får du trafik som aktivt söker efter det du erbjuder.

> "Bra SEO är som att göra din butik lätt att hitta på en stor gata, varje gång någon letar efter det du säljer."

## Nyckelordsforskning
Nyckelord är grunden i all SEO. De är orden och fraserna som din målgrupp skriver in i Google. För att lyckas behöver du veta vilka sökord som är relevanta för ditt företag och hur konkurrensen ser ut.

### Börja med en lista
Skriv ner alla sökfraser du tror dina kunder använder. Tänk både brett och smalt:
- Huvudkategorier: "webbutveckling", "lokal SEO", "restaurangmarknadsföring"
- Specifika behov: "webbplats för hantverkare", "SEO för frisörer i Västerås" 

### Använd verktyg för att hitta volym och konkurrens
Verktyg som Google Keyword Planner, Ubersuggest eller Ahrefs ger dig volymdata och konkurrensnivåer. För mindre företag är det ofta bättre att sikta på *long-tail*-sökningar (mer specifika fraser) eftersom de är lättare att ranka för.

### Prioritera efter affärsvärde
Alla sökord är inte lika värdefulla. Prioritera de som:
- Har en tydlig köpastion ("köpa", "boka", "pris")
- Matchar dina tjänster (till exempel [SEO-optimering](/tjanster/seo-optimering))
- Har lokal relevans om du är beroende av kunder i ett område (t.ex. "webbutveckling Västerås")

## On-page SEO
On-page SEO handlar om hur du strukturerar och optimerar innehållet på varje sida.

### Titel och meta-beskrivning
Varje sida bör ha en unik titel och meta-beskrivning som beskriver vad sidan handlar om. Det är ofta det första en användare ser i sökresultaten.

### Rubriker och struktur
Använd rubriker (H1, H2, H3) för att skapa en logisk struktur. En tydlig hierarki hjälper både användare och sökmotorer att förstå innehållet.

### Innehåll som hjälper användaren
Skriv innehåll som besvarar användarens fråga. Undvik fluff och fokusera på att vara konkret. Använd exempel, checklistor och tydliga underavsnitt.

### Intern länkning
Länka internt mellan dina sidor. Det hjälper både användare och sökmotorer att hitta relevant innehåll på din webbplats. Exempel:
- [Gratis SEO-analys](/gratis-seo-analys) för att få en snabb överblick
- [Webbutveckling i Västerås](/webbutveckling-vasteras) om du vill ha en lokal partner

### Bilder och multimedia
Optimera bilder för webben genom att använda moderna format (WebP) och rätt storlek. Ge varje bild en beskrivande alt-text.

## Teknisk SEO
Teknisk SEO är grundläggande för att sökmotorer ska kunna läsa och indexera din sida.

### Mobilanpassning
Google rankar mobilvänliga sidor högre. Se till att din webbplats är responsiv och fungerar bra i mobilwebbläsaren.

### Hastighet
Laddtider påverkar både användarupplevelse och SEO. Använd verktyg som PageSpeed Insights för att hitta förbättringar.

### Strukturdata
Strukturdata (schema.org) hjälper sökmotorerna att förstå innehållet. Det kan leda till rikare sökresultat som visas med till exempel FAQ eller recensioner.

### Säkerhet (HTTPS)
Se alltid till att din webbplats körs över HTTPS. Det är en rankingfaktor och ger dina besökare trygghet.

## Lokal SEO
För småföretag som vill synas i närområdet är lokal SEO ett måste.

### Google Business Profile
Skapa och optimera din profil (tidigare Google My Business). Fyll i alla fält, ladda upp bilder och uppdatera öppettider regelbundet.

### Lokala sökord
Integrera stad och region i ditt innehåll: "SEO-konsult Västerås", "webbutveckling Västmanland". Skapa separata sidor för varje ort du tjänar om det är relevant.

### Recensioner
Be om recensioner från kunder och svara på dem. Recensioner stärker förtroendet och kan hjälpa din ranking i den lokala kartpaketet.

## Länkbygge
Länkar från andra webbplatser är fortfarande en av de starkaste rankingfaktorerna.

### Kvalitet framför kvantitet
Fokusera på länkar från webbplatser som är relevanta för din bransch och som har hög trovärdighet.

### Naturliga länkar
Skapa innehåll som andra vill länka till, till exempel guider, checklistor eller lokala resurser.

### Partnerskap
Samarbeta med lokala företag, branschorganisationer eller bloggare för att få länkar och nämnder.

## Mätning
Att mäta resultat är avgörande. Utan mätning vet du inte vad som fungerar.

### Google Analytics och Search Console
Anslut din webbplats till Google Search Console och Google Analytics. Där kan du se vilka sökord som ger trafik, vilka sidor som presterar bäst och var du kan förbättra dig.

### Nyckeltal att följa
- Organisk trafik
- Klickfrekvens (CTR) i sökresultat
- Genomsnittlig position för viktiga sökord
- Konverteringar (till exempel kontaktformulär eller samtal)

## Avancerade SEO-strategier för 2025
När grunderna är på plats kan du börja arbeta med mer avancerade strategier som ger dig konkurrensfördelar.

### Semantisk SEO och sökintention
Google blir bättre på att förstå vad användaren faktiskt menar. Det betyder att du bör fokusera mer på **sökintention** än på enstaka ord. Använd variationer av dina nyckelord och skriv svar som täcker flera aspekter av en fråga – så kallad *topic clustering*.

### E‑A‑T (Expertise, Authoritativeness, Trustworthiness)
E‑A‑T har blivit ett återkommande begrepp inom SEO. För småföretag kan det innebära att du visar upp kompetens genom kundcase, recensioner och referenser, samt att du håller din information uppdaterad.

### Content clustering och hubbar
Skapa ämneshubbar (topic hubs) där en huvudartikel länkar till relaterade undersidor. Det hjälper sökmotorerna att förstå hur ditt innehåll hänger ihop och signalerar att du är en auktoritet på ämnet.

### Användarupplevelse och beteendesign
Google mäter inte bara vad som finns på sidan – de tittar också på hur användare interagerar med den. Hög studsfrekvens, kort sessionstid eller dålig navigering kan signalera att din sida inte svarar på användarens fråga.

### Uppdatera och förbättra
SEO är inte "ställ in och glöm". Planera in regelbundna innehållsgenomgångar där du:
- Uppdaterar gamla blogginlägg med ny information
- Expanderar innehåll med nya exempel eller data
- Tar bort eller slår ihop sidor som presterar dåligt

### AI och SEO 2025
AI påverkar hur sökmotorer förstår innehåll – och hur du skapar det. Att använda AI som verktyg för att brainstorma ämnen eller skriva utkast kan spara tid, men kvalitet och mänskligt perspektiv är det som gör att ditt innehåll sticker ut.

- **Använd AI för idéer, inte facit.** Testa att be AI generera förslag på rubriker eller struktur, men skapa alltid det slutliga innehållet själv.
- **Undvik överoptimering.** Sökmotorer blir bättre på att upptäcka texter som känns automatiska eller generiska.

### Röststyrning och sökfrågor
Röststyrda sökningar ("Hey Google") blir vanligare och påverkar hur folk formulerar sig. Röstökningen leder ofta till längre, mer konversationslika sökfraser.

- Skriv som du talar. Använd naturliga frågor i ditt innehåll.
- Lägg till en FAQ-sektion med vanliga frågor som börjar med "hur", "varför" och "vad".

### Strukturera för rich snippets
Rich snippets är de extra utdragen som visas i sökresultat (t.ex. FAQ, recept, stjärnbetyg). Implementera schema markup där det är relevant:
- FAQ (frågor och svar)
- Organisation (företagsinfo)
- Artiklar/blogginlägg

Detta kan ge mer synlighet utan extra kostnad, och ofta öka klickfrekvensen.

## Vanliga frågor
**Hur lång tid tar det innan SEO ger resultat?**
SEO tar tid. Som regel bör du räkna med 3–6 månader innan du ser tydliga förbättringar i organiska sökresultat. Det beror på hur konkurrensutsatt din bransch är och hur mycket tid du lägger på kontinuerligt arbete.

**Hur mycket behöver jag uppdatera min webbplats?**
Minimalt är en gång per kvartal för att kontrollera att informationen är aktuell. För bloggar eller nyhetssajter är det ofta bättre med frekvent uppdatering – gärna en gång per månad.

**Kan jag göra SEO själv eller behöver jag anlita en expert?**
Du kan absolut göra mycket själv, särskilt om du är villig att lära dig. Men om du vill snabba på processen eller fokusera på din kärnverksamhet kan en expert spara både tid och misstag.

## Nästa steg
SEO är en långsiktig process. Börja med att kartlägga din nuvarande situation, optimera några nyckelsidor och följ upp med mätning. Om du vill ha en personligt anpassad plan kan du [begära en gratis SEO-analys](/gratis-seo-analys) eller prata med mig om hur jag kan hjälpa dig att ta din digitala närvaro till nästa nivå.
`;

const BloggArtikelSeoGuide = () => {
  const parsed = parseContentLines(CONTENT);
  const readingTime = estimateReadingTime(CONTENT);
  const postUrl = `${SITE_URL}${PATH}`;

  return (
    <div className="min-h-screen">
      <PageHead title={`${TITLE} | LRH Konsult`} description={DESCRIPTION} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: TITLE,
            description: DESCRIPTION,
            datePublished: "2026-03-16",
            dateModified: "2026-03-16",
            image: { "@type": "ImageObject", url: "https://www.lrhkonsult.se/og-image.jpg", width: 1200, height: 630 },
            author: { "@type": "Person", name: "Lucas", url: "https://www.lrhkonsult.se/om-mig" },
            publisher: {
              "@type": "Organization",
              name: "LRH Konsult",
              url: "https://www.lrhkonsult.se",
              logo: { "@type": "ImageObject", url: "https://www.lrhkonsult.se/og-image.jpg", width: 1200, height: 630 },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
            wordCount: CONTENT.split(/\s+/).length,
            inLanguage: "sv",
          }),
        }}
      />
      <Navbar />
      <main>
        <section className="bg-hero text-hero-foreground pt-20 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-hero-muted hover:text-primary">
                      Hem
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blogg" className="text-hero-muted hover:text-primary">
                      Blogg
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-hero-foreground truncate max-w-[200px] sm:max-w-none">
                    {TITLE}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <AnimatedSection>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {TITLE}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-hero-muted max-w-2xl">
                {DESCRIPTION}
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground">Lästid</span>
                  <span className="text-foreground font-semibold">{readingTime} min</span>
                </div>
                <SocialShare url={postUrl} title={TITLE} />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-section-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid gap-12">
              {parsed.map((block, index) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <h2 id={block.id} key={index} className="text-2xl font-bold">
                        {block.text}
                      </h2>
                    );
                  case "h3":
                    return (
                      <h3 key={index} className="text-xl font-semibold">
                        {block.text}
                      </h3>
                    );
                  case "quote":
                    return (
                      <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        {block.text}
                      </blockquote>
                    );
                  case "li":
                    return (
                      <li key={index} className="ml-6 list-disc text-foreground">
                        {renderInline(block.text)}
                      </li>
                    );
                  case "p":
                  default:
                    return (
                      <p key={index} className="text-base leading-relaxed text-foreground">
                        {renderInline(block.text)}
                      </p>
                    );
                }
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BloggArtikelSeoGuide;
