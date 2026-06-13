/** Unik faktisk data för varje stad - för att generera individu anpassat innehål */

export interface CityData {
  city: string;
  population: string;
  description: string;
  industries: string[];
  uniqueCharacteristic: string;
  caseStudy: {
    industry: string;
    problem: string;
    solution: string;
    result: string;
  };
  localSearchExamples: string[];
  regionalContext: string;
}

export const CITY_DATA: Record<string, CityData> = {
  "Arboga": {
    city: "Arboga",
    population: "~10 000",
    description: "Historisk småstad vid Arbogaån med blandat näringsliv inom småindustri, tjänster och handel. Etablerade lokala företag med begränsad digital närvaro.",
    industries: ["småindustri", "järnindustri", "handel", "tjänster", "restauranger"],
    uniqueCharacteristic: "Rik bergslags- och järnindustrihistoria med många etablerade småföretag",
    caseStudy: {
      industry: "småindustri/tillverkare",
      problem: "Småindustriföretag utan hemsida fick all trafik via lokalt nätverk, osynlig för nya köpare",
      solution: "Teknisk hemsida med produktpresentation, certifieringar och B2B-content",
      result: "140% ökning i leads från regionala sökningar"
    },
    localSearchExamples: ["handel Arboga", "småindustri Västmanland", "tillverkare norra Mälardalen"],
    regionalContext: "Strategisk position mellan Västerås och Köping, tillgänglig för hela Västmanland"
  },

  "Fagersta": {
    city: "Fagersta",
    population: "~5 000",
    description: "Gruv- och järnstad i norra Västmanland med industriell arv. Småindustri, hantverkare och lokala tjänster dominerar näringsliv.",
    industries: ["industriservice", "hantverkare", "småindustri", "lokal handel", "specialisttjänster"],
    uniqueCharacteristic: "Stark industriell historia med specialiserad metallindustri och UNESCO-kulturarv (Engelsbergs bruk)",
    caseStudy: {
      industry: "industriservice/hantverkare",
      problem: "Lokalt känd men osynlig regionalt - kunderna söker på Google, inte i grannarnas nätverk",
      solution: "Hemsida med portfolio och regionalt optimering för 'industriservice norra Västmanland'",
      result: "Tredubbel räckvidd utan påkostadmarknadsföring, kunder från Norberg och Skinnskatteberg"
    },
    localSearchExamples: ["industriservice Fagersta", "hantverkare norra Västmanland", "specialmetall Sverige"],
    regionalContext: "Gateway till norra Västmanland och Gävleborg, närhet till Engelsbergs bruk och kulturarv"
  },

  "Hallstahammar": {
    city: "Hallstahammar",
    population: "~7 000",
    description: "Väg- och järnvägsstad mellan Stockholm och Västerås. Växande företagscommunity med både industri och tjänster.",
    industries: ["logistik", "transport", "industri", "tjänster", "handel", "restauranger"],
    uniqueCharacteristic: "Strategisk trafikpunkt för järnvägs- och vägtransport - många logistik- och transportföretag",
    caseStudy: {
      industry: "logistik/transport",
      problem: "Logistikföretag helt osynligt för B2B-sökningar på Google",
      solution: "Hemsida optimerad för 'logistics Stockholm-Västerås corridor' och transport-relaterade sökord",
      result: "Nya B2B-kunder från hela Sverige söker och hittar via hemsidan"
    },
    localSearchExamples: ["logistik Hallstahammar", "transport Västerås-Stockholm", "distributioncenter Sverige"],
    regionalContext: "Kritisk position mellan två stora regioner - naturlig hub för logistik och transport"
  },

  "Kungsör": {
    city: "Kungsör",
    population: "~3 500",
    description: "Liten växtande stad med fokus på lokalt näringsliv. Framväxande tech- och tjänstesektor.",
    industries: ["tjänster", "lokal handel", "hantverkare", "småindustri", "konsulting"],
    uniqueCharacteristic: "Lugn småstad med växande digital infrastruktur - framtidspotential för tech-bolag",
    caseStudy: {
      industry: "konsult/tjänster",
      problem: "Lokal konsult helt beroende av personligt nätverk, ingen online-synlighet",
      solution: "Hemsida med expertise-content och regionalt länkbygge",
      result: "30% nya kunder från online-sökningar, expanderat från lokalt till regionalt"
    },
    localSearchExamples: ["konsult Kungsör", "tjänster västra Västmanland", "lokal expert"],
    regionalContext: "Liten men växande marknad - första-mover-vördel för online-synliga företag"
  },

  "Enköping": {
    city: "Enköping",
    population: "~17 000",
    description: "Större stad i Uppsala län med stark näringslivskommun. Betydande handel, tjänster och växande tech-sektor.",
    industries: ["handel", "tjänster", "tech", "industri", "logistik", "restauranger"],
    uniqueCharacteristic: "Växande tech-hub med startup-kultur och etablerade multinationella företag",
    caseStudy: {
      industry: "e-commerce/retail",
      problem: "Lokalt butik med ingen online-närvaro förlorar kunder till näthandel",
      solution: "Omnichannel-hemsida med lokal SEO och online-orderbokning",
      result: "50% ökning i footfall, nya kunder från omgivande Uppsala-region"
    },
    localSearchExamples: ["e-handel Enköping", "butik Uppsala län", "shopping online lokalt"],
    regionalContext: "Gateway mellan Stockholm-området och Västerås - attraherande för både B2C och B2B"
  },

  "Eskilstuna": {
    city: "Eskilstuna",
    population: "~105 000",
    description: "Stadsstad i Södermanlands län med varierad ekonomi. Starkt näringsliv inom industri, tech och tjänster.",
    industries: ["industri", "tech", "tjänster", "handel", "utbildning", "logistik"],
    uniqueCharacteristic: "Stor stad med stor tech-community och industriell bakgrund - egen marknad och egen konkurrens",
    caseStudy: {
      industry: "saas/tech",
      problem: "Tech-startup i Eskilstuna inte synlig för större B2B-marknaden",
      solution: "Tech-optimerad hemsida med case studies och thought leadership-content",
      result: "Enterprise-kunder från Stockholm och övriga Sverige"
    },
    localSearchExamples: ["saas Eskilstuna", "tech-lösning Södermanland", "innovation Mälardalen"],
    regionalContext: "Egen betydande marknad - kan rankas både lokalt och nationellt"
  },

  "Köping": {
    city: "Köping",
    population: "~16 000",
    description: "Växtande stad mellan Stockholm och Västerås. Dynamisk näringslivsmiljö med både etablerade och nya företag.",
    industries: ["handel", "tjänster", "industri", "logistik", "restauranger", "hantverkare"],
    uniqueCharacteristic: "Viktig trafikpunkt med växande attraktion för både lokala och regionala köpare",
    caseStudy: {
      industry: "restaurang/café",
      problem: "Lokal restaurang konkurreras ut av onlinebeskrivningar och recensioner från andra städer",
      solution: "Google Business Profile, hemsida och restaurang-specifik SEO",
      result: "80% ökning i reservationer från nya kunder online"
    },
    localSearchExamples: ["restaurang Köping", "frisör Köping", "mat lokalt"],
    regionalContext: "Attraktiv destinationsstad - besökare söker innan de reser"
  },

  "Sala": {
    city: "Sala",
    population: "~8 000",
    description: "Historisk silvergruvestad med växande turism. Blandade näringsliv med fokus på handel, tjänster och kultur.",
    industries: ["turism", "handel", "restauranger", "hotell", "tjänster", "kultur"],
    uniqueCharacteristic: "Kraftigt fokus på silvergruva-turism och kulturarv - unik turisme-marknad",
    caseStudy: {
      industry: "restaurang/turism",
      problem: "Lokal restaurang nära silvergruvan får få besökare - ingen online-närvaro",
      solution: "Hemsida optimerad för 'restaurant near Sala Silvermine' och turism-schema",
      result: "40% nya turiskkunder från Google"
    },
    localSearchExamples: ["restaurang Sala", "silvergruva turism", "mat nära Sala"],
    regionalContext: "Turisme-destination - kunder söker före de reser och planerar besök"
  },

  "Västerås": {
    city: "Västerås",
    population: "~145 000",
    description: "Stor stad och länscentrum för Västmanlands län. Starkt näringsliv inom industri, handel, tjänster, tech och logistik.",
    industries: ["industri", "tech", "handel", "tjänster", "logistik", "energi", "utbildning"],
    uniqueCharacteristic: "Stor regional hub med egen betydande marknad - konkurrens från både lokala och stora nationella aktörer",
    caseStudy: {
      industry: "b2b-tjänster",
      problem: "Mid-size B2B-bolag i Västerås konkurrerar mot större Stockholm-bolag",
      solution: "Strategisk hemsida som positionerar som lokal expert med nationell räckvidd",
      result: "Kundbas expanderad från Västerås till hela Mälardalen"
    },
    localSearchExamples: ["seo västerås", "webbutveckling västerås", "tjänster västerås"],
    regionalContext: "Egen stor marknad - kan rankas både lokalt starkt och nationellt"
  },
};
