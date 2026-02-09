

# Lagg till "Priser"-lank i navbaren

Lagga till en "Priser"-knapp i navigeringen (bade desktop och mobil) som scrollar ner till prissektionen.

## Tekniska detaljer

**Fil:** `src/components/Navbar.tsx`

- Lagga till en ny knapp "Priser" i desktop-navbaren (mellan "Om mig" och "Kontakt") som anropar `scrollTo("priser")`
- Lagga till samma knapp i mobilmenyn pa motsvarande plats

Inga nya filer eller beroenden behovs -- det foljer exakt samma monster som de befintliga nav-knapparna.

