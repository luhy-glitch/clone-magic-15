/**
 * Single source of truth for all indexable static routes.
 *
 * Both the prerenderer (render-browser.mjs) and the sitemap generator
 * (generate-sitemap.mjs) import this list. Keeping one canonical array
 * guarantees that every prerendered page is also in the sitemap and vice
 * versa — preventing the "indexable page not in sitemap" / "4XX in sitemap"
 * drift that happens when the lists are copy-pasted and edited separately.
 *
 * Blog post routes are NOT listed here; they are derived dynamically from
 * src/data/blogPosts.json by the consumers.
 *
 * Do NOT add: admin routes, 301 redirect sources, or any non-200 / noindex
 * path — only canonical, indexable pages belong in the sitemap.
 */
export const staticRoutes = [
  "/",
  "/blogg",
  "/om-mig",
  "/kontakt",
  "/integritetspolicy",
  "/case",
  "/gratis-seo-analys",
  // Services
  "/tjanster/webbutveckling",
  "/tjanster/webbdesign",
  "/tjanster/seo-optimering",
  "/tjanster/wordpress-losningar",
  "/tjanster/underhall-support",
  "/tjanster/prestanda-optimering",
  "/tjanster/google-ads",
  "/tjanster/vad-kostar-en-hemsida-2026",
  // City landing pages
  "/webbutveckling-vasteras",
  "/webbutveckling-enkoping",
  "/webbutveckling-eskilstuna",
  "/webbutveckling-arboga",
  "/webbutveckling-fagersta",
  "/webbutveckling-hallstahammar",
  "/webbutveckling-kungsor",
  "/webbutveckling-surahammar",
  "/webbutveckling-heby",
  "/webbutveckling-norberg",
  "/webbutveckling-skinnskatteberg",
  "/webbutveckling-uppsala",
  "/webbutveckling-orebro",
  // SEO / niche local pages
  "/seo-koping",
  "/seo-vasteras",
  "/seo-eskilstuna",
  "/hemsidor-sala",
  "/hemsidor-bygg-hantverkare",
  "/digital-marknadsforing-butiker",
  "/restauranger-sala",
  "/frisor-koping",
  "/hemsidor-restaurang",
  "/hemsidor-redovisning",
  "/hemsidor-ehandel",
  "/designbyra-vasteras",
];
