'use strict';
const fs = require('fs');
const path = require('path');

// Analyse all city pages for heading structure
const pagesDir = path.resolve(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const heading_issues = [];

files.forEach(file => {
  const filepath = path.join(pagesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Only check city pages and key service pages
  if (!file.includes('Webbutveckling') && !file.includes('Service') && file !== 'Index.tsx') {
    return;
  }
  
  // Count H1s in the component
  const h1Match = content.match(/className="text-3xl sm:text-4xl.*?font-bold/g) || [];
  const h1Count = h1Match.length;
  
  // Check for h1 tags in typography components
  const h1Elements = (content.match(/<h1/g) || []).length;
  const h2Elements = (content.match(/<h2/g) || []).length;
  const h3Elements = (content.match(/<h3/g) || []).length;
  
  if (h1Elements > 1) {
    heading_issues.push(`❌ ${file}: Multiple H1 tags (${h1Elements})`);
  }
  if (h1Elements === 0 && h2Elements > 0) {
    heading_issues.push(`⚠️ ${file}: No H1 tag but has H2 (${h2Elements})`);
  }
  if (h3Elements > 0 && h2Elements === 0) {
    heading_issues.push(`❌ ${file}: H3 without H2 (H3: ${h3Elements})`);
  }
  
  if (h1Elements === 1 && h2Elements > 0) {
    console.log(`✅ ${file}: H1(${h1Elements}) → H2(${h2Elements}) → H3(${h3Elements})`);
  }
});

console.log('\n=== HEADING STRUCTURE ISSUES FOUND ===\n');
if (heading_issues.length > 0) {
  heading_issues.forEach(issue => console.log(issue));
} else {
  console.log('✨ No critical heading structure issues found!');
}
