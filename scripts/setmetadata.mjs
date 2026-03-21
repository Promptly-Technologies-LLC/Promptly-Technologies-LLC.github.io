import fs from 'fs';
import * as cheerio from 'cheerio';
import { URL } from 'url';
import * as beautify from 'js-beautify';

// Read JSON file
const data = JSON.parse(fs.readFileSync('src/customizations/siteproperties.json', 'utf8'));

// Read HTML file
const $ = cheerio.load(fs.readFileSync('index.html', 'utf8'));

// Prefix URL with https:// if necessary
let urlString = data.url;
if (!/^http(s)?:\/\//.test(urlString)) {
    urlString = 'https://' + urlString;
}
let url = new URL(urlString);

// Empty head and add boilerplate
$('head').empty();
$('head').append('<meta charset="utf-8">');
$('head').append('<meta content="width=device-width, initial-scale=1.0" name="viewport">');

// Update metadata in the HTML file from our JSON
$('head').append(`<title>${data['title']}</title>`);
$('head').append(`<meta name="author" content="${data['author']}">`);
$('head').append(`<meta name="description" content="${data['shortDescription']}">`);
$('head').append(`<meta name="keywords" content="${data['keywords'].join(', ')}">`);
$('head').append(`<link rel="icon" href="${data['favicon']}">`);

let robotsContent = data["robots"]["index"] ? "index" : "noindex";
robotsContent += data["robots"]["follow"] ? ",follow" : ",nofollow";
$('head').append(`<meta name="robots" content="${robotsContent}">`);

$('head').append(`<meta property="og:url" content="${urlString}">`);
$('head').append('<meta property="og:type" content="website">');
$('head').append(`<meta property="og:title" content="${data['title']}">`);
$('head').append(`<meta property="og:description" content="${data['shortDescription']}">`);

for (let card of data["socialCards"]) {
    $('head').append(`<meta property="og:image" content="${urlString + card}">`);
    $('head').append(`<meta property="og:image:alt" content="${data['shortDescription']}">`);
}

// Canonical URL
$('head').append(`<link rel="canonical" href="${urlString}">`);

// Twitter Card meta tags
$('head').append('<meta name="twitter:card" content="summary_large_image">');
$('head').append(`<meta name="twitter:title" content="${data['title']}">`);
$('head').append(`<meta name="twitter:description" content="${data['shortDescription']}">`);
if (data["socialCards"].length > 0) {
    $('head').append(`<meta name="twitter:image" content="${urlString + data['socialCards'][0]}">`);
}
if (data["socialProfiles"]?.["Twitter"]) {
    const twitterHandle = data["socialProfiles"]["Twitter"].split('/').pop();
    $('head').append(`<meta name="twitter:site" content="@${twitterHandle}">`);
}

// Schema.org JSON-LD structured data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data['title'],
    "url": urlString,
    "description": data['longDescription'] || data['shortDescription'],
    "logo": data["socialCards"].length > 0 ? urlString + data["socialCards"][0] : undefined,
    "sameAs": Object.values(data["socialProfiles"] || {}),
};
$('head').append(`<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`);

// Save updated HTML file
fs.writeFileSync('index.html', beautify.default.html($.html(), { indent_size: 2, preserve_newlines: false }));

// Load package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Update fields as required
packageJson.name = data.title.toLowerCase().replace(/[^a-z0-9-]/g, '');
packageJson.author = data.author;
packageJson.homepage = urlString;

// Parse URL and remove protocol for deploy command
packageJson.scripts = packageJson.scripts || {};

// Update deploy command, excluding CNAME if using Github default domain
if (url.hostname.endsWith('.github.io')) {
    packageJson.scripts.deploy = 'gh-pages -d dist';
} else {
    packageJson.scripts.deploy = `echo ${url.hostname} > ./dist/CNAME && gh-pages -d dist`;
}

// Save package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
