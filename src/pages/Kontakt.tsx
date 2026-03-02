import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";

const LazyMap = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background" aria-label="Karta" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-2xl overflow-hidden border border-border aspect-[16/7]">
          {show ? (
            <iframe
              title="LRH Konsult – Västerås, Västmanland"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63681.48!2d16.4948!3d59.6099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e06a6f5738c43%3A0x4010311c6fce830!2sV%C3%A4ster%C3%A5s!5e0!3m2!1ssv!2sse!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-muted animate-pulse" />
          )}
        </div>
      </div>
    </section>
  );
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "LRH Konsult",
  "url": "https://lrhkonsult.se",
  "telephone": "+46704606578",
  "email": "lucas@lrhkonsult.se",
  "image": "https://lrhkonsult.se/og-image.png",
  "description": "Webbutveckling och SEO-konsult i Västmanland. Kontakta oss för en kostnadsfri konsultation.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Västerås",
    "addressRegion": "Västmanlands län",
    "addressCountry": "SE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 59.6099,
    "longitude": 16.5448,
  },
  "areaServed": [
    { "@type": "City", "name": "Västerås" },
    { "@type": "City", "name": "Köping" },
    { "@type": "City", "name": "Sala" },
    { "@type": "State", "name": "Västmanland" },
  ],
};

const Kontakt = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Kontakt – Boka fri konsultation | LRH Konsult"
        description="Kontakta LRH Konsult för webbutveckling och SEO i Västmanland. Boka ett kostnadsfritt samtal och låt oss diskutera ditt nästa projekt."
        jsonLd={localBusinessJsonLd}
      />
      <Navbar />
      <main className="pt-16">
        <Contact />

        {/* Google Maps placeholder */}
        <LazyMap />
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
