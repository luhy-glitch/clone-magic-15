import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideIcon } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface CaseStudy {
  client: string;
  result: string;
  metric: string;
}

interface RelatedService {
  label: string;
  href: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ContentSection {
  title: string;
  paragraphs: string[];
}

interface ServicePageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  heroDescription: string;
  whyTitle: string;
  whyText: string;
  features: ServiceFeature[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  icon: LucideIcon;
  breadcrumbLabel: string;
  serviceType?: string;
  relatedServices?: RelatedService[];
  faq?: FAQItem[];
  faqTitle?: string;
  process?: ProcessStep[];
  caseStudies?: CaseStudy[];
  contentSections?: ContentSection[];
}

const BASE_URL = "https://lrhkonsult.se";

const buildServiceJsonLd = (serviceName: string, description: string, path: string, faq?: FAQItem[]) => {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "url": `${BASE_URL}${path}`,
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
      "areaServed": [
          { "@type": "City", "name": "Västerås" },
          { "@type": "City", "name": "Köping" },
          { "@type": "City", "name": "Sala" },
          { "@type": "City", "name": "Enköping" },
          { "@type": "City", "name": "Eskilstuna" },
          { "@type": "City", "name": "Arboga" },
          { "@type": "City", "name": "Fagersta" },
          { "@type": "City", "name": "Hallstahammar" },
          { "@type": "City", "name": "Kungsör" },
          { "@type": "City", "name": "Surahammar" },
          { "@type": "City", "name": "Heby" },
          { "@type": "City", "name": "Norberg" },
          { "@type": "City", "name": "Skinnskatteberg" },
          { "@type": "City", "name": "Uppsala" },
          { "@type": "City", "name": "Örebro" },
          { "@type": "State", "name": "Västmanland" },
          { "@type": "State", "name": "Södermanland" },
          { "@type": "State", "name": "Uppsala län" },
          { "@type": "State", "name": "Örebro län" },
        ],
      },
    },
  ];

  if (faq && faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};

const ServicePageTemplate = ({
  metaTitle,
  metaDescription,
  heroHeading,
  heroSubheading,
  heroDescription,
  whyTitle,
  whyText,
  features,
  testimonial,
  icon: Icon,
  breadcrumbLabel,
  relatedServices,
  faq,
  faqTitle,
  process,
  caseStudies,
  contentSections,
}: ServicePageProps) => {
  const { pathname } = useLocation();
  const jsonLd = buildServiceJsonLd(breadcrumbLabel, metaDescription, pathname, faq);

  return (
    <div className="min-h-screen">
      <PageHead title={metaTitle} description={metaDescription} jsonLd={jsonLd} />
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="bg-section-alt border-b border-border" aria-label="Brödsmulor">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Hem</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/#tjanster">Tjänster</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumbLabel}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="service-hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-3xl">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-primary" />
                </div>
                <span className="text-primary font-medium text-sm tracking-widest uppercase">
                  {heroSubheading}
                </span>
                <h1 id="service-hero-heading" className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
                  {heroHeading}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {heroDescription}
                </p>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Boka fri konsultation <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why section */}
        <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="service-why-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 id="service-why-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif">
                  {whyTitle}
                </h2>
                <p className="mt-6 text-muted-foreground leading-[1.8] text-base sm:text-lg">
                  {whyText}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="service-features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="service-features-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-12">
                Vad som ingår
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.1}>
                  <article className="bg-card border border-border rounded-xl p-6 h-full">
                    <div className="flex items-start gap-4">
                      <CheckCircle size={22} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold font-serif text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        {process && process.length > 0 && (
          <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="service-process-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 id="service-process-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-12">
                  Vår process
                </h2>
              </AnimatedSection>
              <div className="space-y-8">
                {process.map((step, i) => (
                  <FadeIn key={step.step} delay={i * 0.1}>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold font-serif text-lg shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold font-serif text-lg mb-1">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case Studies */}
        {caseStudies && caseStudies.length > 0 && (
          <section className="py-16 sm:py-24 bg-background" aria-labelledby="service-cases-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 id="service-cases-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-12">
                  Kundcase med mätbara resultat
                </h2>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((cs, i) => (
                  <FadeIn key={cs.client} delay={i * 0.1}>
                    <article className="bg-card border border-border rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-primary font-serif mb-2">{cs.metric}</div>
                      <p className="text-foreground font-medium mb-1">{cs.client}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cs.result}</p>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content sections (narrative case studies, extra FAQ prose, etc.) */}
        {contentSections && contentSections.length > 0 && contentSections.map((section, idx) => (
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
        {faq && faq.length > 0 && (
          <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="service-faq-heading">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 id="service-faq-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-10">
                  {faqTitle || "Vanliga frågor"}
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
        )}

        {/* Testimonial */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="service-testimonial-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
                <h2 id="service-testimonial-heading" className="sr-only">Kundrecension</h2>
                <div className="text-4xl text-primary mb-6" aria-hidden="true">"</div>
                <blockquote className="text-lg sm:text-xl font-serif italic leading-relaxed text-foreground">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Related services */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="py-12 sm:py-16 bg-section-alt border-t border-border" aria-labelledby="service-related-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 id="service-related-heading" className="text-xl sm:text-2xl font-bold font-serif mb-6 text-center">
                  Se även
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    >
                      {s.label} <ArrowRight size={16} className="text-primary" />
                    </Link>
                  ))}
                </div>
          </AnimatedSection>
            </div>
          </section>
        )}

        {/* Din lokala partner i Mälardalen & Västmanland */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="local-partner-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="local-partner-heading" className="text-2xl sm:text-3xl font-bold font-serif mb-6">
                Din lokala partner i Mälardalen & Västmanland
              </h2>
              <p className="text-muted-foreground leading-[1.8] mb-8">
                Vi hjälper företag i hela Mälardalsregionen att växa digitalt. Oavsett om du befinner dig i Västerås, Köping, Sala, Enköping (Uppsala län), Eskilstuna (Södermanland), Arboga eller Fagersta erbjuder vi samma höga kvalitet och personliga service. Utforska våra lokala tjänster:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Webbutveckling Västerås", to: "/webbutveckling-vasteras" },
                  { label: "SEO Köping", to: "/seo-koping" },
                  { label: "Hemsidor Sala", to: "/hemsidor-sala" },
                  { label: "Webbutveckling Enköping", to: "/webbutveckling-enkoping" },
                  { label: "Webbutveckling Eskilstuna", to: "/webbutveckling-eskilstuna" },
                  { label: "Webbutveckling Arboga", to: "/webbutveckling-arboga" },
                  { label: "Webbutveckling Fagersta", to: "/webbutveckling-fagersta" },
                  { label: "Webbutveckling Hallstahammar", to: "/webbutveckling-hallstahammar" },
                  { label: "Webbutveckling Kungsör", to: "/webbutveckling-kungsor" },
                  { label: "Webbutveckling Surahammar", to: "/webbutveckling-surahammar" },
                  { label: "Webbutveckling Uppsala", to: "/webbutveckling-uppsala" },
                  { label: "Webbutveckling Örebro", to: "/webbutveckling-orebro" },
                ].filter(l => l.to !== pathname).map(l => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
                  >
                    {l.label} <ArrowRight size={14} className="text-primary" />
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="service-cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 id="service-cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6">
                Redo att få fler kunder online?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Vi analyserar din sajt gratis och ger dig konkreta åtgärder som ökar din synlighet och konvertering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/gratis-seo-analys"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 animate-cta-pulse"
                >
                  Få gratis SEO-analys <ArrowRight size={20} />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
                >
                  Boka samtal <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
