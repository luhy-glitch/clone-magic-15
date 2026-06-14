import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Link, useLocation } from "react-router-dom";
import { Check, ArrowRight, Megaphone, BarChart3, Target, ShieldCheck } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_URL as BASE_URL } from "@/lib/constants";

const packages = [
  {
    name: "Lokal Start",
    price: "2 490",
    unit: "kr / mån",
    description: "Perfekt för enskilda firmor och lokala företag som vill synas på specifika sökord i sin hemstad.",
    features: [
      "1 fokuserad kampanj",
      "Grundläggande sökordsanalys",
      "Månadsvis optimering",
      "Rapport via e-post",
      "Support via mejl",
    ],
    popular: false,
  },
  {
    name: "Tillväxt",
    price: "4 900",
    unit: "kr / mån",
    description: "För företag som vill expandera till fler orter eller marknadsföra flera tjänster samtidigt.",
    features: [
      "Upp till 3 kampanjer",
      "Djupgående konkurrentanalys",
      "Veckovis optimering & A/B-testning",
      "Video-genomgång av resultat varje månad",
      "Prioriterad support (mejl & telefon)",
    ],
    popular: true,
  },
  {
    name: "Marknadsledare",
    price: "8 500",
    unit: "kr / mån",
    description: "En helhetslösning för dig som vill dominera din bransch lokalt och regionalt.",
    features: [
      "Obegränsat antal kampanjer",
      "Avancerad remarketing",
      "Löpande optimering i realtid",
      "Personligt strategimöte varje månad",
      "Dedikerad kontaktperson",
    ],
    popular: false,
  },
];

const includes = [
  { icon: BarChart3, title: "Konverteringsspårning", text: "Vi mäter exakt vad som leder till samtal, mejl eller bokningar så att varje krona kan spåras." },
  { icon: Target, title: "A/B-testning", text: "Vi testar olika annonstexter och landningssidor för att se vad som lockar flest klick och konverteringar." },
  { icon: ShieldCheck, title: "Negativa sökord", text: "Vi ser till att du inte betalar för irrelevanta sökningar som slösar din budget." },
  { icon: Megaphone, title: "Lokal styrning", text: "Dina annonser visas bara för personer i de städer du faktiskt verkar i – Västerås, Köping, Sala och hela Mälardalen." },
];

const processSteps = [
  { n: "1", title: "Analys & mål", text: "Vi börjar med att förstå ditt företag, dina marginaler och vad en ny kund faktiskt är värd. Sedan kartlägger vi vilka sökord dina kunder använder och vad konkurrenterna betalar för dem." },
  { n: "2", title: "Kontouppsättning & spårning", text: "Du äger alltid ditt eget Google Ads-konto. Vi sätter upp korrekt konverteringsspårning så att vi mäter det som räknas – samtal, formulär och bokningar, inte bara klick." },
  { n: "3", title: "Annonser & landningssidor", text: "Vi skriver annonstexter som sticker ut och ser till att de leder till en sida byggd för att konvertera. En snabb landningssida med tydlig call-to-action är ofta skillnaden mellan en besökare och en kund." },
  { n: "4", title: "Lansering & löpande optimering", text: "När kampanjen är live börjar finliret: vi testar annonser mot varandra, lägger till negativa sökord och justerar buden löpande för att sänka din kostnad per kund över tid." },
  { n: "5", title: "Tydlig rapportering", text: "Du får begripliga rapporter – och en personlig genomgång i de större paketen – som visar vad du fått för pengarna i kronor och kunder, inte tekniskt nonsens." },
];

const faq = [
  { question: "Betalar jag annonsbudgeten till dig?", answer: "Nej, du kopplar ditt eget betalkort direkt till Google Ads-kontot. Min avgift är en fast kostnad för att jag sköter strategin, optimeringen och analysen av dina kampanjer. Du äger alltid ditt eget konto." },
  { question: "Hur mycket bör jag lägga i annonsbudget?", answer: "Det beror helt på din bransch och konkurrens. För ett lokalt företag rekommenderar jag ofta en startbudget på minst 3 000 – 5 000 kr per månad utöver min förvaltningsavgift för att få tillräckligt med data att optimera utifrån." },
  { question: "Hur snabbt ser jag resultat?", answer: "Till skillnad från SEO kan du se resultat redan samma dag som kampanjen startar. Det tar dock 2–4 veckor av optimering för att kampanjen ska nå sin fulla potential." },
  { question: "Kan jag pausa eller avsluta när som helst?", answer: "Ja, det finns inga bindningstider. Du kan pausa eller avsluta din kampanj med en månads uppsägningstid." },
  { question: "Vad är skillnaden mellan Google Ads och SEO?", answer: "Google Ads ger dig omedelbar synlighet mot betalning, medan SEO bygger organisk synlighet över tid. Den bästa strategin kombinerar båda – Ads för snabba leads och SEO för långsiktig dominans." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Google Ads-förvaltning",
      "serviceType": "Google Ads-förvaltning",
      "description": "Professionell Google Ads-hantering för lokala företag i Västmanland och Mälardalen.",
      "url": `${BASE_URL}/tjanster/google-ads`,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "SEK",
        "lowPrice": "2490",
        "highPrice": "8500",
        "offerCount": "3",
        "url": `${BASE_URL}/tjanster/google-ads`,
      },
      "provider": {
        "@type": "ProfessionalService",
        "name": "LRH Konsult",
        "url": BASE_URL,
        "telephone": "+46704606578",
        "areaServed": [
          { "@type": "City", "name": "Västerås" },
          { "@type": "City", "name": "Köping" },
          { "@type": "City", "name": "Sala" },
          { "@type": "City", "name": "Eskilstuna" },
          { "@type": "City", "name": "Enköping" },
          { "@type": "State", "name": "Västmanland" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faq.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      })),
    },
  ],
};

const GoogleAdsPage = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen">
      <PageHead
        title="Google Ads för företag i Västmanland | LRH Konsult"
        description="Professionell Google Ads-förvaltning för företag i Västerås, Köping och Mälardalen. Fasta månadspaket från 2 490 kr. Resultat direkt."
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="bg-section-alt border-b border-border" aria-label="Brödsmulor">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/">Hem</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/#tjanster">Tjänster</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Google Ads</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="ads-hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="max-w-3xl">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Megaphone size={28} className="text-primary" />
                </div>
                <span className="text-primary font-medium text-sm tracking-widest uppercase">Google Ads</span>
                <h1 id="ads-hero-heading" className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
                  Google Ads som ger resultat direkt
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Medan SEO är ett maraton, är Google Ads en sprint. För lokala företag som snabbt vill synas högst upp på Google i städer som{" "}
                  <Link to="/webbutveckling-vasteras" className="text-primary hover:underline">Västerås</Link>,{" "}
                  <Link to="/seo-koping" className="text-primary hover:underline">Köping</Link> eller{" "}
                  <Link to="/webbutveckling-eskilstuna" className="text-primary hover:underline">Eskilstuna</Link>{" "}
                  är annonsering det mest effektiva sättet att driva relevanta leads och nya kunder direkt.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                  Du äger alltid ditt eget konto och betalar annonskostnaden direkt till Google – min fasta avgift täcker expertisen och det löpande arbetet för att hålla dina kostnader nere och dina konverteringar uppe.
                </p>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Boka fri konsultation <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Varför Google Ads */}
        <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="ads-why-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="ads-why-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6">
                Varför Google Ads för företag i Västmanland?
              </h2>
              <div className="space-y-5 text-muted-foreground leading-[1.7] text-base">
                <p>När någon söker på "elektriker Västerås" eller "tandläkare Köping" har de oftast redan bestämt sig för att anlita någon – de letar bara efter rätt företag. Google Ads låter dig synas högst upp i exakt det ögonblicket, ovanför både konkurrenterna och de organiska resultaten. För lokala företag är det skillnaden mellan att hittas direkt och att förbli osynlig.</p>
                <p>Fördelen för dig som verkar i Mälardalen är att konkurrensen om annonsplatserna ofta är betydligt lägre än i storstäderna. Det betyder lägre kostnad per klick och att även en blygsam budget kan ge tydlig avkastning. Du betalar bara när någon faktiskt klickar på din annons – och vi ser till att klicken kommer från rätt personer i just ditt område.</p>
                <p>Allt är dessutom mätbart. Vi följer exakt vilka sökord, annonser och tidpunkter som genererar samtal och förfrågningar, och flyttar budgeten dit den gör mest nytta. Vill du ha en strategi som håller långsiktigt rekommenderar vi att kombinera annonseringen med <Link to="/tjanster/seo-optimering" className="text-primary hover:underline font-medium">SEO-optimering</Link> och en snabb, konverterande <Link to="/tjanster/webbutveckling" className="text-primary hover:underline font-medium">hemsida</Link>.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing packages */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="ads-pricing-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 id="ads-pricing-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif">
                  Prispaket för Google Ads
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Fast månadskostnad – inga dolda avgifter. Startavgift på <strong className="text-foreground">3 500 kr</strong> tillkommer för uppsättning av konto, spårning och analys.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {packages.map((pkg, i) => (
                <FadeIn key={pkg.name} delay={0.1 + i * 0.15}>
                  <div
                    className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col h-full transition-shadow ${
                      pkg.popular
                        ? "border-primary bg-card shadow-lg shadow-primary/10 scale-[1.02]"
                        : "border-border bg-card hover:shadow-md"
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                        Populärast
                      </span>
                    )}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold font-serif text-foreground">{pkg.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                    </div>
                    <div className="mb-6">
                      <span className="text-3xl sm:text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground ml-1 text-sm">{pkg.unit}</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                          <Check size={16} className="text-primary mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/kontakt"
                      className={`w-full text-center py-3 rounded-lg font-medium transition-colors block ${
                        pkg.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      Kom igång
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="ads-process-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="ads-process-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6">
                Så arbetar vi med dina Google Ads
              </h2>
              <p className="text-muted-foreground leading-[1.7] text-base mb-10">
                En lönsam kampanj handlar inte om att "boosta" och hoppas på det bästa, utan om en strukturerad process där varje krona ska kunna motiveras. Så här går det till:
              </p>
            </AnimatedSection>
            <ol className="space-y-6">
              {processSteps.map((step, i) => (
                <FadeIn key={step.n} delay={i * 0.08}>
                  <li className="flex gap-5">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold font-serif flex items-center justify-center" aria-hidden="true">{step.n}</span>
                    <div>
                      <h3 className="font-bold font-serif text-lg text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground leading-[1.7] text-base">{step.text}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>

        {/* What's always included */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="ads-includes-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="ads-includes-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-12">
                Detta ingår alltid i min förvaltning
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {includes.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <article className="bg-card border border-border rounded-xl p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold font-serif text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Google Ads vs SEO */}
        <section className="py-16 sm:py-24 bg-section-alt" aria-labelledby="ads-vs-seo-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="ads-vs-seo-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6">
                Google Ads eller SEO – vad ska du välja?
              </h2>
              <div className="space-y-5 text-muted-foreground leading-[1.7] text-base">
                <p>Det är en av de vanligaste frågorna vi får, och svaret är oftast "båda – men i rätt ordning". Google Ads ger dig synlighet och leads redan från första dagen, vilket gör det perfekt när du precis lanserat, har ett tidsbegränsat erbjudande, eller vill testa vilka sökord som faktiskt konverterar innan du satsar på organisk ranking.</p>
                <p><Link to="/tjanster/seo-optimering" className="text-primary hover:underline font-medium">SEO</Link> tar längre tid men bygger ett bestående värde – när du väl rankar organiskt fortsätter trafiken att komma utan att du betalar per klick. Den smartaste strategin för de flesta lokala företag är att starta med Ads för snabba resultat och parallellt bygga upp SEO, så att du på sikt blir mindre beroende av annonsbudgeten.</p>
                <p>Är du osäker på var du står idag? Börja med en kostnadsfri <Link to="/gratis-seo-analys" className="text-primary hover:underline font-medium">SEO-analys</Link> så får du en tydlig bild av vilken mix som passar ditt företag bäst.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-background" aria-labelledby="ads-faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="ads-faq-heading" className="text-2xl sm:text-3xl font-bold font-serif text-center mb-10">
                Vanliga frågor om Google Ads
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-serif font-bold text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Related services */}
        <section className="py-12 sm:py-16 bg-section-alt border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl font-bold font-serif mb-6 text-center">Se även</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
                  { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
                  { label: "Gratis SEO-analys", href: "/gratis-seo-analys" },
                ].map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
                  >
                    {s.label} <ArrowRight size={16} className="text-primary" />
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6">
                Redo att synas högst upp på Google?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Boka en kostnadsfri konsultation så diskuterar vi hur Google Ads kan ge ditt företag fler kunder direkt.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Boka fri konsultation <ArrowRight size={20} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoogleAdsPage;
