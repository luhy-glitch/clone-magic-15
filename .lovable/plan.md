
# Subtil bakgrundseffekt for mer djup

Lagga till en subtil radial gradient-overlay pa sidans bakgrund for att skapa djup och visuellt intresse, utan att bryta det morka olivtemat.

## Tekniska detaljer

**Fil:** `src/index.css`

- Lagga till en CSS-stil pa `body` med en subtil radial gradient som gar fran en nagot ljusare olivton i mitten till den vanliga bakgrundsfargen i kanterna
- Anvanda `background-attachment: fixed` sa att gradienten foljer viewporten, inte scrollningen
- Eventuellt lagga till en mycket subtil "noise"-textur via en CSS-genererad bakgrund for extra djup

**Exempel pa gradient:**
```css
body {
  background: 
    radial-gradient(ellipse at 50% 0%, hsl(140 18% 18% / 0.5) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 100%, hsl(36 95% 54% / 0.03) 0%, transparent 40%),
    hsl(140 18% 14%);
  background-attachment: fixed;
}
```

Detta ger:
- En subtil ljusare "glow" uppifran (som om ljus faller pa sidan)
- En nastan osynlig varm ton langst ner (fran accent-fargen) for extra djup
- Bakgrunden forblir fixerad vid scroll, vilket ger en polerad kansla

Inga nya filer eller beroenden behovs.
