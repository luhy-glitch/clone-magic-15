
# Plan: Fyra nya funktioner for LRH Konsult

## Oversikt

Fyra nya tillagg till sajten:
1. **Prissida** med tre paket (Bas, Standard, Premium)
2. **Kontaktformular kopplat till e-post** via Resend
3. **GDPR cookie-banner och integritetspolicy-sida**
4. **Testimonials-sektion** pa startsidan

---

## 1. Prissida med tre paket

Ny komponent `Pricing.tsx` som visas pa startsidan mellan About och Contact.

**Tre paket:**
- **Bas** (~5 000 kr) -- Enkel webbplats, responsiv design, grundlaggande SEO
- **Standard** (~12 000 kr) -- Flersidig sajt, CMS-integration, avancerad SEO, kontaktformular
- **Premium** (~25 000 kr) -- Skraddarsydd losning, e-handel, prestanda-optimering, lopande support

Designen matchar befintliga sektioner med kort-layout, animationer via AnimatedSection, och en markerad "Populärast"-badge pa Standard-paketet.

## 2. Kontaktformular kopplat till Resend

**Krav:** En RESEND_API_KEY maste laggas till som hemlighet. Du behover:
1. Skapa ett konto pa [resend.com](https://resend.com)
2. Verifiera din doman (lrhkonsult.se) pa [resend.com/domains](https://resend.com/domains)
3. Skapa en API-nyckel pa [resend.com/api-keys](https://resend.com/api-keys)

**Implementering:**
- Ny edge function `send-contact-email` som tar emot namn, e-post, amne och meddelande, och skickar till kontakt@lrhkonsult.se via Resend
- Uppdatera Contact.tsx sa den anropar edge-funktionen istallet for `alert()`
- Visa toast-meddelanden for lyckad/misslyckad skickning
- Lagg till laddningsindikator pa knappen

## 3. GDPR cookie-banner och integritetspolicy

**Cookie-banner:**
- Ny komponent `CookieBanner.tsx` som visas langst ner pa skärmen
- Sparar samtycke i localStorage
- Knappar: "Acceptera" och "Las mer" (lankar till /integritetspolicy)

**Integritetspolicy-sida:**
- Ny sida `/integritetspolicy` med route i App.tsx
- Innehall: vilka uppgifter som samlas in, syfte, cookies, kontaktuppgifter, ratttigheter enligt GDPR
- Lank i footern till integritetspolicyn

## 4. Testimonials-sektion

Ny komponent `Testimonials.tsx` pa startsidan mellan About och Contact.

- 3 platshallare for kundrecensioner med namn, foretag, citat och stjarnbetyg
- Kort-layout som matchar ovrig design
- Animationer med FadeIn

---

## Teknisk sammanfattning

| Uppgift | Filer |
|---------|-------|
| Prissida | `src/components/Pricing.tsx`, `src/pages/Index.tsx` |
| Kontaktformular | `supabase/functions/send-contact-email/index.ts`, `supabase/config.toml`, `src/components/Contact.tsx` |
| Cookie-banner + policy | `src/components/CookieBanner.tsx`, `src/pages/PrivacyPolicy.tsx`, `src/App.tsx`, `src/components/Footer.tsx` |
| Testimonials | `src/components/Testimonials.tsx`, `src/pages/Index.tsx` |

**Ordning:** Jag borjar med att be dig om Resend API-nyckeln, sedan implementerar alla delar.
