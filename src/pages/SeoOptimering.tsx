import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Search, BarChart3, MapPin, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  { icon: Search, title: "Teknisk SEO", desc: "Optimering av webbplatsstruktur, hastighet och crawlbarhet för bättre indexering i sökmotorer." },
  { icon: BarChart3, title: "Innehållsstrategi", desc: "Sökordsanalys och innehållsoptimering som driver organisk trafik och bygger auktoritet." },
  { icon: MapPin, title: "Lokal SEO", desc: "Synas när kunder i Västerås, Köping och Sala söker efter dina tjänster på Google och Google Maps." },
  { icon: Globe, title: "On-page optimering", desc: "Metadata, rubriker, interna länkar och strukturerad data för toppresultat i sökningar." },
];

const faq = [
  { question: "Hur lång tid tar det innan SEO ger resultat i Köping?", answer: "SEO är en långsiktig investering. Vanligtvis ser man betydande resultat och ökad organisk trafik efter 3–6 månader av konsekvent optimering." },
  { question: "Vad är skillnaden mellan teknisk SEO och lokal SEO?", answer: "Teknisk SEO handlar om sajtens struktur och hastighet, medan lokal SEO optimerar din synlighet specifikt för sökningar i Köping och närområdet." },
  { question: "Hur mäter ni resultaten av SEO?", answer: "Vi följer upp med månatliga rapporter som visar rankingpositioner, organisk trafik, konverteringar och andra relevanta KPI:er." },
  { question: "Kan ni garantera en förstaplats på Google?", answer: "Ingen seriös aktör ger garantier, men våra metoder följer Googles Best Practices för att ge dig absolut bäst förutsättningar att nå toppresultaten." },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "SEO-optimering i Köping och Västmanland",
      "description": "Lokal och teknisk SEO i Köping som ger mätbara resultat. Öka din organiska trafik.",
      "url": "https://lrhkonsult.se/seo-optimering",
      "provider": {
        "@type": "ProfessionalService",
        "name": "LRH Konsult",
        "url": "https://lrhkonsult.se",
        "telephone": "+46704606578",
        "email": "lucas@lrhkonsult.se",
        "address": { "@type": "PostalAddress", "addressLocality": "Västerås", "addressRegion": "Västmanlands län", "addressCountry": "SE" }
      },
      "areaServed": [
        { "@type": "City", "name": "Västerås" },
        { "@type": "City", "name": "Köping" },
        { "@type": "City", "name": "Sala" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer }
      }))
    }
  ]
};

const SeoOptimering = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="SEO Köping - Rankas högre på Google | LRH Konsult"
        description="Lokal och teknisk SEO i Köping som ger mätbara resultat. Öka din organiska trafik."
        jsonLd={pageJsonLd}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
            <AnimatedSection>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">SEO-optimering</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                Ranka högre på <span className="text-primary">Google</span> i Köping & Västmanland
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl">
                Jag hjälper företag i Köping, Västerås och Sala att öka sin synlighet på Google genom beprövade SEO-strategier som ger mätbara resultat och långsiktig tillväxt.
              </p>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Boka SEO-analys <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-14 sm:py-20 md:py-28 bg-section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <s.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-3">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
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
                Sökmotoroptimering som driver tillväxt i Köping
              </h2>
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
                <p>
                  Sökmotoroptimering är den mest kostnadseffektiva digitala marknadsföringsstrategin för företag i Köping. Till skillnad från betald annonsering, där trafiken upphör i samma ögonblick som budgeten tar slut, bygger SEO upp en organisk synlighet som fortsätter att leverera leads och kunder månad efter månad. De första förbättringarna syns ofta inom 2–3 månader, medan mer konkurrenskraftiga sökord kan ta 6–12 månader att etablera sig för.
                </p>
                <p>
                  Som SEO-konsult fokuserar jag på att hjälpa lokala företag i Köping och hela Västmanland att synas för relevanta sökningar. Lokal SEO är särskilt kraftfullt för tjänsteföretag – genom att optimera din Google Business-profil, bygga lokala citeringar och skapa innehåll riktat mot ditt geografiska upptagningsområde kan du dominera de lokala sökresultaten och kartpaketet.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-6">
                  Teknisk SEO – grunden för all synlighet
                </h2>
                <p>
                  Min SEO-process börjar alltid med en grundlig teknisk analys av din webbplats. Teknisk SEO är fundamentet som allt annat vilar på – utan en tekniskt sund webbplats spelar det ingen roll hur bra ditt innehåll är. Jag identifierar och åtgärdar problem som påverkar indexering, optimerar sidans laddtider genom bildkomprimering och kodoptimering, och säkerställer att din webbplats är fullt mobilanpassad.
                </p>
                <p>
                  Vanliga tekniska problem jag hittar inkluderar långsam sidladdning på grund av okomprimerade bilder, bristfällig meta-markup som gör det svårt för Google att förstå sidans innehåll, saknade eller duplicerade kanoniska taggar som skapar förvirring kring vilken sida som bör rankas, och en bristande intern länkstruktur som gör det svårt för sökmotorernas botar att navigera webbplatsen.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-6">
                  Lokal SEO-strategi för företag i Köping
                </h2>
                <p>
                  Lokal SEO handlar om mer än bara att lägga in din stad i title-taggen. Det är en systematisk process som inkluderar optimering av din Google Business-profil med korrekta kategorier, professionella bilder och en strategi för autentiska kundrecensioner. Vi bygger lokala citeringar – omnämnanden av ditt företagsnamn, adress och telefonnummer – på relevanta kataloger och branschsajter.
                </p>
                <p>
                  Vi skapar dessutom lokalt optimerade landningssidor med unikt innehåll som svarar på de specifika frågor dina potentiella kunder i Köping ställer. Genom att kombinera rätt sökord med lokal relevans och teknisk precision bygger vi en digital närvaro som konsekvent placerar ditt företag bland de högsta resultaten i lokala sökningar.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-6">
                  Innehållsstrategi och sökordsanalys
                </h2>
                <p>
                  En framgångsrik SEO-strategi kräver relevant och unikt innehåll. Vi genomför grundlig sökordsanalys med professionella verktyg för att identifiera exakt vilka sökfraser dina potentiella kunder i Köping använder. Sedan skapar vi en innehållsplan som systematiskt bygger din webbplats auktoritet inom ditt expertområde.
                </p>
                <p>
                  On-page-optimering omfattar metadata, rubrikstruktur, intern länkning och strukturerad data i form av JSON-LD schema. Varje sida optimeras med unika titlar, beskrivningar och kanoniska taggar för att undvika duplicerat innehåll och maximera varje sidas individuella ranking-potential.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-6">
                  Prestanda och SEO – en oskiljaktig koppling
                </h2>
                <p>
                  Google använder Core Web Vitals som direkta rankingfaktorer. Det innebär att en långsam webbplats aktivt straffas i sökresultaten. Vi säkerställer att din sajt uppfyller Googles gröna tröskelvärden för LCP (laddtid under 2,5 sekunder), INP (interaktivitet under 200 millisekunder) och CLS (visuell stabilitet under 0,1). En sajt som uppnår dessa mål har en markant fördel gentemot konkurrenter med långsammare webbplatser.
                </p>
                <p>
                  Vill du att ditt företag ska ranka högre på Google i Köping? Boka en kostnadsfri SEO-analys så visar jag konkret vilka förbättringar som kan göras och vilken potential din webbplats har. Jag erbjuder skräddarsydda SEO-paket anpassade efter din budget och dina mål – från teknisk SEO-städning till fullständiga månatliga optimeringsavtal med löpande rapportering.
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
                Vanliga frågor om SEO i Köping
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
                SEO-optimering nära dig
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { href: "/seo-koping", label: "SEO i Köping" },
                  { href: "/webbutveckling-vasteras", label: "Webbutveckling i Västerås" },
                  { href: "/hemsidor-sala", label: "Hemsidor i Sala" },
                ].map((l) => (
                  <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors">
                    {l.label} <ArrowRight size={16} className="text-primary" />
                  </Link>
                ))}
              </div>
              <h3 className="text-lg font-bold font-serif mb-4 text-center text-muted-foreground">Se även</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "/tjanster/webbutveckling", label: "Webbutveckling" },
                  { href: "/tjanster/webbdesign", label: "Webbdesign" },
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

export default SeoOptimering;
