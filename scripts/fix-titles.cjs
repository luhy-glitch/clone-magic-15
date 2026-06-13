const fs = require('fs');
const posts = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8'));

const fixes = {
  'hur-vanja-seo-byra': 'Välja Rätt SEO-Byrå 2026 – 10 Frågor att Ställa',
  'seo-priser-vad-kostar-seo': 'SEO-priser 2026 – Vad Kostar Sökmotoroptimering?',
  'google-business-profil-guide': 'Google Business-profil 2026 – Guide för Lokala Företag'
};

let changed = 0;
posts.forEach(p => {
  if (fixes[p.slug]) {
    console.log('Before: ' + p.title);
    p.title = fixes[p.slug];
    console.log('After:  ' + p.title + ' (' + (p.title + ' | LRH Konsult').length + ' chars)');
    changed++;
  }
});

fs.writeFileSync('src/data/blogPosts.json', JSON.stringify(posts, null, 2), 'utf8');
console.log('Fixed ' + changed + ' titles');
