'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/blogPosts.json');
const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Map of slug to new scheduled_date (Mondays and Fridays, 2 per week for 8 weeks)
const newDates = {
  'sokmotoroptimering-vasteras-komplett-guide': '2026-06-16', // Monday week 1
  'webbyra-vasteras-guide-valjra-ratt': '2026-06-19', // Friday week 1
  'google-ads-vasteras-guide-2026': '2026-06-23', // Monday week 2
  'hemsida-foretag-vasteras-guide': '2026-06-27', // Friday week 2
  'digital-marknadsforing-vasteras-guide': '2026-06-30', // Monday week 3
  'seo-eskilstuna-lokal-guide-2026': '2026-07-03', // Friday week 3
  'webbdesigner-vasteras-anlita-guide': '2026-07-06', // Monday week 4
  'wordpress-hemsida-pris-guide-2026': '2026-07-10', // Friday week 4
  'lokal-seo-google-maps-vastmanland': '2026-07-13', // Monday week 5
  'seo-ehandel-vastmanland-guide': '2026-07-17', // Friday week 5
  'konverteringsoptimering-hemsida-guide': '2026-07-20', // Monday week 6
  'teknisk-seo-guide-vasteras-2026': '2026-07-24', // Friday week 6
  'innehallsstrategi-b2b-foretag-vastmanland': '2026-07-27', // Monday week 7
  'google-analytics-4-guide-vasteras': '2026-07-31', // Friday week 7
  'lankbygge-lokal-seo-vastmanland-guide': '2026-08-03', // Monday week 8
  'seo-audit-hemsida-checklista-2026': '2026-08-07', // Friday week 8
};

let updated = 0;
posts.forEach(post => {
  if (newDates[post.slug]) {
    const oldDate = post.scheduled_date;
    post.scheduled_date = newDates[post.slug];
    updated++;
    console.log(`${post.slug}: ${oldDate} → ${post.scheduled_date}`);
  }
});

fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
console.log(`\nDone. Updated ${updated} posts with new Monday/Friday schedule over 8 weeks.`);
