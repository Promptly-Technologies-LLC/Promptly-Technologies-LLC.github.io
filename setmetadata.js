const fs = require('fs');
const cheerio = require('cheerio');
const beautify = require('js-beautify').html;

// Read JSON file
const data = JSON.parse(fs.readFileSync('src/customizations/siteproperties.json', 'utf8'));

// Read HTML file
const $ = cheerio.load(fs.readFileSync('index.html', 'utf8'));

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

$('head').append(`<meta property="og:url" content="${data['url']}">`);
$('head').append('<meta property="og:type" content="website">');
$('head').append(`<meta property="og:title" content="${data['title']}">`);
$('head').append(`<meta property="og:description" content="${data['shortDescription']}">`);

for (let card of data["socialCards"]) {
    $('head').append(`<meta property="og:image" content="${data['url'] + card}">`);
}

// Save updated HTML file
fs.writeFileSync('index.html', beautify($.html(), { indent_size: 2 }));
