import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection, { FadeIn } from "./AnimatedSection";

const faqs = [
  {
    question: "Vad kostar det att bygga en hemsida?",
    answer:
      "Priset varierar beroende på projektets storlek och komplexitet. Jag erbjuder tre paket – Bas (5 000 kr), Standard (12 000 kr) och Premium (25 000 kr) – som täcker de flesta behov. Kontakta mig för en kostnadsfri offert anpassad efter ditt projekt.",
  },
  {
    question: "Hur lång tid tar det att bygga en webbplats?",
    answer:
      "Det beror på projektets omfattning. En enkel webbplats kan vara klar inom 1–2 veckor, medan en mer komplex lösning med e-handel eller skräddarsydda funktioner kan ta 4–8 veckor.",
  },
  {
    question: "Hur lång tid tar SEO-optimering?",
    answer:
      "De första förbättringarna syns ofta inom 2–3 månader, medan mer konkurrenskraftiga sökord kan ta 6–12 månader att ranka för. SEO är en långsiktig investering som ger bestående resultat.",
  },
  {
    question: "Kan jag uppdatera webbplatsen själv efteråt?",
    answer:
      "Absolut! Jag bygger webbplatser med användarvänliga CMS-lösningar så att du enkelt kan uppdatera innehåll, bilder och texter utan teknisk kunskap.",
  },
  {
    question: "Ingår hosting och domän?",
    answer:
      "Jag hjälper dig att välja rätt hosting och domänlösning, men dessa kostnader tillkommer separat. Jag kan rekommendera pålitliga leverantörer som passar ditt projekt.",
  },
  {
    question: "Erbjuder du löpande support och underhåll?",
    answer:
      "Ja, jag erbjuder löpande support- och underhållsavtal så att din webbplats alltid är uppdaterad, säker och fungerar optimalt. Detta ingår i Premium-paketet eller kan läggas till separat.",
  },
  {
    question: "Vilka företag arbetar du med i Västmanland?",
    answer:
      "Jag arbetar med företag av alla storlekar i Västerås, Köping, Sala och hela Västmanlands län. Oavsett om du är en enskild firma eller ett större företag kan jag hjälpa dig med webbutveckling och SEO.",
  },
  {
    question: "Vad händer om jag inte är nöjd med resultatet?",
    answer:
      "Din nöjdhet är viktig för mig. Under projektets gång har vi regelbundna avstämningar och du får möjlighet att ge feedback i varje fas. Jag gör justeringar tills du är helt nöjd.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Vanliga <span className="text-primary">frågor</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Här hittar du svar på de vanligaste frågorna om mina tjänster och hur jag arbetar.
            </p>
          </div>
        </AnimatedSection>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;
