const fs = require('fs');
const path = require('path');

// Check blogPosts.json for long descriptions
const posts = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8'));

console.log('\n=== Blog posts with description > 160 chars ===');
posts.forEach(p => {
  const desc = p.metaDescription || p.excerpt || '';
  if (desc.length > 160) {
    console.log(`${desc.length} chars [${p.slug}]: ${desc}`);
  }
});

console.log('\n=== Blog posts with title > 70 chars (with suffix) ===');
posts.forEach(p => {
  const full = p.title + ' | LRH Konsult';
  if (full.length > 70) {
    console.log(`${full.length} chars: ${p.slug} — ${p.title}`);
  }
});
