'use strict';
const fs = require('fs');
const path = require('path');

// Manuella unikt City-uppdateringar för varje stad
const CITY_UPDATES = {
  'WebbutvecklingEnkoping': {
    heroHeading: "Från Uppsala-länet in i Stockholm-marknaden – via rätt hemsida",
    heroDescription: "Enköping är gateway mellan Uppsala och Stockholm. Din konkurrens är både lokal och stor. Vi bygger hemsidor som gör Enköping-bolag attraktiva för både lokala och större regionala köpare.",
    faq1: "Enköping är mellan två stora städer – vem är vår marknad?",
    faq1ans: "Både Uppsala-regionen och Stockholm-området söker lokalt. En Enköping-expert kan nå båda med rätt hemsida och SEO-strategi.",
  },
  'WebbutvecklingEskilstuna': {
    heroHeading: "Eskilstuna-bolag: Snabbt växande stad, snabbt växande konkurrens",
    heroDescription: "Eskilstuna växer snabbt som tech-hub och attraherar både lokala och externa företag. För att stå ut behöver du en hemsida som rankar högt både lokalt och regionalt. Vi hjälper Eskilstuna-bolag nå både den lokala och den större Mälardalen-marknaden.",
    faq1: "Eskilstuna är större och mer kompetitiv än mindre städer – möjligt att ranka?",
    faq1ans: "Ja, men det kräver bättre SEO än en mall-hemsida. Vi fokuserar på nischerade sökord och unikt innehål som slår bredare konkurrenter.",
  },
  'WebbutvecklingKungsor': {
    heroHeading: "Från småstad till regional spelare – webbutveckling för Kungsör",
    heroDescription: "Kungsör är liten men växande. Många företag här är helt beroende av lokalt nätverk. En hemsida kan ändra allt – plötsligt når du Västerås, Arboga och större marknader utan att expandera lokalt.",
    faq1: "Vi är en väldigt liten stad – är en hemsida relevant?",
    faq1ans: "Ju mindre stad, desto större fördel av en hemsida. Du når nya marknader helt digitalt utan att behöva exponera dig lokalt.",
  },
  'WebbutvecklingHallstahammar': {
    heroHeading: "Logistik-hub mellan två storstäder – rätt hemsida = regionalt nätverk",
    heroDescription: "Hallstahammar är kritisk för transport och logistik. Företag här kan tjäna på att synas regionalt. Vi bygger hemsidor för logistik-, transport- och industriföretag som vill nå hela Stockholm-Västerås-korridoren.",
    faq1: "Vi är logistik-/transportföretag – rankar hemsidor för oss?",
    faq1ans: "Ja, speciellt med rätt B2B-fokus. 'Logistics Hallstahammar' och 'transport Stockholm-Västerås' rankar bra för små hemsidor.",
  },
  'WebbutvecklingSala': {
    heroHeading: "Sala: Från silvergruva-historia till turism-destination online",
    heroDescription: "Sala är känd för silvergruva och turism. Restauranger, hotell och tjänster här kan nå turister och besökare via rätt hemsida och Google Business Profile. Vi gör Sala-företag synliga före och under besökarnas resa.",
    faq1: "Vi är restaurang/hotell i Sala nära silvergruvan – hjälper hemsida?",
    faq1ans: "Ja, speciellt med turism-SEO och Google Business Profile. Turister söker 'restaurant near Sala Silver Mine' innan de reser.",
  },
  'WebbutvecklingUppsala': {
    heroHeading: "Uppsala-universitet + växande tech-scen = större konkurrens",
    heroDescription: "Uppsala är en av Sveriges största städer med stark tech- och utbildnings-sektor. För att stå ut behöver du en hemsida som är bättre än Stockholm-konkurrenters. Vi hjälper Uppsala-bolag ranka högt både lokalt och nationellt.",
    faq1: "Uppsala är stor och konkurrensutsatt – möjligt att ranka högt?",
    faq1ans: "Ja, med fokus på nischerade sökord, unikt innehål och bättre teknik än konkurrenterna.",
  },
};

const pagesDir = path.resolve(__dirname, '../src/pages');

// Batch-upda tera FAQ för alla stadssidor
Object.entries(CITY_UPDATES).forEach(([pageName, updates]) => {
  const filePath = path.join(pagesDir, `${pageName}.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ SKIP: ${pageName}.tsx inte funnen`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Upda tera heroHeading
    if (updates.heroHeading) {
      content = content.replace(
        /heroHeading: "[^"]*",/,
        `heroHeading: "${updates.heroHeading}",`
      );
    }

    // Upda tera heroDescription
    if (updates.heroDescription) {
      content = content.replace(
        /heroDescription: "[^"]*",/,
        `heroDescription: "${updates.heroDescription}",`
      );
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ UPDATED: ${pageName}`);
  } catch (err) {
    console.error(`❌ ERROR: ${pageName} – ${err.message}`);
  }
});

console.log('\n✨ Batch-upda tering av stadssidor klar.');
