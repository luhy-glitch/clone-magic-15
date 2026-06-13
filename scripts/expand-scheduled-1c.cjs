'use strict';
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../src/data/blogPosts.json');
const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const additions = {
  'seo-eskilstuna-lokal-guide-2026': [
    "## Konkurrensanalys för Eskilstuna-marknaden",
    "Innan du investerar i SEO i Eskilstuna, kartlägg dina konkurrenter. Sök på dina viktigaste sökord i Google och notera vilka sajter som rankar på sida 1. Analysera deras sajter: hur mycket innehåll har de? Hur många backlinks? Hur länge har de funnits? Verktyg som Ahrefs Free Toolbar (ett gratis Chrome-plugin) visar domänauktoritet och bakåtlänksantal direkt i sökresultaten.",
    "En konkurrensanalys hjälper dig estimera hur mycket SEO-arbete som krävs för att komma in på sida 1. Om konkurrenterna har Domain Rating 40+ och hundratals bakåtlänkar är det ett långsiktigt projekt. Om konkurrenterna har svaga sajter med dålig on-page-SEO är det en snabb möjlighet.",
    "## Röstbaserad sökning och lokal SEO",
    "Röstbaserade sökningar via Siri, Google Assistant och Alexa ökar. Dessa sökningar är ofta i naturligt språk och lokalt orienterade: 'Vilken är den närmaste pizzerian i Eskilstuna?' eller 'Hur sent är Eskilstuna sjukhus öppet?'. Att optimera din sajt och ditt Google Business Profile för dessa konversationella sökfrågor ger ökad synlighet i det snabbast växande söksegmentet.",
    "FAQ-sektioner som svarar på specifika frågor om din verksamhet är ett effektivt sätt att fånga röstbaserade sökningar. Structurera svaren kort och direkt – Google Voice Search läser ofta ut Featured Snippet-svar, och korta, faktuella svar rankar bättre i detta format.",
    "Kontakta oss för att diskutera din SEO-strategi i Eskilstuna och Södermanland."
  ],
  'webbdesigner-vasteras-anlita-guide': [
    "## Designbriefens roll i ett framgångsrikt projekt",
    "En välskriven designbrief är hälften av jobbet. Den bästa briefen beskriver inte hur sajten ska se ut – den beskriver vem din målgrupp är, vad de behöver och vad du vill att de ska göra när de landar på din sajt. 'Jag vill ha en modern sajt i blå och grå toner' ger designern för lite. 'Min målgrupp är 40–60-åriga ägare av bygg-SME i Västmanland, de är skeptiska till digitala tjänster men priskänsliga och söker konkreta bevis på erfarenhet' ger en designer allt hen behöver.",
    "Inkludera alltid i din brief: 3 konkurrenters sajter du gillar/ogillar och varför, vad du tyckte fungerade/inte fungerade med din befintliga sajt, en prioritering av sidorna (vilka är viktigast att optimera för konvertering?), och eventuella designelement du absolut vill eller inte vill ha.",
    "## Uppföljning efter lansering",
    "Ett nytt webbdesignprojekt slutar inte vid lansering – det börjar där. De första 3 månaderna efter lansering är den viktigaste perioden för att samla data och iterera. Installera Hotjar och titta på heatmaps och inspelningar. Kontrollera att alla konverteringsmål spåras korrekt i Google Analytics. Verifiera att sajten indexeras korrekt i Google Search Console. Fånga upp fel och buggar som testerna inte hittade.",
    "En bra webbdesignbyrå i Västerås följer upp aktivt efter lansering och inte bara levererar och försvinner. Fråga alltid om post-lanseringssupport ingår i kontraktet.",
    "Kontakta LRH Konsult för ett kostnadsfritt samtal om webbdesign för ditt Västerås-företag."
  ],
  'wordpress-hemsida-pris-guide-2026': [
    "## Framtidssäkring av din WordPress-investering",
    "Att framtidssäkra din WordPress-sajt innebär att bygga den på ett sätt som är lätt att underhålla, uppdatera och skala i takt med att ditt företag växer. Det innebär välstrukturerad kod utan onödiga hack och workarounds, ett minimalistiskt plugin-urval med välunderhållna plugins från trovärdiga leverantörer, och dokumentation av sajts konfiguration och anpassningar.",
    "En välbyggd WordPress-sajt kan leva i 5–10 år med löpande underhåll. En dåligt byggd sajt kräver often en komplett ombyggnation efter 2–3 år. Investera i kvalitet från start.",
    "## Vanliga frågor om WordPress-pris",
    "Kan man få en gratis WordPress-sajt? Ja, tekniskt sett – WordPress.com erbjuder en gratisplan. Men den är kraftigt begränsad: WordPress-reklam på din sajt, ingen möjlighet att installera egna plugins, och begränsad anpassning. En professionell sajt kräver WordPress.org med eget hosting.",
    "Ingår texterna i priset? Det beror på byrån. De flesta webbyrån levererar en sajt med mallttexter eller placeholdrar, och du levererar de faktiska texterna. Om du vill att byrån skriver texterna (copywriting) är det en separat post som typiskt tillkommer med 5 000–15 000 kr beroende på mängd och komplexitet.",
    "Kontakta oss för en transparent offert på din WordPress-sajt. Vi tar inte dolda avgifter och levererar vad vi lovar."
  ]
};

let updated = 0;
posts.forEach(post => {
  if (additions[post.slug]) {
    if (Array.isArray(post.content)) {
      post.content = [...post.content, ...additions[post.slug]];
    }
    updated++;
    const text = post.content.join(' ');
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    console.log(`Updated: ${post.slug} → ${wordCount} words`);
  }
});

fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
console.log(`\nDone. Updated ${updated} posts.`);
