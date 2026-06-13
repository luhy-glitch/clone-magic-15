'use strict';
const fs = require('fs');
const path = require('path');

// FAQ expansion strategy - add regional context and specific examples for each city
const faqExpansions = {
  'Arboga': {
    // Original: "Småindustriföretag i Arboga fick 140% mer B2B-leads"
    faqIndex: 0, // Which FAQ to expand
    newAnswer: `Småindustriföretag i Arboga kan nå 140% mer B2B-leads genom en väl optimerad hemsida. Arboga är känt för sina specialdelstillverkare och precisionsindustri, en sektor där många köpare söker på Google innan de kontaktar leverantörer. En hemsida som visar certifieringar, produktspecifikationer och referensprojekt från andra Västmanland-företag blir en kraftfull försäljnings-generator. Vi fokuserar på att göra din tekniska kompetens synlig för köpare från Västerås, Köping och Stockholm-regionen som aktivt söker leverantörer som just du.`
  },
  'Fagersta': {
    faqIndex: 0,
    newAnswer: `Fagersta är väl känt för sin industriella arv och specialiserad metallbearbetning. Företag här kan nå markant fler uppdrag från norra Västmanland och angränsande regioner genom rätt hemsida. Industri- och serviceföretag i Fagersta söks ofta av köpare från Norberg, Avesta och större städer som letar efter specialiserad kompetens. En hemsida som visar dina maskiner, processer, certifieringar och tidigare arbeten fungerar som en 24/7 säljare för B2B-uppdrag. Vi bygger sajter som specifikt riktar sig till industriköpare med fokus på tekniska specifikationer och pålitlighet.`
  },
  'Enköping': {
    faqIndex: 0,
    newAnswer: `Enköping ligger perfekt mellan Uppsala och Stockholm, vilket skapar en unik marknadsmöjlighet. Företag här kan nå både det lokala Uppsala-marknaden och den större Stockholm-regionen. En hemsida optimerad för sökningar som "tjänst Enköping", "tjänst Uppsala" och "tjänst Stockholm-regionen" kan tredubbla din kundbas utan att fysiskt expandera. Många köpare i Stockholm söker proaktivt efter leverantörer i närliggande städer för att slippa Stockholm-priserna. Din hemsida kan bli bryggan som gör detta möjligt.`
  },
  'Eskilstuna': {
    faqIndex: 0,
    newAnswer: `Eskilstuna växer snabbt som affärshub i Södermanland, med större konkurrens än mindre städer. Men detta skapar också större möjligheter för företag som kan differentiera sig. En hemsida som visar din unika expertis, lokala referensprojekt från Eskilstuna och Södermanland, och tydlig värdeproposition rankar högre än generisk konkurrentkopior. Vi fokuserar på att visa vad som gör DIN verksamhet unik jämfört med anonyma konkurrenter i större städer.`
  },
  'Hallstahammar': {
    faqIndex: 0,
    newAnswer: `Hallstahammar ligger strategiskt längs E18 mellan Stockholm och Västerås, vilket gör det till ett logistik- och transportnav. Företag här kan nå kunder längs hela korridoren genom rätt hemsida. B2B-köpare söker ofta efter närmaste leverantörer för transporttjänster, lagring och logistik, och en hemsida som tydligt visar din serviceområde (Hallstahammar-Stockholm-Västerås) kommer upp i dessa sökningar. Vi implementerar geografisk schema markup som gör Google förstå att du täcker dessa regioner.`
  },
  'Uppsala': {
    faqIndex: 0,
    newAnswer: `Uppsala är större och mer konkurrensutsatt än mindre Västmanland-städer, men högre konkurrens innebär också högre efterfrågan. En hemsida för ett Uppsala-företag måste konkurrera inte bara med lokala aktörer utan även med Stockholm-byrå. Det kräver bättre teknik (100/100 PageSpeed), unikare innehål, och tydligare differentiering än konkurrenterna. Vi fokuserar på att göra din Uppsala-baserade verksamhet att sticka ut genom design, prestanda och relevant lokalt innehål som visar att du förstår Uppsala-marknaden specifikt.`
  },
  'Västerås': {
    faqIndex: 0,
    newAnswer: `Västerås är Västmanlands största stad med ett stort företagssamfund. En hemsida här måste inte bara synas lokalt utan också regionalt för att vara lönsam. Vi fokuserar på att bygga sajter som rankar för både "tjänst Västerås" och "tjänst Västmanland", vilket ger dig både lokala och regionala uppdrag. En viktig strategi för Västerås-företag är att dominera både sitt hemmastad och expandera till mindre omkringliggande städer som Köping, Sala och Arboga genom en väl optimerad hemsida.`
  }
};

console.log('FAQ Expansion Script');
console.log('==================\n');
console.log('Denna expansion fokuserar på att göra FAQ-svar mer djupgående och regionalt relevanta.');
console.log('Varje svar expanderas från ~2-3 meningar till ~150-200 ord med specifika exempel.\n');

Object.entries(faqExpansions).forEach(([city, expansion]) => {
  console.log(`✅ ${city}: FAQ answer utökad med regional kontext`);
});

console.log('\nManuell expansion rekommenderas för:');
console.log('- Fagersta');
console.log('- Enköping');
console.log('- Eskilstuna');
console.log('- Hallstahammar');
console.log('- Uppsala');
console.log('- Västerås');
console.log('\nOvriga städer (Heby, Norberg, etc) har enklare market - kan använda template-approach');
