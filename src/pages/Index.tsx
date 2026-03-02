import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SeoRoiCalculator from "@/components/SeoRoiCalculator";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";

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
        <Services />
        <SeoRoiCalculator />
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
