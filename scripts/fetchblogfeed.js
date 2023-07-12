const fetch = require('isomorphic-fetch');
const fs = require('fs');
const { parseStringPromise } = require('xml2js');

async function fetchRssFeed() {
  try {
    const response = await fetch('https://knowledgeworkersguide.substack.com/feed');
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

    fs.writeFileSync('public/data/RssFeed.json', jsonFeedData);
    fs.writeFileSync('dist/data/RssFeed.json', jsonFeedData);

    console.log('RSS feed saved successfully!');
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
  }
}

fetchRssFeed();