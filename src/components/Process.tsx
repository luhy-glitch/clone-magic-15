import AnimatedSection, { FadeIn } from "./AnimatedSection";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analys",
    description: "Vi kartlägger din marknad, analyserar konkurrenterna och identifierar de sökord som ger högst avkastning för just ditt företag.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description: "En modern, konverteringsoptimerad design som speglar ditt varumärke och skapar förtroende hos besökarna från första sekunden.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Utveckling",
    description: "Byggd i React & Next.js med 100/100 PageSpeed. Varje rad kod är optimerad för hastighet, tillgänglighet och sökmotorer.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lansering & tillväxt",
    description: "Vi lanserar din sajt, konfigurerar Google Search Console och följer upp med löpande SEO så att du fortsätter att klättra i sökresultaten.",
  },
];

const Process = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">Process</span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold font-serif">
              Så här går ett projekt till
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Från första samtalet till lansering – en transparent process med tydliga milstolpar och löpande kommunikation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-7 h-full flex flex-col group hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Step number */}
                <span className="text-5xl font-bold font-serif text-primary/10 absolute top-4 right-5 group-hover:text-primary/20 transition-colors">{step.number}</span>

                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <step.icon size={20} className="text-primary" />
                </div>

                <h3 className="text-lg font-bold font-serif mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{step.description}</p>

                {/* Connector line (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
