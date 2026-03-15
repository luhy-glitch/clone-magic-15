
# Fixa WordPress-rutt i sitemap

## Problem
Edge function `generate-sitemap` har fel URL for WordPress-sidan: `/tjanster/wordpress` istatt for `/tjanster/wordpress-losningar`. Detta gor att Google indexerar en trasig lank.

## Atgard
Andra rad 16 i `supabase/functions/generate-sitemap/index.ts`:
- Fran: `/tjanster/wordpress`
- Till: `/tjanster/wordpress-losningar`

Sedan kora funktionen manuellt for att uppdatera sitemap.xml i storage.

## Tekniska detaljer
- **Fil:** `supabase/functions/generate-sitemap/index.ts`, rad 16
- **Andring:** `{ loc: "/tjanster/wordpress", ... }` -> `{ loc: "/tjanster/wordpress-losningar", ... }`
- Edge function deployas automatiskt efter andringen
- Kora funktionen manuellt via POST for att uppdatera sitemap.xml direkt
