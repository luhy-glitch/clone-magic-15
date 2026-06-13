'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/blogPosts.json');
const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const additions = {
  'wordpress-konsult-vasteras': [
    "## Vanliga frågor om WordPress-konsult i Västerås",
    "Hur lång tid tar det att bygga en WordPress-sajt? En enkel presentationssajt med 5–7 sidor tar typiskt 3–5 veckor från kickoff till lansering. En mer komplex sajt med anpassad funktionalitet, WooCommerce eller flerspråksstöd tar 6–12 veckor.",
    "Vad kostar ett WordPress-underhållsavtal? Våra underhållsavtal börjar på 1 500 kr/månad och inkluderar månadsvis uppdatering av WordPress-kärna, teman och plugins, automatiska säkerhetskopior, säkerhetsövervakning och en timmes support. Större avtal med mer löpande support, innehållsproduktion eller SEO-arbete kostar mer.",
    "Kan jag ta över min WordPress-sajt och sköta den själv efter att ni byggt den? Absolut – det är faktiskt ett av WordPress styrkor. Vi genomför alltid en handover-session där vi lär dig grunderna i att uppdatera innehåll, lägga till sidor och hantera media. Du ska kunna klara dig på egen hand för den vardagliga administrationen.",
    "Vad händer om min WordPress-sajt hackas? Om du har ett underhållsavtal med oss åtgärdar vi säkerhetsincidenter som prioritet. Vi har backup-rutiner som gör att vi kan återställa din sajt till ett rent tillstånd snabbt. Har du inte ett avtal kan vi fortfarande hjälpa dig – men det tar längre tid och kostar mer.",
    "## Sammanfattning: WordPress-konsult i Västerås",
    "WordPress är ett kraftfullt och flexibelt verktyg som passar de flesta SME-projekt i Västerås och Västmanland. Med rätt implementation – optimerad hosting, minimal plugin-flora, säkerhetshärdning och löpande underhåll – levererar det en snabb, säker och lättskött sajt som hjälper ditt företag växa.",
    "Vi på LRH Konsult är WordPress-konsulter med lång erfarenhet av projekt i hela Mälardalen. Kontakta oss för ett gratis samtal och se vad vi kan göra för din digitala närvaro."
  ],
  'kommunikationsbyra-vastmanland': [
    "## Sammanfattning: Välj en kommunikationspartner som förstår Västmanland",
    "Det finns många kompetenta kommunikationsbyråer i Sverige, men för ett lokalt företag i Västmanland är det ofta ett extra värde med en byrå som känner till de lokala förutsättningarna, de lokala medierna, de lokala nätverken och den lokala köpkulturen.",
    "En Stockholmsbyrå med en Västerås-adress i sin portfölj kanske inte förstår varför Sala-marknaden beter sig annorlunda än Köping, eller vilka lokala nätverk som faktiskt är viktiga. En lokal partner med regional förankring bidrar med den insikten.",
    "Oavsett om du söker en renodlad kommunikationsbyrå eller en integrerad digital partner – välj någon som lyssnar på dina mål, kommunicerar transparent om process och pris, och kan visa konkreta resultat från liknande projekt.",
    "Vi på LRH Konsult är ett lokalt alternativ med kompetens inom webbutveckling, SEO och digital kommunikationsstrategi. Kontakta oss för ett förutsättningslöst samtal."
  ]
};

let updated = 0;
posts.forEach(post => {
  if (additions[post.slug]) {
    if (Array.isArray(post.content)) {
      post.content = [...post.content, ...additions[post.slug]];
    }
    updated++;
    const text = Array.isArray(post.content) ? post.content.join(' ') : post.content;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    console.log(`Updated: ${post.slug} → ${wordCount} words`);
  }
});

fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
console.log(`\nDone. Updated ${updated} posts.`);
