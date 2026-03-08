/** Single source of truth for all city/regional page data used across the site */

export interface CityLink {
  label: string;
  to: string;
  city: string;
}

export const ALL_CITIES: CityLink[] = [
  { label: "Webbutveckling Västerås", to: "/webbutveckling-vasteras", city: "Västerås" },
  { label: "SEO Köping", to: "/seo-koping", city: "Köping" },
  { label: "Hemsidor Sala", to: "/hemsidor-sala", city: "Sala" },
  { label: "Webbutveckling Enköping", to: "/webbutveckling-enkoping", city: "Enköping" },
  { label: "Webbutveckling Eskilstuna", to: "/webbutveckling-eskilstuna", city: "Eskilstuna" },
  { label: "Webbutveckling Arboga", to: "/webbutveckling-arboga", city: "Arboga" },
  { label: "Webbutveckling Fagersta", to: "/webbutveckling-fagersta", city: "Fagersta" },
  { label: "Webbutveckling Hallstahammar", to: "/webbutveckling-hallstahammar", city: "Hallstahammar" },
  { label: "Webbutveckling Kungsör", to: "/webbutveckling-kungsor", city: "Kungsör" },
  { label: "Webbutveckling Surahammar", to: "/webbutveckling-surahammar", city: "Surahammar" },
  { label: "Webbutveckling Heby", to: "/webbutveckling-heby", city: "Heby" },
  { label: "Webbutveckling Norberg", to: "/webbutveckling-norberg", city: "Norberg" },
  { label: "Webbutveckling Skinnskatteberg", to: "/webbutveckling-skinnskatteberg", city: "Skinnskatteberg" },
  { label: "Webbutveckling Uppsala", to: "/webbutveckling-uppsala", city: "Uppsala" },
  { label: "Webbutveckling Örebro", to: "/webbutveckling-orebro", city: "Örebro" },
];

/** Navbar-style short labels (city name only) */
export const CITY_NAV_ITEMS = ALL_CITIES.map(c => ({ label: c.city, to: c.to }));

/** Footer includes niche pages alongside city pages */
export const FOOTER_LOCAL_LINKS: { label: string; to: string }[] = [
  ...ALL_CITIES.map(c => ({ label: c.label, to: c.to })),
  { label: "Hemsidor Bygg & Hantverkare", to: "/hemsidor-bygg-hantverkare" },
  { label: "Restauranger Sala", to: "/restauranger-sala" },
  { label: "Frisörer Köping", to: "/frisor-koping" },
  { label: "Digital Marknadsföring", to: "/digital-marknadsforing-butiker" },
  { label: "Vad kostar en hemsida?", to: "/tjanster/vad-kostar-en-hemsida-2026" },
];

/** City region mapping for JSON-LD */
export const CITY_REGIONS: Record<string, string> = {
  "Enköping": "Uppsala län",
  "Eskilstuna": "Södermanlands län",
  "Västerås": "Västmanlands län",
  "Köping": "Västmanlands län",
  "Sala": "Västmanlands län",
  "Arboga": "Västmanlands län",
  "Fagersta": "Västmanlands län",
  "Hallstahammar": "Västmanlands län",
  "Kungsör": "Västmanlands län",
  "Surahammar": "Västmanlands län",
  "Heby": "Uppsala län",
  "Norberg": "Västmanlands län",
  "Skinnskatteberg": "Västmanlands län",
  "Uppsala": "Uppsala län",
  "Örebro": "Örebro län",
};
