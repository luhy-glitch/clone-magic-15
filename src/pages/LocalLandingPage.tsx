import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ExtraSection {
  title: string;
  paragraphs: string[];
}

interface LocalPageConfig {
  city: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroDescription: string;
  serviceKeyword: string;
  icon: LucideIcon;
  benefits: { title: string; description: string }[];
  bodyTitle: string;
  bodyParagraphs: string[];
  bodyExtraSections?: ExtraSection[];
  faq: FAQItem[];
}

const ALL_LOCAL_PAGES = [
  { slug: "webbutveckling-vasteras", label: "Webbutveckling i Västerås", city: "Västerås" },
  { slug: "seo-koping", label: "SEO i Köping", city: "Köping" },
  { slug: "hemsidor-sala", label: "Hemsidor i Sala", city: "Sala" },
];

const RELATED_SERVICES = [
  { href: "/tjanster/webbutveckling", label: "Webbutveckling" },
  { href: "/tjanster/seo-optimering", label: "SEO-optimering" },
  { href: "/tjanster/webbdesign", label: "Webbdesign" },
  { href: "/tjanster/prestanda-optimering", label: "Prestandaoptimering" },
  { href: "/blogg", label: "Blogg" },
];

const BASE_URL = "https://lrhkonsult.se";

const buildLocalJsonLd = (config: LocalPageConfig) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": `${config.serviceKeyword} i ${config.city}`,
      "description": config.metaDescription,
      "url": `${BASE_URL}/${config.slug}`,
      "provider": {
        "@type": "ProfessionalService",
        "name": "LRH Konsult",
        "url": BASE_URL,
        "telephone": "+46704606578",
        "email": "lucas@lrhkonsult.se",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Västerås",
          "addressRegion": "Västmanlands län",
          "addressCountry": "SE",
        },
      },
      "areaServed": { "@type": "City", "name": config.city },
    },
    {
      "@type": "FAQPage",
      "mainEntity": config.faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer },
      })),
    },
  ],
});

const LocalLandingPage = ({ config }: { config: LocalPageConfig }) => {
  const jsonLd = buildLocalJsonLd(config);
  const Icon = config.icon;

  return (
    <div className="min-h-screen">
      <PageHead title={config.metaTitle} description={config.metaDescription} jsonLd={jsonLd} />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground py-16 sm:py-24 md:py-32" aria-labelledby="local-hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-3xl">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-primary" />
                </div>
                <h1 id="local-hero-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-serif">
                  {config.heroHeading}
                </h1>
                <p className="mt-6 text-lg text-hero-muted max-w-2xl leading-relaxed">
                  {config.heroDescription}
                </p>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Boka fri konsultation <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="local-benefits-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="local-benefits-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-12">
                Varför välja LRH Konsult i {config.city}?
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-6">
              {config.benefits.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.1}>
                  <article className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle size={22} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold font-serif text-lg mb-2">{b.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Body content */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="local-body-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="local-body-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">
                {config.bodyTitle}
              </h2>
              <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
                {config.bodyParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Extra body sections */}
        {config.bodyExtraSections?.map((section, idx) => (
          <section key={idx} className={`py-16 sm:py-24 ${idx % 2 === 0 ? "bg-section-alt" : "bg-background"}`}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">
                  {section.title}
                </h2>
                <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="local-faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="local-faq-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-10">
                Vanliga frågor om {config.serviceKeyword.toLowerCase()} i {config.city}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {config.faq.map((item, i) => (
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

        {/* Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LocalLandingPage;
