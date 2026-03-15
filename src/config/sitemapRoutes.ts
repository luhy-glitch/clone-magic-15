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

  // ── Branschsidor ──
  { path: "/hemsidor-bygg-hantverkare", changefreq: "monthly", priority: "0.7" },
  { path: "/digital-marknadsforing-butiker", changefreq: "monthly", priority: "0.7" },
  { path: "/restauranger-sala", changefreq: "monthly", priority: "0.7" },
  { path: "/frisor-koping", changefreq: "monthly", priority: "0.7" },
  { path: "/hemsidor-restaurang", changefreq: "monthly", priority: "0.7" },
  { path: "/hemsidor-redovisning", changefreq: "monthly", priority: "0.7" },
  { path: "/hemsidor-ehandel", changefreq: "monthly", priority: "0.7" },
];
