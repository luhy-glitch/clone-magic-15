import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
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
  const linkParts = text.split(/(\[[^\]]+\]\([^\)]+\))/g);

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

const TITLE = "Så skapar du en hemsida för ditt företag 2025";
const DESCRIPTION = "Steg-för-steg-guide för att skapa en professionell företagshemsida 2025 – från planering och innehåll till teknik, SEO och lansering. För småföretag.";
const PATH = "/blogg/lokal-seo-smaforetag";

const CONTENT = `
Att skapa en hemsida för ditt företag kan kännas överväldigande – särskilt om du inte är van vid tekniken. Den här guiden tar dig igenom processen från idé till lansering och vidare till långsiktigt underhåll. Den är skriven med 2025 års krav i åtanke, när mobilanvändare, SEO och säkerhet är viktigare än någonsin.

## Planering
Innan du börjar bygga behöver du en tydlig plan. En genomtänkt struktur sparar tid och pengar i längden.

### Sätt mål för din hemsida
Varför bygger du den här webbplatsen? Vanliga mål är:
- Att generera leads
- Att visa upp tjänster eller produkter
- Att ta emot bokningar
- Att dela kunskap och bygga förtroende

När du vet dina mål blir det enklare att välja funktioner och innehåll.

### Kartlägg ditt innehåll
Gör en enkel sitemap med huvudsidor och undersidor. Tänk på att varje sida behöver en tydlig uppgift och ett tydligt budskap.

### Vem är din målgrupp?
Skriv ner vem som ska besöka sidan. Vilka problem vill de lösa? Vilka frågor ställer de? Denna insikt hjälper dig att skapa ett innehåll som konverterar.

### Skapa persona och kundresa
Ett bra sätt att visualisera din målgrupp är att skapa en eller flera *personas* – fiktiva personer som representerar typiska kunder. För varje persona kan du skriva ner:
- Vad de söker efter
- Vilka frustrerande problem de har
- Vilken ton som känns naturlig för dem

När du vet detta kan du också skapa en enkel kundresa (user journey) som beskriver hur en besökare går från första kontakt till att bli kund. Det hjälper dig att planera innehåll som leder dem vidare genom hela köpprocessen.

## Val av plattform
Att välja rätt plattform är ett av de viktigaste besluten. Det påverkar både kostnad, kontroll och framtida utveckling.

### Alternativ: WordPress, React, eller statisk site
WordPress är populärt tack vare låg tröskel och många färdiga teman. React (t.ex. Next.js) ger större flexibilitet och bättre prestanda, men kräver mer teknisk kompetens. Statiska generatorer (som Astro eller Eleventy) kan vara ett bra mellanting.

Det finns även plattformar som Wix och Squarespace som gör det möjligt att bygga en hemsida utan kod. De är bra för enkla presentationssidor, men ger ofta mindre möjlighet att skräddarsy funktioner och prestanda.

### Vad du bör prioritera
- **Kontroll**: Vill du kunna skala och bygga egna lösningar?
- **Tid till lansering**: Behöver du snabbt komma ut på marknaden?
- **Budget**: En standard WordPress-sida kan vara billigare initialt.
- **Långsiktigt underhåll**: Vem ska uppdatera sidan? En plattform som kräver många plugin-uppdateringar kan bli dyr på sikt.

### När ska du välja professionell webbutveckling?
Om du vill ha en unik design, snabb prestanda eller kopplingar till andra system är det ofta värt att anlita proffs. Vill du veta mer om val av teknisk lösning, kolla på [webbutveckling](/tjanster/webbutveckling) och [webbdesign](/tjanster/webbdesign).

## Design
Design är mer än snygga bilder – det handlar om att skapa en tydlig, lättnavigerad upplevelse.

### Användarcentrerad design
Börja med användaren: vad letar de efter och hur kan du göra det enklare för dem att hitta det?

### Färg, typografi och varumärke
Håll designen i linje med din visuella identitet. Använd maximalt 2–3 typsnitt och en begränsad färgpalett.

### Mobil först
Majoriteten av trafiken kommer från mobila enheter. Testa alltid din sida i mobil vy innan du går live.

### Konverteringsfokus
Placera tydliga call-to-actions (CTA) på rätt ställen. Ett kontaktformulär eller en knapp för att boka ett möte bör synas utan att behöva scrolla långt.

Tänk också på att konvertering inte bara handlar om knappar. Det handlar om att eliminera hinder: tydlig navigation, snabb laddning och relevant innehåll. Ju lättare du gör det för besökaren att förstå nästa steg, desto högre blir konverteringsgraden.

### Tillgänglighet
Se till att din sida är tillgänglig för alla. Använd tydlig kontrast mellan text och bakgrund, och se till att formulär och knappar fungerar även för personer som navigerar med tangentbord eller skärmläsare.

## Innehåll
Innehållet är hjärtat i din hemsida. Det som får besökarna att stanna kvar och ta nästa steg.

### Rubriker som fångar uppmärksamhet
Skriv enkla, tydliga rubriker som spelar på vad besökaren söker efter.

### Tona ned branschjargong
Skriv klart och begripligt. Undvik facktermer om din målgrupp inte är tekniska.

### Inkludera sociala bevis
Visa upp kundreferenser, recensioner och exempel på tidigare arbete. Det bygger förtroende.

### Strukturera innehållet
Långa texter blir lätt svårlästa. Använd korta stycken, listor och tydliga rubriker.

## SEO
Sökmotoroptimering är nödvändigt om du vill bli hittad organisk. Det är inte bara för Google – det är också ett sätt att strukturera ditt innehåll.

### Grundläggande SEO
Se till att varje sida har en unik titel och meta-beskrivning. Använd sökord i rubrikerna och första stycket.

### Tekniska SEO-tips
Ladda bilder med rätt storlek och använd komprimering. Se till att sidan laddar snabbt och att du har en stabil hosting.

### Lokal SEO
Om du riktar dig mot kunder i ett specifikt område är lokal SEO viktigt. Använd ortsnamn i innehållet och skapa en Google Business Profile.

### Användarrecensioner och sociala bevis
Att visa upp recensioner och omdömen på din webbplats är ett enkelt sätt att bygga förtroende. Använd citat från kunder, case-studier eller länkar till externa plattformar som Google eller Trustpilot.

## Teknisk setup
Innan du går live behöver du se till att den tekniska grunden fungerar.

### Domän och hosting
Välj en pålitlig hosting-leverantör som erbjuder bra uppetid och snabb support. Se till att du kan använda SSL (HTTPS) utan extra kostnad.

### E-post och kontaktformulär
Se till att kontaktformuläret fungerar och att meddelanden kommer fram. Testa flera gånger och kontrollera att de inte hamnar i skräpposten.

### Säkerhetskopior och återställning
Skaffa en rutin för att ta backup av din webbplats. Om något går fel ska du kunna återställa en fungerande version snabbt.

## Analys och uppföljning
Att lansera sida är bara början. Du måste också följa upp och förbättra.

### Sätt upp KPI:er
Bestäm vad som är viktigt för dig: antalet leads, nedladdningar, antal besök eller tid på sidan. Sätt upp mätpunkter i Google Analytics eller ett annat analysverktyg.

### A/B-tester
Testa olika versioner av rubriker, call-to-action knappar och formulär. A/B-tester hjälper dig att hitta de lösningar som konverterar bäst.

### Vanliga misstag att undvika
- Att bygga för dig själv istället för för kunden
- Att använda för många plugins eller tredjepartslösningar som saktar ner sidan
- Att inte uppdatera innehållet – gamla inlägg kan bli irrelevanta och sänka din trovärdighet

## Lansering
När allt är klart är det dags att lansera. Men lansering är bara början.

### Testa innan du går live
Gå igenom checklistan:
- Fungerar formulär?
- Är kontaktuppgifterna korrekta?
- Visas sidan korrekt i mobil?

### Mät och analysera
Anslut till Google Analytics och Search Console innan lanseringen för att kunna jämföra trafik före och efter.

## Underhåll
En hemsida är aldrig färdig. Den behöver uppdateras och förbättras över tid.

### Innehållsuppdateringar
Lägg till nya case, blogginlägg eller uppdateringar när du får nyheter. En aktiv webbplats signalerar till Google att sidan är relevant.

### Säkerhet och uppdateringar
Håll system och plugins uppdaterade. En sårbar webbplats kan bli ett mål för hackare.

### Prestanda
Se över hastighet och användarupplevelse regelbundet. En snabb sida ger bättre SEO och nöjdare besökare.

### Boka in regelbunden genomgång
Avsätt tid varje kvartal för att gå igenom statistik och göra förbättringar.

### Utvärdera och prioritera
När du tittar på din data – välj ut de områden som ger störst effekt. Det kan handla om att:
- Göra om en sida som har hög studsfrekvens
- Förbättra en landningssida som får mycket trafik men få konverteringar
- Uppdatera en gammal artikel med ny information och bättre struktur

### Dokumentera vad du gör
Skriv ner vad du ändrar och varför. Det gör det enklare att se vad som faktiskt gav resultat när du går tillbaka och utvärderar.

### Få feedback från riktiga användare
Det bästa sättet att veta om din hemsida fungerar är att fråga riktiga användare. Be några kunder, kollegor eller vänner att gå igenom sidan och notera vad som känns oklart eller svårt. Deras insikter kan leda till snabba förbättringar.

### A/B-testning för små förbättringar
Även små förändringar kan ge stora effekter. Testa till exempel olika varianter av knappar, rubriker eller bilder för att se vad som ger bäst resultat. Med tiden kan dessa små optimeringar ge betydligt fler konverteringar.

## Sammanfattning
Att skapa en professionell hemsida 2025 handlar om planering, tydligt innehåll, rätt teknisk plattform och kontinuerligt underhåll. Om du vill ha hjälp att komma igång kan du alltid kontakta mig för en genomgång eller [gratis SEO-analys](/gratis-seo-analys).
`;

const BloggArtikelHemsidaGuide = () => {
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
            author: { "@type": "Person", name: "Lucas", url: "https://www.lrhkonsult.se/om-mig" },
            publisher: {
              "@type": "Organization",
              name: "LRH Konsult",
              url: "https://www.lrhkonsult.se",
              logo: { "@type": "ImageObject", url: "https://www.lrhkonsult.se/og-image.png", width: 1200, height: 630 },
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

export default BloggArtikelHemsidaGuide;
