const fs = require('fs');

// 1. Uppdatera prerender.mjs
let prerender = fs.readFileSync('scripts/prerender.mjs', 'utf8');
const newSlugs = ['blogg/seo-vasteras', 'blogg/webbbyra-vasteras'];
let prerenderChanged = 0;
for (const slug of newSlugs) {
  if (!prerender.includes(slug)) {
    prerender = prerender.replace(
      "'blogg/resan-till-100-pagespeed'",
      `'${slug}',\n  'blogg/resan-till-100-pagespeed'`
    );
    prerenderChanged++;
  }
}
if (prerenderChanged > 0) {
  fs.writeFileSync('scripts/prerender.mjs', prerender);
  console.log('Lade till ' + prerenderChanged + ' slugs i prerender.mjs');
}

// 2. Uppdatera pages_data_STEPBYSTEP.json
const pages = JSON.parse(fs.readFileSync('pages_data_STEPBYSTEP.json', 'utf8'));
const posts = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8'));

let added = 0;
for (const post of posts) {
  const slug = 'blogg/' + post.slug;
  const exists = pages.find(p => p.slug === slug || p.slug === post.slug);
  if (!exists) {
    pages.push({ slug, title: post.title, description: post.excerpt });
    added++;
    console.log('Lade till: ' + slug);
  }
}

if (added > 0) {
  fs.writeFileSync('pages_data_STEPBYSTEP.json', JSON.stringify(pages, null, 2));
  console.log('Totalt ' + added + ' nya sidor i pages_data');
}
