import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Case = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Kundcase & Referenser | LRH Konsult"
        description="Se hur vi hjälpt företag i Västmanland att öka sin digitala närvaro med snabba hemsidor och lokal SEO."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Kundcase & Referenser",
          "description": "Se hur vi hjälpt företag i Västmanland att öka sin digitala närvaro.",
          "url": "https://www.lrhkonsult.se/case",
        }}
      />
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight mb-8">
              Kundcase & Referenser
            </h1>
            <p className="text-muted-foreground leading-[1.6] mb-16">
              Här delar vi verkliga resultat från projekt vi genomfört åt företag i Mälardalen och Västmanland. Varje projekt är unikt, men målet är detsamma: snabbare hemsidor, bättre synlighet och fler kunder.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Från 40 till 100 i PageSpeed – En teknisk revolution
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Ett etablerat tjänsteföretag i Västmanland kom till oss med ett problem som är vanligare än man tror: deras hemsida såg bra ut men presterade katastrofalt dåligt under huven. Google PageSpeed Insights visade 40 poäng i prestanda på mobil, vilket innebar att sidan tog över fem sekunder att ladda fullständigt. Konsekvensen var dramatisk: 60% av mobilbesökarna lämnade sidan innan den ens hade laddats klart.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Vi beslutade att bygga om hemsidan från grunden med React och Next.js. Den nya arkitekturen använde server-side rendering för kritiska sidor, automatisk koddelning för att minimera JavaScript-payloaden, och statisk generering för sidor med sällan ändrat innehåll. Alla bilder konverterades till AVIF-format med explicita dimensioner för att eliminera layout shifts. Vi implementerade Critical CSS Inlining och optimerade JavaScript-exekveringen genom att eliminera render-blockerande skript.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Den totala mängden JavaScript som skickades till klienten minskade från 2 MB till 89 KB. LCP förbättrades från 5,2 sekunder till 0,8 sekunder. CLS gick från 0,35 till 0. PageSpeed-poängen gick från 40 till 100 – på alla fyra kategorier.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Inom tre månader ökade den organiska trafiken med 156%, genomsnittlig tid på sidan ökade med 340%, avhoppsfrekvensen minskade från 60% till 18%, och antalet leads via kontaktformuläret tredubblades. Kunden gick från sida 3 till topp 3 på sina viktigaste sökord i Västmanland.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Hantverksföretag i Västerås: Från osynlig till topplacering
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Ett etablerat hantverksföretag i Västerås kontaktade oss med en föråldrad WordPress-sajt som laddade på över 6 sekunder. De hade nästan ingen organisk trafik trots över 15 år i branschen. Problemet var tydligt: en tung, ooptimerad sajt utan strukturerad data eller lokal SEO-strategi.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Vi byggde en helt ny hemsida i React med fokus på prestanda och lokal sökbarhet. Genom att implementera JSON-LD för lokala företag, optimera alla bilder till AVIF-format och eliminera onödiga tredjepartsskript nådde vi 100/100 i Google PageSpeed Insights.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Resultatet efter 6 månader: +200% organisk trafik, topp 3-placering för "hantverkare Västerås" och en laddningstid på under 0.8 sekunder. Konverteringsgraden ökade med 85% tack vare en tydlig CTA-struktur och mobiloptimerad design.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Butik i Köping: Digital transformation med mätbara resultat
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              En lokal butik i Köping ville synas bättre på Google för att nå kunder i hela Västmanland. Deras befintliga Wix-sajt hade ett PageSpeed-poäng på 32/100 och rankade inte alls för lokala söktermer.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Vi migrerade sajten till en modern React-lösning med server-side rendering för optimal indexering. Genom att arbeta strategiskt med lokal SEO, Google Business-optimering och teknisk on-page SEO skapade vi en sajt som Google älskar.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Inom 4 månader ökade den organiska trafiken med 150%. Sajten rankade på första sidan för "butik Köping" och relaterade söktermer. PageSpeed-poängen gick från 32 till 100/100 – en förbättring på över 200%.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Konsultföretag i Sala: Från noll till ledande digital närvaro
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Ett nystartat konsultföretag i Sala behövde en professionell webbplats som kunde konkurrera med etablerade aktörer. De hade ingen befintlig sajt och ville börja rätt från start med modern teknik och SEO.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Vi designade och utvecklade en komplett webbplats med React och TypeScript, inkluderat kontaktformulär, FAQ-sektion med strukturerad data och en blogg för långsiktig SEO-strategi. Allt optimerat för Core Web Vitals med FCP under 1 sekund.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-16">
              Resultatet: Sajten rankade på Googles första sida inom 3 månader för lokala söktermer i Sala. Den genererar nu 40+ kvalificerade leads per månad och har blivit företagets primära kundkälla. PageSpeed: 100/100 på både mobil och desktop.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Redo att bli nästa framgångsberättelse?
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Oavsett om du befinner dig i Västerås, Köping, Sala, Enköping, Eskilstuna, Arboga eller Fagersta kan vi hjälpa ditt företag att växa digitalt. Boka en kostnadsfri konsultation så diskuterar vi hur vi kan skapa liknande resultat för dig.
            </p>
            <Link
              to="/gratis-seo-analys"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 min-h-[44px]"
            >
              Få en gratis SEO-analys <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Case;
