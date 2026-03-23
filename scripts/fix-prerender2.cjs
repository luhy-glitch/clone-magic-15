const fs = require('fs');
let prerender = fs.readFileSync('scripts/prerender.mjs', 'utf8');

const newSlugs = [
  "'/blogg/seo-vasteras',",
  "'/blogg/webbbyra-vasteras',"
];

for (const slug of newSlugs) {
  const cleanSlug = slug.replace(/[',]/g, '').trim();
  if (!prerender.includes(cleanSlug)) {
    prerender = prerender.replace(
      "'/blogg/resan-till-100-pagespeed'",
      `${slug}\n  '/blogg/resan-till-100-pagespeed'`
    );
    console.log('Lade till: ' + cleanSlug);
  } else {
    console.log('Finns redan: ' + cleanSlug);
  }
}

fs.writeFileSync('scripts/prerender.mjs', prerender);
console.log('Klar!');
