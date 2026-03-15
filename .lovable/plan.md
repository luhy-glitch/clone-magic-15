

# Refactor Sitemap to Local File-Based Generation

## Overview
Move sitemap generation fully local: one config file to edit, one script to run, output goes to `public/sitemap.xml`. The edge function stays but becomes optional (for dynamic blog posts if needed later).

## Changes

### 1. Create `src/config/sitemapRoutes.ts`
Single source of truth for all static routes with `SITE_URL`, `SITEMAP_ROUTES` array, and clear comments explaining how to add/remove pages.

### 2. Create `scripts/generate-sitemap.mjs`
- Uses `esbuild` (already a dev dependency via prerender script pattern) to bundle and import the TS config
- Generates valid XML from `SITEMAP_ROUTES`
- Writes to `public/sitemap.xml`
- No Supabase dependency — blog posts skipped for now

### 3. Add npm script
```json
"generate:sitemap": "node scripts/generate-sitemap.mjs"
```

### 4. Verify `robots.txt`
Already points to `https://www.lrhkonsult.se/sitemap.xml` — no change needed.

### 5. Fix build error
Change `npm:resend@2.0.0` → `https://esm.sh/resend@2.0.0` in `send-contact-email/index.ts` to resolve the Deno build error.

### 6. Update `vercel.json`
Remove the sitemap rewrite to Supabase storage since `public/sitemap.xml` will be served directly as a static file.

## Files affected

| File | Action |
|------|--------|
| `src/config/sitemapRoutes.ts` | Create |
| `scripts/generate-sitemap.mjs` | Create |
| `package.json` | Add script |
| `supabase/functions/send-contact-email/index.ts` | Fix import |
| `vercel.json` | Remove sitemap rewrite |

