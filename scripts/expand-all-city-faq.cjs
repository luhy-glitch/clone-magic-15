'use strict';
const fs = require('fs');
const path = require('path');

// Eskilstuna FAQ expansions
const eskilstunaFAQ = `  faq: [
    { question: "Eskilstuna växer snabbt och är konkurrensutsatt – är det möjligt att ranka?", answer: "Absolut, men det kräver bättre teknik och strategi än i mindre städer. Eskilstuna växer som Södermanlands största stad, vilket innebär både högre konkurrens och högre sökvolym. En generisk WordPress-mall-hemsida kommer inte att slå konkurrenterna – du behöver modern teknik (React, 100/100 PageSpeed), nischerade sökord utifrån din faktiska kompetens, och genuint unikt innehål. Vi har hjälpt flera Eskilstuna-byggföretag och tech-startups att slå både lokala konkurrenter och större Stockholm-byråer. Nyckeln är att du måste vara BÄTTRE tekniskt än standardlösningarna för att motivera högre ranking." },
    { question: "Vi är en tech-startup i Eskilstuna – räcker en simpel billig hemsida?", answer: "Nej, definitivt inte för tech-bolag. Din hemsida är inte bara en brochure – det är ditt första sales-samtal med potentiella B2B-kunder och första intryck för talanger du vill anställa. Du behöver en hemsida som själv demonstrerar dina tekniska förmågor: ultrasnabb laddning (under 1 sekund), pixel-perfekt på mobile, modernt och sofistikerat design. För en tech-startup i Eskilstuna som konkurrerar nationellt är hemsidan ofta ditt viktigaste sälj-verktyg. En dålig hemsida signalerar svag teknik oavsett hur bra du faktiskt är." },
    { question: "Vilka sökord och termer bör vi fokusera på för Eskilstuna?", answer: "Det beror helt på din bransch, men vi fokuserar alltid på ord med hög köpintention, inte bara volym. Byggföretag kan fokusera på 'renovering Eskilstuna', 'byggföretag Södermanland', 'renoveringsbyrå Mälardalen'. Tech-bolag kan fokusera på 'webbutveckling Eskilstuna', 'app-utveckling Södermanland', 'startup-konsult Stockholm-Eskilstuna'. Vi kombinerar lokala termer med regionala för att fånga både nära och fjärre köpare. Vi gör aldrig antaganden – vi analyserar dina konkurrenter, sökvoljumer och din situation innan vi sätter strategi." },
    { question: "Hur lång tid innan vi ser faktiska resultat och ny affär?", answer: "Hemsidan är live: 2-4 veckor. Google-indexering: 1-2 veckor efter lansering. Ranking för nischerade ord: typiskt 2-3 månader. Ranking för bredare konkurrenskraftiga ord: 3-6 månader (högre konkurrens än små städer). Leads från hemsidan: ofta redan dag 1 för specialiserade sökord, men volymen växer mest under första kvartalet när ranking förbättras. För många Eskilstuna-startups är det första inkommande B2B-enquiry ofta en överraskning – folk söker och hittar dig långt tidigare än förväntat." },
    { question: "Kan samma hemsida ranka både lokalt i Eskilstuna och nationellt?", answer: "Ja, med rätt arkitektur och strategi. En välbyggd Eskilstuna-hemsida kan ranka lokalt för 'tjänst Eskilstuna' eller 'tjänst Södermanland' SAMTIDIGT som den rankar nationellt för 'tjänst Sverige' eller 'specialiserad lösning'. Det handlar om innehålls-strategi (du skriver posts för olika sökningar), teknisk arkitektur (rätt heading-struktur, internal linking), och strukturerad data (serviceArea-schema). Många växande Eskilstuna-kunder hittar att 40-60% av trafiken kommer från nationella eller regionala sökningar, inte bara lokala Eskilstuna-sökningar." },
  ],`;

// Update Eskilstuna file
const eskilstunaPath = path.resolve(__dirname, '../src/pages/WebbutvecklingEskilstuna.tsx');
let eskilstunaContent = fs.readFileSync(eskilstunaPath, 'utf8');

// Replace the faq section
const faqStartIndex = eskilstunaContent.indexOf('  faq: [');
const faqEndIndex = eskilstunaContent.indexOf('  ],\n};', faqStartIndex) + 5;

if (faqStartIndex !== -1 && faqEndIndex > faqStartIndex) {
  eskilstunaContent = eskilstunaContent.slice(0, faqStartIndex) + eskilstunaFAQ + eskilstunaContent.slice(faqEndIndex);
  fs.writeFileSync(eskilstunaPath, eskilstunaContent, 'utf8');
  console.log('✅ Eskilstuna FAQ expanded');
} else {
  console.log('❌ Could not find FAQ section in Eskilstuna');
}
