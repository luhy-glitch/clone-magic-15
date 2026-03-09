import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ALL_CITIES, CITY_REGIONS } from "@/data/cities";
import {
  ServiceFAQ,
  ServiceCTA,
  type FAQItem,
} from "@/components/service-page/sections";

interface ExtraSection {
  title: string;
  paragraphs: string[];
}

interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  result: string;
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
  heroFacts?: string[];
  benefits: { title: string; description: string }[];
  bodyTitle: string;
  bodyParagraphs: string[];
  bodyExtraSections?: ExtraSection[];
  caseStudy?: CaseStudy;
  faq: FAQItem[];
}

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
      "areaServed": [
        { "@type": "City", "name": config.city },
        { "@type": "State", "name": CITY_REGIONS[config.city] || "Västmanlands län" },
      ],
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

  const breadcrumbs = [
    { name: "Hem", url: BASE_URL },
    { name: config.city, url: `${BASE_URL}/${config.slug}` },
  ];

  return (
    <div className="min-h-screen">
      <PageHead title={config.metaTitle} description={config.metaDescription} jsonLd={jsonLd} breadcrumbs={breadcrumbs} />
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

                {/* Snabba fakta – GEO snippet hook */}
                <ul className="mt-6 space-y-2">
                  {(config.heroFacts || [
                    `100/100 PageSpeed – snabbast i ${config.city}`,
                    `Lokal SEO anpassad för ${config.city}`,
                    `Modern React-teknik utan WordPress-begränsningar`,
                    `Företag i ${config.city} får fler kunder online`,
                  ]).map((fact, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-hero-muted/90">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/gratis-seo-analys"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 animate-cta-pulse"
                >
                  Få en gratis SEO-analys <ArrowRight size={18} />
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
          <div className="max-w-[70ch] mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="local-body-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">
                {config.bodyTitle}
              </h2>
              <div className="space-y-5 text-muted-foreground leading-[1.7] text-base">
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
            <div className="max-w-[70ch] mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-5 text-muted-foreground leading-[1.7] text-base">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        ))}

        {/* Projektinsikt – Case Study */}
        {config.caseStudy && (
          <section className={`py-16 sm:py-24 ${(config.bodyExtraSections?.length ?? 0) % 2 === 0 ? "bg-section-alt" : "bg-background"}`} aria-labelledby="local-case-heading">
            <div className="max-w-[70ch] mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 id="local-case-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">
                  {config.caseStudy.title}
                </h2>
                <div className="space-y-5 text-muted-foreground leading-[1.7] text-base">
                  <p><strong className="text-foreground">Utmaning:</strong> {config.caseStudy.problem}</p>
                  <p><strong className="text-foreground">Lösning:</strong> {config.caseStudy.solution}</p>
                  <p><strong className="text-foreground">Resultat:</strong> {config.caseStudy.result}</p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* FAQ – reuses shared ServiceFAQ with microdata */}
        <ServiceFAQ
          faq={config.faq}
          title={`Vanliga frågor om ${config.serviceKeyword.toLowerCase()} i ${config.city}`}
        />

        {/* Related local pages */}
        <section className="py-12 sm:py-16 bg-background border-t border-border" aria-labelledby="local-related-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="local-related-heading" className="text-xl sm:text-2xl font-bold font-serif mb-6 text-center">
                Vi hjälper företag i hela Mälardalen & Västmanland
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {ALL_CITIES.filter(p => `/${p.to.replace(/^\//, '')}` !== `/${config.slug}`).map((page) => (
                  <Link
                    key={page.to}
                    to={page.to}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
                  >
                    {page.label} <ArrowRight size={16} className="text-primary" />
                  </Link>
                ))}
              </div>
              <h3 className="text-lg font-bold font-serif mb-4 text-center text-muted-foreground">Se även</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {RELATED_SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {s.label} <ArrowRight size={14} className="text-primary" />
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Bottom CTA – reuses shared ServiceCTA */}
        <ServiceCTA />

        {/* Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LocalLandingPage;
