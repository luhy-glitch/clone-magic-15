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
        title="Webbutvecklare & SEO-konsult i Västmanlands län | LRH Konsult"
        description="Behöver ditt företag en snabbare hemsida? Jag skapar moderna sidor i React & Next.js med fokus på SEO i Västerås, Köping och Sala. Boka fri konsultation!"
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
