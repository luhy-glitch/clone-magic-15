/** Shared FAQ data – single source of truth used by both Index.tsx JSON-LD and FAQ.tsx component */

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteWideFaqs: FAQItem[] = [
  {
    question: "Vad kostar en professionell hemsida?",
    answer:
      "Priset varierar beroende på projektets omfattning. Vi erbjuder paket från 5 000 kr för enklare sidor upp till skräddarsydda premiumlösningar för 25 000 kr och uppåt.",
  },
  {
    question: "Hur snabb är en hemsida från LRH Konsult?",
    answer:
      "Vi siktar alltid på 100/100 i Google PageSpeed Insights för att garantera bästa möjliga användarupplevelse och SEO-rankning.",
  },
  {
    question: "Hur lång tid tar det att bygga en webbplats?",
    answer:
      "Det beror på projektets omfattning. En enkel webbplats kan vara klar inom 1–2 veckor, medan en mer komplex lösning med e-handel eller skräddarsydda funktioner kan ta 4–8 veckor.",
  },
  {
    question: "Hur lång tid tar SEO-optimering?",
    answer:
      "De första förbättringarna syns ofta inom 2–3 månader, medan mer konkurrenskraftiga sökord kan ta 6–12 månader att ranka för. SEO är en långsiktig investering som ger bestående resultat.",
  },
  {
    question: "Kan jag uppdatera webbplatsen själv efteråt?",
    answer:
      "Absolut! Jag bygger webbplatser med användarvänliga CMS-lösningar så att du enkelt kan uppdatera innehåll, bilder och texter utan teknisk kunskap.",
  },
  {
    question: "Ingår hosting och domän?",
    answer:
      "Jag hjälper dig att välja rätt hosting och domänlösning. Dessa kostnader tillkommer separat men jag kan rekommendera pålitliga leverantörer.",
  },
  {
    question: "Ingår support och underhåll i era priser?",
    answer:
      "Vi erbjuder dedikerade underhållspaket för att säkerställa att din sajt förblir säker och snabb efter lanseringen. Det ingår i Premium-paketet eller kan läggas till separat.",
  },
  {
    question: "Finns det några dolda avgifter?",
    answer:
      "Nej, vi tror på full transparens. Alla kostnader specificeras tydligt i våra paket och offerter.",
  },
  {
    question: "Vilka företag arbetar du med i Västmanland?",
    answer:
      "Jag arbetar med företag av alla storlekar i Västerås, Köping, Sala, Enköping, Eskilstuna, Arboga, Fagersta och hela Västmanlands län. Oavsett om du är en enskild firma eller ett större företag kan jag hjälpa dig med webbutveckling och SEO.",
  },
];
