const fs = require('fs');
const posts = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8'));

const post = posts.find(p => p.slug === 'google-business-profil-guide');
if (post) {
  const before = post.excerpt;
  // Trim "att få" -> "för" to shorten by 4 chars
  post.excerpt = 'En välfylld Google Business-profil är ofta viktigare än din hemsida för lokala kunder. Vi guider dig genom varje steg – från registrering till recensioner.';
  console.log('Before (' + before.length + '): ' + before);
  console.log('After  (' + post.excerpt.length + '): ' + post.excerpt);
}

fs.writeFileSync('src/data/blogPosts.json', JSON.stringify(posts, null, 2), 'utf8');
console.log('Done');
