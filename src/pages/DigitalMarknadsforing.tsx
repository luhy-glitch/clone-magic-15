import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Digital Marknadsföring för Lokala Butiker i Västmanland",
      "provider": {
        "@type": "ProfessionalService",
        "address": { "@type": "PostalAddress", "addressLocality": "Västerås", "addressRegion": "Västmanland", "addressCountry": "SE" },
        "name": "LRH Konsult",
        "telephone": "+46704606578",
        "email": "lucas@lrhkonsult.se",
      },
      "areaServed": [
        { "@type": "City", "name": "Västerås" },
        { "@type": "City", "name": "Köping" },
        { "@type": "City", "name": "Sala" },
        { "@type": "State", "name": "Västmanland" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Hur kan digital marknadsföring hjälpa min butik?", "acceptedAnswer": { "@type": "Answer", "text": "En optimerad hemsida och lokal SEO gör att dina kunder hittar dig när de söker efter produkter i ditt område. Det ökar både webbtrafik och fysiskt besöksflöde." } },
        { "@type": "Question", "name": "Behöver min butik en hemsida om jag har sociala medier?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Sociala medier är viktiga men en egen hemsida ger dig full kontroll, bättre SEO-synlighet och en professionell plattform som du äger." } },
      ],
    },
  ],
};

const DigitalMarknadsforing = () => (
  <div className="min-h-screen">
    <PageHead
      title="Digital Marknadsföring Lokala Butiker | LRH Konsult"
      description="Digital marknadsföring för lokala butiker i Västmanland. Hemsidor, lokal SEO och Google-synlighet som driver kunder till din butik."
      jsonLd={jsonLd}
    />
    <Navbar />
    <main className="pt-16">
      <section className="relative bg-hero text-hero-foreground py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <ShoppingBag size={28} className="text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-serif">
                Digital Marknadsföring för Lokala Butiker
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl leading-relaxed">
                Öka kundflödet till din butik i Västmanland med en professionell hemsida och lokal SEO som gör att kunderna hittar dig – online och offline.
              </p>
              <Link to="/gratis-seo-analys" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Få en gratis SEO-analys <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">Varför lokala butiker behöver digital synlighet</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Den lokala butikshandeln i Västmanland står inför en digital omvandling. Konsumenterna i Västerås, Köping, Sala och omgivande städer söker allt oftare efter produkter och tjänster online innan de besöker en fysisk butik. Enligt undersökningar gör 78% av lokala mobilsökningar att konsumenten besöker en butik inom 24 timmar. Frågan är inte om dina kunder söker efter dig online – utan om de hittar dig.</p>
              <p>En professionell hemsida är navet i din digitala marknadsföring. Till skillnad från sociala medier, där algoritmer bestämmer vem som ser ditt innehåll, ger en hemsida dig full kontroll över ditt budskap och din synlighet. Genom att kombinera en snabb, mobilanpassad webbplats med lokal SEO kan du se till att ditt företag dyker upp varje gång en potentiell kund söker efter de produkter du säljer i ditt område.</p>
              <p>Vi på LRH Konsult förstår de unika utmaningarna som lokala butiker ställs inför. Konkurrensen från e-handel och större kedjor är hård, men med rätt digital strategi kan du vända den till din fördel. Din lokala närvaro, personliga service och expertis inom ditt område är ovärderliga tillgångar – vi hjälper dig att kommunicera dem effektivt online.</p>
              <p>Lokala butiker i Västmanland som klädaffärer, sportbutiker och livsmedelsbutiker behöver moderna hemsidor för att nå kunder som söker online. Med konkurrens från större kedjor är det viktigt att ha en stark digital närvaro som visar produkter, priser och kontaktinformation. Vi hjälper butiker att skapa hemsidor som driver fler besökare till fysiska platser.</p>
              <p>Hos LRH Konsult erbjuder vi omfattande digitala marknadsföringstjänster för lokala butiker. Våra tjänster inkluderar hemsideutveckling, lokal SEO och optimering som säkerställer att ditt företag syns för sökningar som 'butik Västerås'. Vi använder moderna tekniker för att skapa effektiva lösningar.</p>
              <p>För att komma igång med digital marknadsföring rekommenderar vi att börja med en gratis SEO-analys. Detta ger dig insikter i din nuvarande online-närvaro och förbättringsområden. Besök vår sida för [gratis SEO-analys](/gratis-seo-analys) för att få en detaljerad rapport. För mer avancerade tjänster, utforska våra erbjudanden inom [webbutveckling](/tjanster/webbutveckling) och [SEO-optimering](/tjanster/seo-optimering), som hjälper lokala butiker i Västmanland att nå framgång online.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">Lokala Butiker i Västmanland som Behöver Digital Marknadsföring</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Västmanland har en rik variation av lokala butiker som kan dra nytta av digital marknadsföring. Från modebutiker och sportaffärer till livsmedelsbutiker och specialbutiker, alla kan öka sin synlighet genom en professionell hemsida och lokal SEO. Detta hjälper dem att nå kunder som söker efter specifika produkter eller tjänster i regionen.</p>
              <p>Andra viktiga sektorer inkluderar elektronikbutiker, bokhandlar och hobbybutiker som bidrar till den lokala ekonomin. För dessa företag är digital marknadsföring ett viktigt verktyg för att bygga varumärke och attrahera kunder från hela Västmanland. Genom att optimera för lokala sökningar kan butiker öka sin trafik och försäljning.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">Från Google-sökning till butiksdörren</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Lokal SEO handlar om att koppla ihop den digitala och fysiska världen. När en kund i Västerås söker efter "blomsterbutik nära mig" eller "sportaffär Köping" vill du att ditt företag dyker upp i toppen av sökresultaten – komplett med öppettider, adress, recensioner och en länk till din professionella hemsida.</p>
              <p>Vi implementerar en komplett lokal SEO-strategi som inkluderar optimering av din Google Business Profile, strukturerad data (Schema.org) på din hemsida, och lokalt anpassat innehåll som stärker din auktoritet i sökresultaten. Allt detta är byggt på en teknisk grund som garanterar blixtsnabba laddningstider och felfri mobilupplevelse.</p>
              <p>Resultatet? Fler kunder som hittar dig online och besöker din butik. Många av våra kunder i Västmanland rapporterar en markant ökning i både webbtrafik och fysiska besök efter att vi implementerat vår digitala strategi. Det handlar om att skapa en sömlös upplevelse från det första Google-klicket till det fysiska butiksbesöket.</p>
              <p>För att förbättra din synlighet ytterligare kan du överväga våra tjänster inom webbutveckling. En modern hemsida är grunden för framgångsrik digital marknadsföring. Kolla in våra [webbutvecklingstjänster](/tjanster/webbutveckling) för att se hur vi kan hjälpa din butik.</p>
              <p>Utöver SEO erbjuder vi också specialiserade tjänster för att optimera din online-närvaro. Våra experter hjälper dig att skapa innehåll som lockar kunder och bygger förtroende. För djupgående analys, börja med en [gratis SEO-analys](/gratis-seo-analys).</p>
              <p>Genom att kombinera lokal SEO med högkvalitativt innehåll kan din butik nå nya kunder och öka försäljningen. Vi hjälper företag i Västmanland att lyckas online genom att erbjuda skräddarsydda lösningar som passar deras behov.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">Vanliga frågor</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Hur kan digital marknadsföring hjälpa min butik?</h3>
                <p className="text-muted-foreground leading-relaxed">En optimerad hemsida och lokal SEO gör att dina kunder hittar dig när de söker efter produkter i ditt område. Det ökar både webbtrafik och fysiskt besöksflöde till din butik. För mer information, besök våra [SEO-optimeringstjänster](/tjanster/seo-optimering).</p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Behöver min butik en hemsida om jag har sociala medier?</h3>
                <p className="text-muted-foreground leading-relaxed">Ja. Sociala medier är viktiga komplement men en egen hemsida ger dig full kontroll, bättre SEO-synlighet och en professionell plattform som du äger och som rankar på Google. Kolla in våra [webbutvecklingstjänster](/tjanster/webbutveckling).</p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Hur mäter ni resultaten?</h3>
                <p className="text-muted-foreground leading-relaxed">Vi använder Google Analytics och Search Console för att mäta organisk trafik, sökordplaceringar och konverteringar. Du får regelbundna rapporter som visar exakt hur din digitala närvaro presterar. Börja med en [gratis SEO-analys](/gratis-seo-analys).</p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Vad kostar digital marknadsföring för min butik?</h3>
                <p className="text-muted-foreground leading-relaxed">Vi erbjuder paket från 3 000 kr/månad för SEO-tjänster. För hemsideutveckling börjar priserna från 5 000 kr. Kontakta oss för en skräddarsydd offert.</p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Hur snabbt kan jag se resultat?</h3>
                <p className="text-muted-foreground leading-relaxed">Tekniska förbättringar syns ofta inom veckor, medan fullständig SEO-effekt kan ta 3–6 månader. Vi arbetar kontinuerligt för att förbättra din synlighet.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </div>
);

export default DigitalMarknadsforing;
