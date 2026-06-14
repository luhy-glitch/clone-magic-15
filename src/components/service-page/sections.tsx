import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideIcon } from "lucide-react";
import { ALL_CITIES } from "@/data/cities";
import { trackCTAClick } from "@/lib/analytics";

/* ── Shared types ─────────────────────────────────── */

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface RelatedService {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  title: string;
  paragraphs: string[];
}

/* ── Sub-components ───────────────────────────────── */

interface HeroProps {
  icon: LucideIcon;
  subheading: string;
  heading: string;
  description: string;
}

export const ServiceHero = ({ icon: Icon, subheading, heading, description }: HeroProps) => (
  <section className="py-16 sm:py-24 bg-background" aria-labelledby="service-hero-heading">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <div className="max-w-3xl">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Icon size={28} className="text-primary" />
          </div>
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            {subheading}
          </span>
          <h1 id="service-hero-heading" className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
            {heading}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
          <Link
            to="/gratis-seo-analys"
            onClick={() => trackCTAClick("service-hero-cta", "service-hero")}
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 animate-cta-pulse"
          >
            Få gratis SEO-analys <ArrowRight size={18} />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export const ServiceFeatures = ({ features }: { features: ServiceFeature[] }) => (
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
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export const ServiceProcess = ({ steps }: { steps: ProcessStep[] }) => (
  <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="service-process-heading">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <h2 id="service-process-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-12">
          Vår process
        </h2>
      </AnimatedSection>
      <div className="space-y-8">
        {steps.map((step, i) => (
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
);


export const ServiceFAQ = ({ faq, title }: { faq: FAQItem[]; title?: string }) => (
  <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="service-faq-heading">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <h2 id="service-faq-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-10">
          {title || "Vanliga frågor"}
        </h2>
        <div>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-serif font-bold text-base">
                  <span>{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <span>{item.answer}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export const ServiceCTA = () => (
  <section className="py-16 sm:py-24 bg-background" aria-labelledby="service-cta-heading">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
      <AnimatedSection>
        <h2 id="service-cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6">
          Redo att få fler kunder online?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Vi analyserar din sajt kostnadsfritt och visar exakt vad som krävs för att ranka högre och få fler kunder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/gratis-seo-analys"
            onClick={() => trackCTAClick("footer-seo-analys", "footer")}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 animate-cta-pulse"
          >
            Gratis analys (ingen bindning) <ArrowRight size={20} />
          </Link>
          <Link
            to="/kontakt"
            onClick={() => trackCTAClick("footer-booking", "footer")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
          >
            Boka konsultsamtal <ArrowRight size={18} />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export const LocalPartnerSection = ({ currentPath }: { currentPath: string }) => (
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
          {ALL_CITIES.filter(l => l.to !== currentPath).map(l => (
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
);