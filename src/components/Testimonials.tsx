import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Anna Johansson",
    company: "Johansson Redovisning AB, Västerås",
    highlight: "+40% fler förfrågningar",
    quote:
      "Vår nya hemsida laddas på under en sekund och har redan ökat antalet förfrågningar med över 40 procent. Samarbetet med LRH Konsult var professionellt från första kontakten till lansering, och vi märkte direkt att fler kunder hittade oss via Google.",
  },
  {
    name: "Erik Lindström",
    company: "Lindströms Bygg, Köping",
    highlight: "3x mer trafik",
    quote:
      "Som hantverkare i Köping behövde vi en hemsida som visade vilka vi är och som faktiskt syns i sökresultaten. LRH Konsult levererade en snabb, modern sajt som rankar på första sidan för våra viktigaste sökord – trafiken har tredubblats sedan lanseringen.",
  },
  {
    name: "Maria Svensson",
    company: "Café Solsidan, Sala",
    highlight: "+60% fler bokningar",
    quote:
      "Vi fick precis den känsla vi ville ha — en enkel och snygg hemsida som fungerar lika bra på mobilen som på datorn. Bordsreserveringarna har ökat med 60 procent sedan den nya sajten lanserades.",
  },
  {
    name: "Johan Bergström",
    company: "Bergströms El, Hallstahammar",
    highlight: "Topp 1 på Google",
    quote:
      "Innan vi anlitade LRH Konsult hade vi knappt någon synlighet online. Nu rankar vi på första sidan i Google för våra viktigaste sökord och får löpande förfrågningar via hemsidan. En gamechanger för vår verksamhet.",
  },
  {
    name: "Sara Nilsson",
    company: "Nilssons Trädgård & Design, Enköping",
    highlight: "5x fler leads",
    quote:
      "LRH Konsult förstod direkt vad vi behövde. Hemsidan är blixtsnabb, ser fantastisk ut och har redan genererat fem gånger fler leads än vår gamla sajt gjorde på ett helt år. Rekommenderas varmt!",
  },
];

const Testimonials = () => {
  return (
    <section id="recensioner" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground mb-6 text-center">
            Vad våra kunder i Västmanland säger
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center mb-12">
            Vi är stolta över att hjälpa företag i Västerås, Köping, Sala, Enköping och Hallstahammar att växa digitalt. Här är vad några av våra kunder tycker om samarbetet.
          </p>
        </AnimatedSection>

        <div className="space-y-10" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="LRH Konsult" />
          {testimonials.map((t) => (
            <AnimatedSection key={t.name}>
              <blockquote
                className="border-l-4 border-primary pl-6"
                itemScope
                itemProp="review"
                itemType="https://schema.org/Review"
              >
                <div itemScope itemProp="reviewRating" itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>
                {t.highlight && (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20">
                    {t.highlight}
                  </span>
                )}
                <p className="text-foreground leading-[1.8] text-base italic mb-4" itemProp="reviewBody">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-sm text-muted-foreground">
                  <strong className="text-foreground" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{t.name}</span>
                  </strong> — {t.company}
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
