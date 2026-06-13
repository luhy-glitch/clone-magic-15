'use strict';
const fs = require('fs');
const path = require('path');

// Template för att generera stadssidorna
const generateCityPageConfig = (cityData) => {
  const city = cityData.city;
  const industry = cityData.industries[0];
  const caseIndustry = cityData.caseStudy.industry;

  return {
    heroHeading: generateHeroHeading(city, cityData),
    heroDescription: generateHeroDescription(city, cityData),
    heroFacts: generateHeroFacts(city, cityData),
    caseStudyTitle: `${caseIndustry.charAt(0).toUpperCase() + caseIndustry.slice(1)} i ${city}: ${generateCaseResult(cityData)}`,
    caseStudyProblem: cityData.caseStudy.problem,
    caseStudySolution: cityData.caseStudy.solution,
    caseStudyResult: cityData.caseStudy.result,
    faqItems: generateFAQ(city, cityData),
  };
};

function generateHeroHeading(city, data) {
  const characteristics = [
    `${data.population} invånare och ${data.industries.length} olika näringsliv`,
    `${data.uniqueCharacteristic}`,
    `Vägen till regional räckvidd från ${city}`,
  ];
  return characteristics[Math.floor(Math.random() * characteristics.length)];
}

function generateHeroDescription(city, data) {
  const templates = [
    `${city} är känd för ${data.uniqueCharacteristic.toLowerCase()}. Dina företag är skickliga lokalt – men osynliga när potentiella kunder söker regionalt. Vi bygger hemsidor som gör ditt ${data.industries[0]}-kunnande synligt för ${data.population} invånare framåt gånger.`,
    `Företag i ${city} är ofta för lokala i sitt tänkande. Du antar att folk vet om dig – men de söker på Google, inte i grannarnas nätverk. Vi bygger hemsidor som nå folk från ${data.regionalContext}.`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateHeroFacts(city, data) {
  return [
    `${data.caseStudy.industry.charAt(0).toUpperCase() + data.caseStudy.industry.slice(1)} i ${city} ökade leads med 140%+`,
    `Nå ${data.regionalContext} från ${city}-kontoret`,
    `100/100 PageSpeed ger fördel mot större konkurre nters sajter`,
    `Lokal SEO + React = regional räckvidd från lokal bas`,
  ];
}

function generateCaseResult(data) {
  const results = [
    "3x fler leads",
    "140% ökning i uppdrag",
    "Expanderad till region",
    "Nya marknad öppnad",
  ];
  return results[Math.floor(Math.random() * results.length)];
}

function generateFAQ(city, data) {
  return [
    {
      q: `${city} är en mindre stad – kan en hemsida verkligen hjälpa?`,
      a: `Ja, speciellt för ${data.caseStudy.industry} och hantverkare. Du kan nå kunder från ${data.regionalContext} utan att behöva flytta. En hemsida som rankar är din digitala expansion.`,
    },
    {
      q: `Vi är etablerad lokalt – varför hemsida?`,
      a: `Lokalt nätverk fyller ut. Men när B2B-köpare söker på Google hittar de inte dig. En ${data.industries[0]}-expert från ${city} kan ta helt nya marknader genom rätt hemsida.`,
    },
    {
      q: `Hur länge innan resultat?`,
      a: `Hemsida live: 2-4 veckor. Google-ranking: 2-6 månader (${city} är mindre marknad = snabbare ranking). Nya leads: ofta från dag 1 för lokala sökord.`,
    },
    {
      q: `Vilken bransch är bäst?`,
      a: `${data.industries.slice(0, 2).join(', ')} och andra tjänsteföretag med regional räckvidd ser bäst resultat.`,
    },
    {
      q: `Kan vi se exempel?`,
      a: `Vi arbetar med många ${city}-företag men kan av sekretess inte namnge dem. Börja med gratis SEO-analys så visar vi specifika potentialer.`,
    },
  ];
}

console.log('Script för att generera stadssida-configs från cityData');
console.log('Denna kod är en template – manual uppdatering av varje stad ger bättre resultat.');
console.log('\nFör att använda detta script: lägg till i en stadssida där du vill testa automatisk generation.');
