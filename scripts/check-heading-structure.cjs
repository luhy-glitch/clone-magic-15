'use strict';
const fs = require('fs');
const path = require('path');

// Get all city pages
const pagesDir = path.resolve(__dirname, '../src/pages');
const cityPages = fs.readdirSync(pagesDir)
  .filter(f => (f.includes('Webbutveckling') || f.includes('Seo') || f.includes('Service')) && f.endsWith('.tsx'))
  .sort();

console.log('=== CHECKING HEADING STRUCTURE IN ALL PAGES ===\n');

const issues = [];
const good = [];

cityPages.forEach(file => {
  const filepath = path.join(pagesDir, file);
  const content = fs.readFileSync(filepath, 'utf8');

  // Count h tags
  const h1Count = (content.match(/<h1/g) || []).length;
  const h2Count = (content.match(/<h2/g) || []).length;
  const h3Count = (content.match(/<h3/g) || []).length;

  // Extract heading texts to check hierarchy
  const h1Matches = content.match(/<h1[^>]*>([^<]+)<\/h1>/g) || [];
  const h2Matches = content.match(/<h2[^>]*>([^<]+)<\/h2>/g) || [];
  const h3Matches = content.match(/<h3[^>]*>([^<]+)<\/h3>/g) || [];

  let issue = null;

  if (h1Count > 1) {
    issue = `❌ MULTIPLE H1 TAGS (${h1Count})`;
  } else if (h1Count === 0) {
    issue = `❌ NO H1 TAG`;
  } else if (h3Count > 0 && h2Count === 0) {
    issue = `⚠️ H3 WITHOUT H2 (H3: ${h3Count})`;
  } else if (h2Count > 0 && h3Count > 0) {
    // Check if all h3s come after h2s (they should)
    const h2FirstPos = content.indexOf('<h2');
    const h3FirstPos = content.indexOf('<h3');
    if (h3FirstPos !== -1 && h2FirstPos !== -1 && h3FirstPos < h2FirstPos) {
      issue = `⚠️ H3 APPEARS BEFORE H2`;
    }
  }

  if (issue) {
    issues.push(`${file.padEnd(40)} ${issue} (H1:${h1Count} H2:${h2Count} H3:${h3Count})`);
  } else {
    if (h1Count === 1 && h2Count >= 0) {
      good.push(`✅ ${file.padEnd(40)} H1→H2(${h2Count})→H3(${h3Count})`);
    }
  }
});

console.log('GOOD STRUCTURE:');
good.forEach(g => console.log(g));

if (issues.length > 0) {
  console.log('\nISSUES FOUND:');
  issues.forEach(i => console.log(i));
} else {
  console.log('\n✨ All pages have correct heading structure!');
}

console.log(`\nTotal checked: ${cityPages.length}`);
console.log(`✅ Good: ${good.length}`);
console.log(`❌ Issues: ${issues.length}`);
