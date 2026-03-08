import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LucideIcon } from "lucide-react";
import {
  ServiceHero,
  ServiceFeatures,
  ServiceProcess,
  ServiceCaseStudies,
  ServiceFAQ,
  ServiceCTA,
  LocalPartnerSection,
  type ServiceFeature,
  type ProcessStep,
  type CaseStudy,
  type RelatedService,
  type FAQItem,
  type ContentSection,
} from "@/components/service-page/sections";

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

  const breadcrumbs = [
    { name: "Hem", url: BASE_URL },
    { name: "Tjänster", url: `${BASE_URL}/#tjanster` },
    { name: breadcrumbLabel, url: `${BASE_URL}${pathname}` },
  ];

  return (
    <div className="min-h-screen">
      <PageHead title={metaTitle} description={metaDescription} jsonLd={jsonLd} breadcrumbs={breadcrumbs} />
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

        <ServiceHero icon={Icon} subheading={heroSubheading} heading={heroHeading} description={heroDescription} />

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

        <ServiceFeatures features={features} />

        {process && process.length > 0 && <ServiceProcess steps={process} />}

        {caseStudies && caseStudies.length > 0 && <ServiceCaseStudies cases={caseStudies} />}

        {/* Content sections */}
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

        {faq && faq.length > 0 && <ServiceFAQ faq={faq} title={faqTitle} />}

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

        <LocalPartnerSection currentPath={pathname} />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
