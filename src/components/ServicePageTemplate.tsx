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

interface RelatedService {
  label: string;
  href: string;
}

interface FAQItem {
  question: string;
  answer: string;
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
}

const BASE_URL = "https://lrhkonsult.se";

const buildLocalBusinessJsonLd = (serviceName: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": `LRH Konsult – ${serviceName}`,
  "description": description,
  "url": `${BASE_URL}${path}`,
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
  "image": `${BASE_URL}/og-image.png`,
  "sameAs": [
    "https://www.linkedin.com/in/lucasrosvall/"
  ],
});

const buildFaqJsonLd = (faq: FAQItem[]) => ({
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
});

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
}: ServicePageProps) => {
  const { pathname } = useLocation();
  const localBizLd = buildLocalBusinessJsonLd(breadcrumbLabel, metaDescription, pathname);

  // Merge JSON-LD: wrap in @graph if FAQ exists
  const jsonLd = faq && faq.length > 0
    ? { "@context": "https://schema.org", "@graph": [localBizLd, buildFaqJsonLd(faq)] }
    : localBizLd;

  return (
    <div className="min-h-screen">
      <PageHead title={metaTitle} description={metaDescription} jsonLd={jsonLd} />
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumbs */}
        <div className="bg-section-alt border-b border-border">
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
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-3xl">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-primary" />
                </div>
                <span className="text-primary font-medium text-sm tracking-widest uppercase">
                  {heroSubheading}
                </span>
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
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
        <section className="py-16 sm:py-24 bg-section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif">
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
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-center mb-12">
                Vad som ingår
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 h-full">
                    <div className="flex items-start gap-4">
                      <CheckCircle size={22} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold font-serif text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section className="py-16 sm:py-24 bg-section-alt">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-center mb-10">
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
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
                <div className="text-4xl text-primary mb-6">"</div>
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
          <section className="py-12 sm:py-16 bg-section-alt border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <AnimatedSection>
                <h2 className="text-xl sm:text-2xl font-bold font-serif mb-6 text-center">
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

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6">
                Redo att ta nästa steg?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Boka en kostnadsfri konsultation så diskuterar vi hur jag kan hjälpa ditt företag att växa online.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Boka fri konsultation <ArrowRight size={20} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
