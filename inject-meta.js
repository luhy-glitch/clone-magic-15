import fs from 'fs';
import path from 'path';

const PAGES_DATA_PATH = './pages_data_STEPBYSTEP.json';
const OUTPUT_DIR = './dist';

function inject() {
    console.log("🔍 Startar SEO-injicering...");
    const pages = JSON.parse(fs.readFileSync(PAGES_DATA_PATH, 'utf8'));

    pages.forEach(page => {
        const fileName = page.slug === 'index' ? 'index.html' : `${page.slug}.html`;
        const filePath = path.join(OUTPUT_DIR, fileName);

        if (fs.existsSync(filePath)) {
            let html = fs.readFileSync(filePath, 'utf8');

            const canonicalSlug = page.slug === 'index' ? '' : page.slug;
            const canonicalUrl = `https://www.lrhkonsult.se/${canonicalSlug}`;

            const seoBlock = `
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    `;

            html = html.replace(/<title>.*?<\/title>/gi, '');
            html = html.replace(/<meta name="description".*?>/gi, '');
            html = html.replace(/<link rel="canonical".*?>/gi, '');

            html = html.replace('</head>', `${seoBlock}\n  </head>`);

            fs.writeFileSync(filePath, html);
            console.log(`✅ Injicerat i: ${fileName}`);
        }
    });
}

inject();