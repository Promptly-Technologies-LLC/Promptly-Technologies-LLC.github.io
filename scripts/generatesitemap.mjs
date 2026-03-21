import fs from 'fs';

const data = JSON.parse(fs.readFileSync('src/customizations/siteproperties.json', 'utf8'));

let urlString = data.url;
if (!/^http(s)?:\/\//.test(urlString)) {
    urlString = 'https://' + urlString;
}

const today = new Date().toISOString().split('T')[0];

// Define site pages — hash routes for now, proper paths after Astro migration
const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/#/Store', priority: '0.7', changefreq: 'monthly' },
    { loc: '/#/Legal', priority: '0.3', changefreq: 'yearly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${urlString}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
