import fs from 'fs';
import { extract } from '@extractus/feed-extractor'

// Read JSON file
const sitedata = JSON.parse(fs.readFileSync('src/customizations/siteproperties.json', 'utf8'));
const feedUrl = sitedata.substackUrl + '/feed';

// Fetch the RSS feed
async function fetchRssFeed() {
  try {
    // Fetch the RSS feed
    const feedData = await extract(feedUrl, {
      useISODateFormat: false,
      getExtraEntryFields: (feedEntry) => { 
        return { 'content:encoded': feedEntry['content:encoded'] || '' };
      }
    });

    // Verify that the fetched data is a valid Javascript object
    if (!feedData || typeof feedData !== 'object') {
      throw new Error('Invalid RSS feed data');
    }

    // Remove the top-level published field
    delete feedData.published;
    
    // Convert the Javascript object to JSON and save as a UI component
    fs.writeFileSync('src/components/ui/RssFeed.json', JSON.stringify(feedData, null, 2));

    console.log('RSS feed saved successfully!');
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
  }
}

fetchRssFeed();
