

# Migrera bloggbilder från Supabase Storage till lokala filer

## Översikt
Flytta alla bloggbilder från Supabase Storage till `public/blog-images/`, uppdatera alla URL:er i `blogPosts.json`, och skapa ett nedladdningsscript.

## Steg

### 1. Skapa nedladdningsscript `scripts/download-blog-images.mjs`
Ett Node.js-script som:
- Läser `src/data/blogPosts.json`
- Extraherar alla unika Supabase-URL:er från `image_url`-fältet
- Laddar ner varje bild till `public/blog-images/` med filnamnet från URL:en (t.ex. `resan-till-100-pagespeed.jpg`)
- Loggar framsteg och eventuella fel
- Skapar mappen `public/blog-images/` om den inte finns

### 2. Uppdatera `src/data/blogPosts.json`
Byt ut alla Supabase Storage-URL:er mot lokala sökvägar:
- `https://egantzcnrlrkjccstmpw.supabase.co/storage/v1/object/public/blog-images/filnamn.jpg` blir `/blog-images/filnamn.jpg`
- Poster med tom `image_url` (`""`) lämnas oförändrade

### 3. Uppdatera `package.json`
Lägg till npm-script:
```json
"download-blog-images": "node scripts/download-blog-images.mjs"
```

### 4. Ta bort Supabase Storage-koppling för bloggbilder i AdminDashboard
I `AdminDashboard.tsx` finns bilduppladdning via `supabase.storage.from("blog-images")` och i edge functions (`admin-auth`, `generate-blog-post`). Dessa behålls i edge functions (admin-systemet använder fortfarande Supabase), men vi dokumenterar att bilderna nu finns lokalt.

## Filer som ändras

| Fil | Åtgärd |
|-----|--------|
| `scripts/download-blog-images.mjs` | Skapa |
| `public/blog-images/` | Skapa (tom mapp med .gitkeep) |
| `src/data/blogPosts.json` | Uppdatera URL:er |
| `package.json` | Lägg till script |

## Viktigt
- Scriptet måste köras lokalt av dig (`npm run download-blog-images`) efter deploy för att faktiskt ladda ner bilderna -- Lovable kan inte lagra binärfiler i repot
- 45 Supabase-URL:er totalt i JSON-filen ersätts med lokala sökvägar
- Bilder som refereras i `content`-fältet (markdown) uppdateras också om de pekar på Supabase

