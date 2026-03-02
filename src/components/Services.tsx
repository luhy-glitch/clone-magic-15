import { Code2, Palette, Search, Settings, Wrench, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { FadeIn } from "./AnimatedSection";

const services = [
  {
    icon: Code2,
    title: "Webbutveckling",
    description: "Skräddarsydda webbplatser byggda med modern teknik för optimal prestanda och säkerhet.",
    items: ["React & Next.js", "Responsiv design", "API-integrationer"],
    link: "/tjanster/webbutveckling",
    linkText: "Läs mer om professionell webbutveckling",
  },
  {
    icon: Palette,
    title: "Webbdesign",
    description: "Moderna och användarvänliga designs som speglar ditt varumärke och engagerar besökare.",
    items: ["UI/UX Design", "Varumärkesidentitet", "Prototyper"],
    link: "/tjanster/webbdesign",
    linkText: "Se våra lösningar för webbdesign",
  },
  {
    icon: Search,
    title: "SEO-optimering",
    description: "Öka din synlighet på Google och andra sökmotorer med beprövade strategier.",
    items: ["Teknisk SEO", "Innehållsoptimering", "Lokal SEO"],
    link: "/tjanster/seo-optimering",
    linkText: "Optimera din synlighet med SEO",
  },
  {
    icon: Settings,
    title: "WordPress-lösningar",
    description: "Snabba och kostnadseffektiva WordPress-sajter med anpassade teman och plugins.",
    items: ["Anpassade teman", "WooCommerce", "Plugin-utveckling"],
    link: "/tjanster/wordpress-losningar",
    linkText: "Utforska våra WordPress-lösningar",
  },
  {
    icon: Wrench,
    title: "Underhåll & Support",
    description: "Månatliga supportpaket som säkerställer att din webbplats alltid fungerar optimalt.",
    items: ["Säkerhetsuppdateringar", "Backup-lösningar", "24/7 support"],
    link: "/tjanster/underhall-support",
    linkText: "Läs om vår support och underhåll",
  },
  {
    icon: Zap,
    title: "Prestanda-optimering",
    description: "Snabbare laddtider och bättre användarupplevelse genom teknisk optimering.",
    items: ["Hastighetsoptimering", "Core Web Vitals", "Cachning"],
    link: "/tjanster/prestanda-optimering",
    linkText: "Maxa hastigheten med prestandaoptimering",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-14 sm:py-20 md:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">Tjänster</span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold">
              Allt du behöver för en{" "}
              <span className="text-primary">framgångsrik närvaro online</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Från koncept till lansering – jag erbjuder helhetslösningar som hjälper ditt företag att växa digitalt.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 sm:p-8 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{service.description}</p>
                <ul className="space-y-2 flex-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link to={service.link} className="mt-5 inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline">
                    {service.linkText} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
