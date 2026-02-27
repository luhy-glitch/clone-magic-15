import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vad kostar det att bygga en hemsida?",
      "acceptedAnswer": { "@type": "Answer", "text": "Priset varierar beroende på projektets storlek och komplexitet. Jag erbjuder tre paket – Bas (5 000 kr), Standard (12 000 kr) och Premium (25 000 kr) – som täcker de flesta behov. Kontakta mig för en kostnadsfri offert." }
    },
    {
      "@type": "Question",
      "name": "Hur lång tid tar det att bygga en webbplats?",
      "acceptedAnswer": { "@type": "Answer", "text": "En enkel webbplats kan vara klar inom 1–2 veckor, medan en mer komplex lösning med e-handel eller skräddarsydda funktioner kan ta 4–8 veckor." }
    },
    {
      "@type": "Question",
      "name": "Hur lång tid tar SEO-optimering?",
      "acceptedAnswer": { "@type": "Answer", "text": "De första förbättringarna syns ofta inom 2–3 månader, medan mer konkurrenskraftiga sökord kan ta 6–12 månader att ranka för." }
    },
    {
      "@type": "Question",
      "name": "Kan jag uppdatera webbplatsen själv efteråt?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolut! Jag bygger webbplatser med användarvänliga CMS-lösningar så att du enkelt kan uppdatera innehåll, bilder och texter utan teknisk kunskap." }
    },
    {
      "@type": "Question",
      "name": "Erbjuder du löpande support och underhåll?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja, jag erbjuder löpande support- och underhållsavtal så att din webbplats alltid är uppdaterad, säker och fungerar optimalt." }
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Webbutvecklare & SEO-konsult i Västmanlands län | LRH Konsult"
        description="Behöver ditt företag en snabbare hemsida? Jag skapar moderna sidor i React & Next.js med fokus på SEO i Västerås, Köping och Sala. Boka fri konsultation!"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
