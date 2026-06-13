'use strict';
const fs = require('fs');
const path = require('path');

const blogPostsPath = path.resolve(__dirname, '../src/data/blogPosts.json');
const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf8'));

// Internal link strategies by blog post slug
const linkStrategies = {
  'seo-priser-vad-kostar-seo': {
    link: '/tjanster/seo-optimering',
    label: 'SEO-optimering-tjänsten',
    injectAfter: 'ROI-procent',
    text: 'Vill du veta mer om hur vi kan hjälpa dig att öka din organiska trafik? Läs mer om vår [SEO-optimering-tjänsten](/tjanster/seo-optimering).'
  },
  'hur-vanja-seo-byra': {
    link: '/gratis-seo-analys',
    label: 'gratis SEO-analys',
    injectAfter: '10 Frågor Du Måste Ställa',
    text: 'Osäker på om en SEO-byrå är rätt för ditt företag? Börja med en [gratis SEO-analys](/gratis-seo-analys) och få en personlig bedömning av dina möjligheter.'
  },
  'google-business-profil-guide': {
    link: '/tjanster/seo-optimering',
    label: 'lokal SEO-strategi',
    injectAfter: 'Slutsats',
    text: 'En väl optimerad Google Business-profil är bara första steget. För att maximera din lokala synlighet kombinerar vi GBP-optimering med en helhetlig [lokal SEO-strategi](/tjanster/seo-optimering).'
  },
  'resan-till-100-pagespeed': {
    link: '/tjanster/prestanda-optimering',
    label: 'prestandaoptimering-tjänsten',
    injectAfter: 'Total Blocking Time',
    text: 'Vill du nå 100 poäng på din hemsida? Läs mer om vår [prestandaoptimering-tjänsten](/tjanster/prestanda-optimering).'
  },
  'seo-vasteras-guide': {
    link: '/webbutveckling-vasteras',
    label: 'webbutveckling i Västerås',
    injectAfter: 'Länkbygge och lokal auktoritet',
    text: 'SEO handlar inte bara om teknik och innehål – det handlar också om att bygga en hemsida som faktiskt kan konvertera besökare till kunder. Läs mer om vår [webbutveckling i Västerås](/webbutveckling-vasteras).'
  }
};

let updatedCount = 0;
let skippedCount = 0;

blogPosts.forEach(post => {
  const strategy = linkStrategies[post.slug];

  if (!strategy) {
    skippedCount++;
    return;
  }

  // Check if link already exists
  if (post.content.includes(strategy.link)) {
    console.log(`⏭️ ${post.slug}: Link already exists, skipping`);
    skippedCount++;
    return;
  }

  // Find injection point
  if (!post.content.includes(strategy.injectAfter)) {
    console.log(`⚠️ ${post.slug}: Injection point '${strategy.injectAfter}' not found`);
    skippedCount++;
    return;
  }

  // Add link before conclusion or at strategic point
  const injectionIndex = post.content.lastIndexOf(strategy.injectAfter);
  const insertPos = injectionIndex + strategy.injectAfter.length + 2;

  post.content = post.content.slice(0, insertPos) + '\n\n' + strategy.text + '\n\n' + post.content.slice(insertPos);

  updatedCount++;
  console.log(`✅ ${post.slug}: Internal link added`);
});

fs.writeFileSync(blogPostsPath, JSON.stringify(blogPosts, null, 2) + '\n', 'utf8');

console.log(`\n✨ Klart! ${updatedCount} posts uppdaterade med interna links, ${skippedCount} skippade.`);
