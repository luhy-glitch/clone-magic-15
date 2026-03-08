import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Code2, Zap, Shield, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: Code2, title: "React & Next.js", desc: "Moderna ramverk som ger snabba, interaktiva webbplatser med optimal prestanda och server-side rendering." },
  { icon: Zap, title: "Blixtsnabb prestanda", desc: "Core Web Vitals-optimerade sidor som rankar högt och konverterar besökare till kunder." },
  { icon: Shield, title: "Säker & skalbar", desc: "SSL, säkra API:er och arkitektur som växer med ditt företag utan omskrivningar." },
  { icon: Smartphone, title: "Mobile-first design", desc: "Responsiva lösningar som fungerar perfekt på alla enheter och skärmstorlekar." },
];

const faq = [
  { question: "Varför bygga hemsidor i React & Next.js?", answer: "Dessa tekniker tillåter oss att skapa blixtsnabba, skalbara och säkra webbplatser som presterar optimalt på alla enheter, vilket är avgörande för företag i Västerås som vill ligga steget före." },
  { question: "Hur lång tid tar det att utveckla en ny webbplats?", answer: "En standardwebbplats tar vanligtvis 2–4 veckor från koncept till lansering, beroende på funktioner och innehåll. Mer komplexa projekt kan ta 4–8 veckor." },
  { question: "Vilken teknik är bäst för SEO 2026?", answer: "Next.js är det överlägsna valet då det kombinerar blixtsnabb laddning med perfekt indexering för Google. Server-side rendering säkerställer att sökmotorer kan läsa allt innehåll." },
  { question: "Kan ni hjälpa företag i hela Västmanlands län?", answer: "Ja, vi arbetar tätt med lokala företag i Västerås, Köping, Sala och Hallstahammar. Vi erbjuder både fysiska möten och distanssamarbete." },
  { question: "Ingår mobiloptimering i er webbutveckling?", answer: "Självklart, alla våra projekt bygger på en mobil-först-strategi för maximal räckvidd och bästa möjliga användarupplevelse." },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "LRH Konsult – Webbutveckling",
      "description": "Moderna, sökmotoroptimerade hemsidor i Västerås. Teknisk expertis i världsklass med React och Next.js.",
      "url": "https://lrhkonsult.se/webbutveckling",
      "telephone": "+46704606578",
      "email": "lucas@lrhkonsult.se",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Västerås",
        "addressRegion": "Västmanlands län",
        "addressCountry": "SE",
      },
      "areaServed": [
        { "@type": "City", "name": "Västerås" },
        { "@type": "City", "name": "Köping" },
        { "@type": "City", "name": "Sala" },
      ],
      "priceRange": "$$",
      "image": "https://lrhkonsult.se/og-image.png",
      "sameAs": ["https://www.linkedin.com/in/lucasrosvall/"],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    },
  ],
};

const Webbutveckling = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Webbutveckling Västerås - Snabba React & Next.js Sajter"
        description="Moderna, sökmotoroptimerade hemsidor i Västerås. Maximera din digitala närvaro med teknisk expertis i världsklass."
        jsonLd={pageJsonLd}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
            <AnimatedSection>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">Webbutveckling</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                Skräddarsydda <span className="text-primary">webbplatser</span> som levererar resultat
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl">
                LRH Konsult är din ledande partner för professionell webbutveckling i Västerås och övriga Västmanland. Vi bygger högpresterande digitala verktyg i Next.js och React som konverterar besökare till betalande kunder.
              </p>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Boka fri konsultation <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-14 sm:py-20 md:py-28 bg-section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <f.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-3">{f.title}</h3>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Content section - 800+ words */}
        <section className="py-14 sm:py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                Webbutveckling i Västerås med fokus på prestanda
              </h2>
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
                <p>
                  Genom att använda världsledande teknik som React och Next.js ser vi till att ditt företag i Västerås får en teknisk fördel som direkt påverkar din synlighet på Google. Våra lösningar laddar på under en sekund, vilket inte bara är imponerande – det är ett krav för att nå förstaplatsen på Google under 2026. Sökmotorer prioriterar webbplatser som levererar en blixtsnabb användarupplevelse, och det är precis det vi specialiserar oss på.
                </p>
                <p>
                  Som webbutvecklare baserad i Västmanland har jag hjälpt företag i Västerås, Köping och Sala att skapa hemsidor som verkligen gör skillnad för deras verksamhet. Jag bygger skräddarsydda webblösningar med modern teknik – ramverk som används av världens största företag som Netflix, Airbnb och Spotify för sin hastighet, skalbarhet och tillförlitlighet. Samma tekniska grund som driver miljarddollarföretag kan nu driva ditt lokala företag i Västmanland.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-6">
                  Varför React och Next.js är framtiden
                </h2>
                <p>
                  React är världens mest använda JavaScript-ramverk, utvecklat och underhållet av Meta. Next.js bygger vidare på React och lägger till server-side rendering, automatisk koddelning och inbyggd bildoptimering. Dessa funktioner är avgörande för snabb laddning och stark SEO. Server-side rendering innebär att varje sida genereras på servern innan den skickas till besökarens webbläsare, vilket ger sökmotorer fullständig tillgång till innehållet och dramatiskt förbättrar indexeringen.
                </p>
                <p>
                  Automatisk koddelning betyder att besökaren bara laddar den kod som behövs för den aktuella sidan, istället för att ladda hela webbplatsens JavaScript i ett enda paket. Detta minskar den initiala laddningstiden avsevärt och ger en upplevelse som känns omedelbar. Kombinerat med modern bildoptimering i format som AVIF och WebP skapar vi webbplatser som konsekvent når 100/100 i Google PageSpeed Insights.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-6">
                  Prestanda som driver konvertering i Västerås
                </h2>
                <p>
                  Varje projekt börjar med en grundlig analys av dina behov, din målgrupp och dina konkurrenter i Västerås. Vi fokuserar på att skapa en responsiv, mobilvänlig design som ser fantastisk ut på alla enheter – från den senaste iPhonen till äldre Android-telefoner. Genom att optimera Core Web Vitals (LCP, INP och CLS) säkerställer vi att din webbplats inte bara ser bra ut, utan också presterar på toppnivå i sökmotorerna.
                </p>
                <p>
                  Studier visar att 53 % av mobilanvändare lämnar en sida som tar mer än tre sekunder att ladda. I Västerås, där konkurrensen om lokala kunder är hård, kan en snabb hemsida vara skillnaden mellan att vinna eller förlora en kund. Våra webbplatser laddar konsekvent på under en sekund, vilket eliminerar avhopp och maximerar konverteringsgraden. Det handlar inte bara om teknik – det handlar om att varje besökare som hittar dig på Google också stannar kvar och tar kontakt.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-6">
                  Från idé till lansering – din lokala partner
                </h2>
                <p>
                  Vår process är transparent och effektiv. Vi arbetar agilt, vilket innebär att du löpande kan följa framstegen, testa prototyper och ge feedback innan vi går vidare. Du är involverad i varje steg, från wireframes och designförslag till färdig webbplats. Efter lanseringen lämnar vi dig inte i sticket – vi erbjuder löpande support, underhåll och vidareutveckling.
                </p>
                <p>
                  Att ha en lokal webbutvecklare i Västerås innebär personliga möten, snabb kommunikation och en partner som förstår den regionala marknaden. Vi vet vilka sökord som driver trafik i Västmanland, vilka lokala referenspunkter som bygger förtroende och hur man skapar en digital närvaro som konverterar besökare från hela Mälardalen till betalande kunder.
                </p>
                <p>
                  Oavsett om du behöver en helt ny webbplats, vill modernisera din befintliga sajt eller söker en teknisk partner för att bygga en avancerad webbapplikation – kontakta oss för en kostnadsfri konsultation. Vi visar dig konkret hur modern webbutveckling kan accelerera din digitala tillväxt i Västerås och hela Västmanland.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-20 md:py-28 bg-section-alt">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-center mb-10">
                Vanliga frågor om webbutveckling i Västerås
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-serif font-bold text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 sm:py-16 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl font-bold font-serif mb-6 text-center">
                Webbutveckling nära dig
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { href: "/webbutveckling-vasteras", label: "Webbutveckling i Västerås" },
                  { href: "/hemsidor-sala", label: "Hemsidor i Sala" },
                  { href: "/seo-koping", label: "SEO i Köping" },
                ].map((l) => (
                  <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors">
                    {l.label} <ArrowRight size={16} className="text-primary" />
                  </Link>
                ))}
              </div>
              <h3 className="text-lg font-bold font-serif mb-4 text-center text-muted-foreground">Se även</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "/tjanster/webbdesign", label: "Webbdesign" },
                  { href: "/tjanster/seo-optimering", label: "SEO-optimering" },
                  { href: "/tjanster/prestanda-optimering", label: "Prestandaoptimering" },
                  { href: "/#priser", label: "Priser" },
                  { href: "/blogg", label: "Blogg" },
                ].map((s) => (
                  <Link key={s.href} to={s.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                    {s.label} <ArrowRight size={14} className="text-primary" />
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Webbutveckling;
