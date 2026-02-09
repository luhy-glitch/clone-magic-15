import { CheckCircle2 } from "lucide-react";
import AnimatedSection, { FadeIn, ScaleIn } from "./AnimatedSection";

const skills = ["React", "TypeScript", "Node.js", "WordPress", "SEO"];

const highlights = [
  "Över 5 års erfarenhet inom webbutveckling",
  "Specialiserad på moderna JavaScript-ramverk",
  "Fokus på prestanda och användarupplevelse",
  "Personlig service och snabb kommunikation",
];

const About = () => {
  return (
    <section id="om-mig" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Profile card */}
          <ScaleIn>
            <div className="flex justify-center">
              <div className="bg-card rounded-2xl shadow-xl p-8 sm:p-10 text-center max-w-sm w-full border border-border">
                <div className="mx-auto w-28 h-28 rounded-full bg-primary flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-serif text-4xl font-bold">LR</span>
                </div>
                <h3 className="font-serif font-bold text-xl">LRH Konsult</h3>
                <p className="text-muted-foreground text-sm mt-1">Webbutvecklare & Konsult</p>
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* Text content */}
          <AnimatedSection delay={0.2}>
            <div>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">Om mig</span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                Passion för att skapa{" "}
                <span className="text-primary">digitala upplevelser</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Som webbutvecklare och konsult hjälper jag företag att förverkliga sina digitala visioner. Med en kombination av teknisk expertis och kreativt tänkande skapar jag lösningar som inte bara ser bra ut – utan också levererar resultat.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Jag tror på transparens, tydlig kommunikation och långsiktiga samarbeten. Varje projekt behandlas med samma engagemang och noggrannhet, oavsett storlek.
              </p>
              <ul className="mt-8 space-y-4">
                {highlights.map((item, i) => (
                  <FadeIn key={item} delay={0.3 + i * 0.1}>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
