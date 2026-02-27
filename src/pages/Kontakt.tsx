import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";

const Kontakt = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Kontakt – Boka fri konsultation | LRH Konsult"
        description="Kontakta LRH Konsult för webbutveckling och SEO i Västmanland. Boka ett kostnadsfritt samtal och låt oss diskutera ditt nästa projekt."
      />
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
