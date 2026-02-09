import { Star } from "lucide-react";
import AnimatedSection, { FadeIn } from "./AnimatedSection";

const testimonials = [
  {
    name: "Anna Johansson",
    company: "Johansson Redovisning AB",
    quote:
      "Fantastiskt resultat! Vår nya webbplats har ökat antalet förfrågningar med 40%. Professionellt och smidigt samarbete från start till mål.",
    rating: 5,
  },
  {
    name: "Erik Lindström",
    company: "Lindströms Bygg",
    quote:
      "Snabb leverans och otroligt bra kommunikation. Hemsidan ser modern ut och fungerar perfekt på alla enheter. Rekommenderas varmt!",
    rating: 5,
  },
  {
    name: "Maria Svensson",
    company: "Café Solsidan",
    quote:
      "Vi fick precis den känsla vi ville ha. Enkel att uppdatera själv och våra kunder hittar oss mycket lättare nu. Tack!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="recensioner" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Recensioner
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Vad mina <span className="text-primary">kunder säger</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 + i * 0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
