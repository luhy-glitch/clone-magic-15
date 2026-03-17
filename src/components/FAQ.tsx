import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection, { FadeIn } from "./AnimatedSection";
import { siteWideFaqs } from "@/data/faqData";

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
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {siteWideFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    <span>{faq.answer}</span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;