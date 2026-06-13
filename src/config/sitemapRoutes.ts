/**
 * Sitemap Route Configuration
 *
 * This is the single source of truth for all static sitemap routes.
 * To add a new page: add a new object to the SITEMAP_ROUTES array.
 * To remove a page: delete or comment out the corresponding object.
 *
 * Fields:
 *   path        – URL path relative to SITE_URL (no trailing slash)
 *   changefreq  – How often the page changes: daily | weekly | monthly | yearly
 *   priority    – Importance 0.0–1.0 (1.0 = highest)
 *
 * After editing, run:  npm run generate:sitemap
 */

export const SITE_URL = "https://www.lrhkonsult.se";

export const SITEMAP_ROUTES = [
  // ── Huvudsidor ──
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/om-mig", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg", changefreq: "weekly", priority: "0.8" },
  { path: "/blogg/komplett-seo-guide-smaforetag", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/skapa-hemsida-foretag-guide", changefreq: "monthly", priority: "0.7" },
  { path: "/kontakt", changefreq: "monthly", priority: "0.8" },
  { path: "/integritetspolicy", changefreq: "yearly", priority: "0.3" },
  { path: "/case", changefreq: "monthly", priority: "0.8" },
  { path: "/gratis-seo-analys", changefreq: "monthly", priority: "0.8" },

  // ── Tjänstesidor ──
  { path: "/tjanster/webbutveckling", changefreq: "monthly", priority: "0.8" },
  { path: "/tjanster/webbdesign", changefreq: "monthly", priority: "0.8" },
  { path: "/tjanster/seo-optimering", changefreq: "monthly", priority: "0.8" },
  { path: "/tjanster/wordpress-losningar", changefreq: "monthly", priority: "0.8" },
  { path: "/tjanster/underhall-support", changefreq: "monthly", priority: "0.8" },
  { path: "/tjanster/prestanda-optimering", changefreq: "monthly", priority: "0.8" },
  { path: "/tjanster/google-ads", changefreq: "monthly", priority: "0.8" },
  { path: "/tjanster/vad-kostar-en-hemsida-2026", changefreq: "monthly", priority: "0.8" },

  // ── Regionala sidor ──
  { path: "/webbutveckling-vasteras", changefreq: "monthly", priority: "0.8" },
  { path: "/seo-koping", changefreq: "monthly", priority: "0.8" },
  { path: "/seo-vasteras", changefreq: "monthly", priority: "0.9" },
  { path: "/seo-eskilstuna", changefreq: "monthly", priority: "0.9" },
  { path: "/hemsidor-sala", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-enkoping", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-eskilstuna", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-arboga", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-fagersta", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-hallstahammar", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-kungsor", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-surahammar", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-heby", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-norberg", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-skinnskatteberg", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-uppsala", changefreq: "monthly", priority: "0.8" },
  { path: "/webbutveckling-orebro", changefreq: "monthly", priority: "0.8" },

  { path: "/designbyra-vasteras", changefreq: "monthly", priority: "0.8" },

  // ── Branschsidor ──
  { path: "/hemsidor-bygg-hantverkare", changefreq: "monthly", priority: "0.7" },
  { path: "/digital-marknadsforing-butiker", changefreq: "monthly", priority: "0.7" },
  { path: "/restauranger-sala", changefreq: "monthly", priority: "0.7" },
  { path: "/frisor-koping", changefreq: "monthly", priority: "0.7" },
  { path: "/hemsidor-restaurang", changefreq: "monthly", priority: "0.7" },
  { path: "/hemsidor-redovisning", changefreq: "monthly", priority: "0.7" },
  { path: "/hemsidor-ehandel", changefreq: "monthly", priority: "0.7" },
// ── Bloggartiklar ──
  { path: "/blogg/oka-hemsidans-hastighet", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/lokal-seo-smaforetag", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/react-vs-wordpress", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/framtidsakra-foretag-react-malardalen", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/lokal-sokmotoroptimering-vastmanland-2026", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/digital-tillvaxt-smaforetag-malardalen", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/dominera-google-enkoping", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/webbutveckling-enkoping-partner", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/komplett-guide-digital-narvaro-malardalen", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/webbutveckling-eskilstuna-guide", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/moderna-hemsidor-vastmanland", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/seo-strategi-eskilstuna", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/lokal-seo-tips-vastmanland", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/frisor-koping-dominera-google", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/digital-marknadsforing-cafeer", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/webbdesign-advokatbyraer-vasteras", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/bokningssystem-frisorer-vastmanland", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/e-handel-butiker-sala", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/restauranghemsida-online-meny-sala", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/seo-byggforetag-malardalen", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/hemsida-hantverkare-vasteras", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/byggfirma-vasteras-fler-kunder", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/restaurang-sala-snabb-hemsida", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/hastighetsoptimering-foretag-sala", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/wordpress-vs-react-vasteras", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/oka-hemsidans-hastighet-koping", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/hur-lang-tid-bygga-hemsida-vasteras", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/pris-professionell-hemsida-2026", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/minska-bounce-rate-vasteras", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/core-web-vitals-vastmanland", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/react-vs-wordpress-koping", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/billig-vs-professionell-hemsida", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/vad-kostar-hemsida-smaforetag-sala", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/resan-till-100-pagespeed", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/framtidssakra-din-digitala-narvaro-i-vastmanland", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/effektiv-webbutveckling-ai-verktyg-vastmanland", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/digital-synlighet-vastmanland-seo-ai", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/framtidssakra-foretag-vastmanland-2026", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/seo-vasteras-guide", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/webflow-konsult-vasteras", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/webbdesign-vasteras-guide-2026", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/wordpress-konsult-vasteras", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/kommunikationsbyra-vastmanland", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/google-business-profil-guide", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/hur-vanja-seo-byra", changefreq: "monthly", priority: "0.7" },
  { path: "/blogg/seo-priser-vad-kostar-seo", changefreq: "monthly", priority: "0.7" },
];
