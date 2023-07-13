const fetch = require('isomorphic-fetch');
const fs = require('fs');
const { parseStringPromise } = require('xml2js');

// Read JSON file
const sitedata = JSON.parse(fs.readFileSync('src/customizations/siteproperties.json', 'utf8'));
const feedUrl = sitedata.substackUrl + '/feed';

async function fetchRssFeed() {
  try {
    const response = await fetch(feedUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed (${response.status} ${response.statusText})`);
    }

    const feedData = await response.text();

    // Verify that the fetched data is valid
    if (!feedData || typeof feedData !== 'string') {
      throw new Error('Invalid RSS feed data');
    }

    // Parse the XML into a JavaScript object
    const parsedData = await parseStringPromise(feedData, { explicitArray: false });

    // Convert the parsed data into the desired JSON format
    const jsonFeedData = JSON.stringify(parsedData, null, 2);

    fs.writeFileSync('src/components/ui/RssFeed.json', jsonFeedData);

    console.log('RSS feed saved successfully!');
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
  }
}

fetchRssFeed();
