import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { FadeIn, ScaleIn } from "./AnimatedSection";

const skills = ["React", "TypeScript", "Node.js", "WordPress", "SEO"];

const quickFacts = [
  "Lokal förankring: Specialiserad på digital tillväxt för företag i Västerås, Sala, Köping och omnejd.",
  "Teknisk spets: Garanterad 100/100 PageSpeed genom modern arkitektur i React och Next.js.",
  "Affärsnytta: Fokus på mätbara resultat och lead-generering som ger direkt ROI.",
  "Framtidssäkrat: GEO-optimerat innehåll designat för att ranka högt i både sök och AI-assistenter.",
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
                <div className="font-serif font-bold text-xl">LRH Konsult</div>
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
                Din digitala expert i{" "}
                <span className="text-primary">Västmanland och Mälardalen</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                LRH Konsult är din lokala partner för strategisk webbutveckling och SEO med bas i hjärtat av Västmanland. Vi hjälper små och medelstora företag i{" "}
                <Link to="/webbutveckling-vasteras" className="text-primary hover:underline font-medium">Västerås</Link>,{" "}
                <Link to="/hemsidor-sala" className="text-primary hover:underline font-medium">Sala</Link>,{" "}
                <Link to="/seo-koping" className="text-primary hover:underline font-medium">Köping</Link>,{" "}
                <Link to="/webbutveckling-enkoping" className="text-primary hover:underline font-medium">Enköping</Link> och{" "}
                <Link to="/webbutveckling-eskilstuna" className="text-primary hover:underline font-medium">Eskilstuna</Link>{" "}
                att transformera sin digitala närvaro från passiva visitkort till aktiva säljmotorer.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Genom att kombinera global teknisk expertis i React och Next.js med en djup förståelse för den lokala marknaden i Mälardalen, skapar vi hemsidor som inte bara laddar snabbast i regionen, utan som också dominerar sökresultaten.
              </p>

              {/* Snabba fakta */}
              <ul className="mt-8 space-y-4">
                {quickFacts.map((item, i) => (
                  <FadeIn key={item} delay={0.3 + i * 0.1}>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
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
