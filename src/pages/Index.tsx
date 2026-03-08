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

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Webbutvecklare & SEO-konsult Västmanland | LRH Konsult"
        description="Behöver ditt företag en snabbare hemsida? Jag bygger moderna sajter i React & Next.js med SEO-fokus i Västerås, Köping och Sala. Boka fri konsultation!"
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
              "description": "Webbutveckling och SEO-konsult i Västmanland. Moderna hemsidor i React & Next.js för företag i Västerås, Köping och Sala.",
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
