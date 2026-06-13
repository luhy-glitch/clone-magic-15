'use strict';
const fs = require('fs');
const path = require('path');

const updates = {
  'WebbutvecklingHeby': {
    heading: "Från lokal småstad till regional spelare – webbutveckling för Heby",
    desc: "Heby är liten men växande. Många företag här är helt beroende av lokalt nätverk. En hemsida kan ändra allt – plötsligt når du Västerås, Enköping och större marknader utan att expandera lokalt.",
  },
  'WebbutvecklingNorberg': {
    heading: "Norbergs bergslagstradition möter digital framtid – regional räckvidd nu möjligt",
    desc: "Norberg har rik gruvhistoria och starkt näringsliv. Företag här kan med rätt hemsida nå hela norra Västmanland utan att lämna kontoret. Vi hjälper Norberg-bolag expandera regionalt genom digital närvaro.",
  },
  'WebbutvecklingSkinnskatteberg': {
    heading: "Från industri-småstad till digital pionjär – Skinnskatteberg kan nå större",
    desc: "Skinnskatteberg är känt för sin industri och bergslagstradition. Med rätt hemsida och SEO kan lokala företag nå Västerås, Norberg och större marknader. Digital närvaro = regional expansion.",
  },
  'WebbutvecklingSurahammar': {
    heading: "Små stad, stor potential – rätt hemsida = flera marknader",
    desc: "Surahammar är liten men strategiskt placerat. Företag här kan med rätt hemsida nå både lokal och större Västmanland-region. Vi hjälper småstad-bolag att tänka större digital.",
  },
  'WebbutvecklingOrebro': {
    heading: "Örebro växer snabbt – större konkurrens men också större möjligheter",
    desc: "Örebro är växande och attraherar företag från större städer. För att stå ut behövs bättre teknik än standard-hemsidor. Vi hjälper Örebro-bolag ranka högt både lokalt och i större västra Mälardalen-region.",
  },
};

const pagesDir = path.resolve(__dirname, '../src/pages');

Object.entries(updates).forEach(([pageName, update]) => {
  const filePath = path.join(pagesDir, `${pageName}.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ SKIP: ${pageName}.tsx inte funnen`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Update heading
    content = content.replace(
      /heroHeading: "[^"]*",/,
      `heroHeading: "${update.heading}",`
    );

    // Update description
    content = content.replace(
      /heroDescription: "[^"]*",/,
      `heroDescription: "${update.desc}",`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${pageName}`);
  } catch (err) {
    console.error(`❌ ${pageName}: ${err.message}`);
  }
});

console.log('\n✨ Småstad-uppdateringar klara.');
