import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ALL_CITIES, CITY_REGIONS } from "@/data/cities";
import { SITE_URL as BASE_URL } from "@/lib/constants";
import {
  ServiceFAQ,
  ServiceCTA,
  type FAQItem,
} from "@/components/service-page/sections";
import { RELATED_CITIES } from "@/data/cities";
import { trackCTAClick } from "@/lib/analytics";

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
  heroFacts?: string[];
  benefits: { title: string; description: string }[];
  bodyTitle: string;
  bodyParagraphs: string[];
  bodyExtraSections?: ExtraSection[];
  faq: FAQItem[];
  noindex?: boolean;
}

const RELATED_SERVICES = [
  { href: "/tjanster/webbutveckling", label: "Webbutveckling" },
  { href: "/tjanster/seo-optimering", label: "SEO-optimering" },
  { href: "/tjanster/webbdesign", label: "Webbdesign" },
  { href: "/tjanster/prestanda-optimering", label: "Prestandaoptimering" },
  { href: "/blogg", label: "Blogg" },
];

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
      "mainEntity": [
        // People Also Ask questions
        {
          "@type": "Question",
          "name": `Hur mycket kostar ${config.serviceKeyword.toLowerCase()} i ${config.city}?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Priset beror på omfattning och komplexitet. Grundläggande ${config.serviceKeyword.toLowerCase()} börjar från 45 000 kr. Mer avancerade lösningar kostar 75-150 000 kr. Vi erbjuder alltid en kostnadsfri konsultation för att ge ett exakt pris.` },
        },
        {
          "@type": "Question",
          "name": `Hur länge tar det att bygga en hemsida i ${config.city}?`,
          "acceptedAnswer": { "@type": "Answer", "text": `En standard hemsida tar 6-10 veckor från första möte till lansering. Vi arbetar i två-veckors sprintar så du ser framsteg kontinuerligt. Du är involverad i varje steg och kan ge feedback.` },
        },
        {
          "@type": "Question",
          "name": `Rankar ${config.serviceKeyword.toLowerCase()} högt på Google för ${config.city}?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Ja, vi specialiserar oss på lokal SEO för ${config.city}. Med rätt optimering och innehål rankar hemsidor typiskt första eller andra sidan för lokala sökningar inom 2-4 månader.` },
        },
        {
          "@type": "Question",
          "name": `Vad ingår i underhållet efter lansering?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Vi erbjuder support-paket från 2 000 kr/månad som inkluderar: säkerhetsuppdateringar, prestandaövervakning, mindre ändringar och löpande SEO-optimering. Du får också månatliga rapporter om ranking och trafik.` },
        },
        // Main FAQ
        ...config.faq.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer },
        })),
      ],
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
      <PageHead title={config.metaTitle} description={config.metaDescription} jsonLd={jsonLd} breadcrumbs={breadcrumbs} noindex={config.noindex} />
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
                  onClick={() => trackCTAClick("hero-seo-analys", "hero", `${config.serviceKeyword} i ${config.city}`)}
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 animate-cta-pulse"
                >
                  Gratis analys för {config.city} <ArrowRight size={18} />
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

        {/* People Also Ask Section */}
        <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="paa-heading">
          <div className="max-w-[70ch] mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="paa-heading" className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-10">
                Andra frågor om {config.serviceKeyword} i {config.city}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: `Hur mycket kostar ${config.serviceKeyword.toLowerCase()} i ${config.city}?`,
                    a: `Priset beror på omfattning och komplexitet. Grundläggande ${config.serviceKeyword.toLowerCase()} börjar från 45 000 kr. Mer avancerade lösningar med e-handel eller integrations kostar 75-150 000 kr. Vi erbjuder alltid en kostnadsfri konsultation för att ge ett exakt pris.`,
                  },
                  {
                    q: `Hur länge tar det att bygga en hemsida i ${config.city}?`,
                    a: `En standard hemsida tar 6-10 veckor från första möte till lansering. Vi arbetar i två-veckors sprintar så du ser framsteg kontinuerligt. Du är involverad i varje steg och kan ge feedback.`,
                  },
                  {
                    q: `Rankar ${config.serviceKeyword.toLowerCase()} högt på Google för ${config.city}?`,
                    a: `Ja, vi specialiserar oss på lokal SEO för ${config.city}. Med rätt optimering och innehål rankar hemsidor typiskt första eller andra sidan för lokala sökningar inom 2-4 månader. Konkurrensen i ${config.city} är ofta lägre än i större städer.`,
                  },
                  {
                    q: `Vad ingår i underhållet efter lansering?`,
                    a: `Vi erbjuder support-paket från 2 000 kr/månad som inkluderar: säkerhetsuppdateringar, prestandaövervakning, mindre ändringar och löpande SEO-optimering. Du får också månatliga rapporter om ranking och trafik.`,
                  },
                ].map((item, i) => (
                  <details key={i} className="group border border-border rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between w-full px-6 py-4 cursor-pointer hover:bg-muted/50 transition-colors">
                      <h3 className="font-medium text-foreground pr-4">{item.q}</h3>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-open:bg-primary/20">
                        <ArrowRight size={16} className="text-primary group-open:rotate-90 transition-transform" />
                      </div>
                    </summary>
                    <div className="px-6 pb-4 text-muted-foreground leading-relaxed border-t border-border bg-background/50">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mid-page CTA – City specific */}
        <section className="py-12 sm:py-16 bg-primary/5 border-t border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4 text-foreground">
                Klara för att växa digitalt i {config.city}?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Börja med en gratis SEO-analys. Vi visar exakt vad som krävs för att ditt företag ska ranka högre på Google och attrahera fler kunder från {config.city} och omgivande områden.
              </p>
              <Link
                to="/gratis-seo-analys"
                onClick={() => trackCTAClick("mid-page-seo-analys", "mid-page", `${config.serviceKeyword} i ${config.city}`)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Få gratis analys → <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </section>

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
                Relaterade städer och regioner
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {(() => {
                  const relatedCityNames = RELATED_CITIES[config.city] || [];
                  const relatedPages = ALL_CITIES.filter(p => relatedCityNames.includes(p.city));
                  return relatedPages.length > 0 ? (
                    relatedPages.map((page) => (
                      <Link
                        key={page.to}
                        to={page.to}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {page.city} <ArrowRight size={16} className="text-primary" />
                      </Link>
                    ))
                  ) : null;
                })()}
              </div>
              <h2 className="text-lg font-bold font-serif mb-4 text-center text-muted-foreground">Se även</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/tjanster/seo-optimering"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  SEO-optimering <ArrowRight size={14} className="text-primary" />
                </Link>
                <Link
                  to="/tjanster/webbutveckling"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  Webbutveckling <ArrowRight size={14} className="text-primary" />
                </Link>
                <Link
                  to="/tjanster/webbdesign"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  Webbdesign <ArrowRight size={14} className="text-primary" />
                </Link>
                <Link
                  to="/tjanster/prestanda-optimering"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  Prestandaoptimering <ArrowRight size={14} className="text-primary" />
                </Link>
                <Link
                  to="/blogg"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  Blogg <ArrowRight size={14} className="text-primary" />
                </Link>
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
