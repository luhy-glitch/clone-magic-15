import React, { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PageHead from "@/components/PageHead";

// Lazy-load everything below the fold
const Services = lazy(() => import("@/components/Services"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const homeFaqs = [
  { question: "Vad kostar en professionell hemsida?", answer: "Priset varierar beroende på projektets omfattning. Vi erbjuder paket från 5 000 kr för enklare sidor upp till skräddarsydda premiumlösningar för 25 000 kr och uppåt." },
  { question: "Hur snabb är en hemsida från LRH Konsult?", answer: "Vi siktar alltid på 100/100 i Google PageSpeed Insights för att garantera bästa möjliga användarupplevelse och SEO-rankning." },
  { question: "Vad kostar det att bygga en hemsida?", answer: "Priset varierar beroende på projektets storlek och komplexitet. Jag erbjuder tre paket – Bas (5 000 kr), Standard (12 000 kr) och Premium (25 000 kr) – som täcker de flesta behov." },
  { question: "Hur lång tid tar det att bygga en webbplats?", answer: "Det beror på projektets omfattning. En enkel webbplats kan vara klar inom 1–2 veckor, medan en mer komplex lösning med e-handel kan ta 4–8 veckor." },
  { question: "Hur lång tid tar SEO-optimering?", answer: "De första förbättringarna syns ofta inom 2–3 månader, medan mer konkurrenskraftiga sökord kan ta 6–12 månader att ranka för." },
  { question: "Kan jag uppdatera webbplatsen själv efteråt?", answer: "Absolut! Jag bygger webbplatser med användarvänliga CMS-lösningar så att du enkelt kan uppdatera innehåll utan teknisk kunskap." },
  { question: "Ingår hosting och domän?", answer: "Jag hjälper dig att välja rätt hosting och domänlösning. Dessa kostnader tillkommer separat men jag kan rekommendera pålitliga leverantörer." },
  { question: "Erbjuder du löpande support och underhåll?", answer: "Ja, jag erbjuder löpande support- och underhållsavtal så att din webbplats alltid är uppdaterad, säker och fungerar optimalt." },
  { question: "Vilka företag arbetar du med i Västmanland?", answer: "Jag arbetar med företag av alla storlekar i Västerås, Köping, Sala och hela Västmanlands län." },
  { question: "Ingår support och underhåll i era priser?", answer: "Vi erbjuder dedikerade underhållspaket för att säkerställa att din sajt förblir säker och snabb efter lanseringen." },
  { question: "Finns det några dolda avgifter?", answer: "Nej, vi tror på full transparens. Alla kostnader specificeras tydligt i våra paket och offerter." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Webbutveckling & SEO i Västmanland | LRH Konsult"
        description="Din partner för blixtsnabba hemsidor och SEO i Västerås, Köping & Sala. 100/100 PageSpeed för maximal konvertering. Boka en fri analys idag!"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "name": "LRH Konsult",
              "url": "https://lrhkonsult.se",
              "telephone": "+46704606578",
              "email": "lucas@lrhkonsult.se",
              "image": "https://lrhkonsult.se/og-image.png",
              "description": "Din partner för blixtsnabba hemsidor och SEO i Västerås, Köping & Sala. 100/100 PageSpeed för maximal konvertering.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Västerås",
                "addressRegion": "Västmanlands län",
                "addressCountry": "SE"
              },
              "areaServed": [
                { "@type": "City", "name": "Västerås" },
                { "@type": "City", "name": "Köping" },
                { "@type": "City", "name": "Sala" },
                { "@type": "State", "name": "Västmanland" }
              ],
              "priceRange": "$$",
              "sameAs": ["https://www.linkedin.com/in/lucasrosvall/"]
            },
            {
              "@type": "WebSite",
              "name": "LRH Konsult",
              "url": "https://lrhkonsult.se"
            },
            {
              "@type": "FAQPage",
              "mainEntity": homeFaqs.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
              }))
            }
          ]
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
