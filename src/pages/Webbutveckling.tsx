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
  { icon: Code2, title: "React & Next.js", desc: "Moderna ramverk som ger snabba, interaktiva webbplatser med optimal prestanda." },
  { icon: Zap, title: "Blixtsnabb prestanda", desc: "Core Web Vitals-optimerade sidor som rankar högt och konverterar besökare." },
  { icon: Shield, title: "Säker & skalbar", desc: "SSL, säkra API:er och arkitektur som växer med ditt företag." },
  { icon: Smartphone, title: "Mobile-first design", desc: "Responsiva lösningar som fungerar perfekt på alla enheter och skärmstorlekar." },
];

const faq = [
  { question: "Vilken teknik är bäst för SEO 2026?", answer: "Next.js är det överlägsna valet då det kombinerar blixtsnabb laddning med perfekt indexering för Google." },
  { question: "Kan ni hjälpa företag i hela Västmanlands län?", answer: "Ja, vi arbetar tätt med lokala företag i Västerås, Köping, Sala och Hallstahammar." },
  { question: "Ingår mobiloptimering i er webbutveckling?", answer: "Självklart, alla våra projekt bygger på en mobil-först-strategi för maximal räckvidd." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "LRH Konsult – Webbutveckling",
      "description": "Professionell webbutveckling i Västerås och Västmanland. Blixtsnabba hemsidor i Next.js och React.",
      "url": "https://lrhkonsult.se/webbutveckling",
      "telephone": "+46704606578",
      "email": "lucas@lrhkonsult.se",
      "address": {
        "@type": "PostalAddress",
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
        title="Webbutveckling Västerås & Västmanland | LRH Konsult"
        description="Vi bygger blixtsnabba hemsidor i Next.js & React för företag i Västerås och Västmanland. SEO-optimerat från start. Boka fri konsultation!"
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
                LRH Konsult är din ledande partner för professionell webbutveckling i Västerås och övriga Västmanland. Vi bygger högpresterande digitala verktyg i Next.js och React som konverterar besökare till betalande kunder i Mälardalen.
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

        {/* Content section */}
        <section className="py-14 sm:py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                Webbutveckling i Västerås med fokus på <span className="text-primary">Next.js</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Genom att använda världsledande teknik ser vi till att ditt företag får en teknisk fördel. Våra lösningar laddar på under en sekund, vilket är ett krav för att nå förstaplatsen på Google under 2026.
                </p>
                <p>
                  Som webbutvecklare baserad i Västmanland har jag hjälpt företag i Västerås, Köping och Sala att skapa hemsidor som verkligen gör skillnad. Jag bygger skräddarsydda webblösningar med modern teknik som React och Next.js – ramverk som används av världens största företag för sin hastighet och skalbarhet.
                </p>
                <p>
                  Varje projekt börjar med en grundlig analys av dina behov och mål. Jag fokuserar på att skapa en responsiv, mobilvänlig design som ser fantastisk ut på alla enheter. Genom att optimera laddtider och Core Web Vitals säkerställer jag att din webbplats inte bara ser bra ut, utan också presterar på toppnivå i sökmotorerna.
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
                Vanliga frågor om webbutveckling i Västmanland
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
