import fs from 'fs';
import { extract } from '@extractus/feed-extractor'

const sitedata = JSON.parse(fs.readFileSync('src/customizations/siteproperties.json', 'utf8'));
const feedUrl = sitedata.substackUrl + '/feed';

function enclosureUrl(enclosure) {
  if (!enclosure) return undefined;
  const items = Array.isArray(enclosure) ? enclosure : [enclosure];
  const image = items.find((entry) => typeof entry?.url === 'string') ?? items[0];
  return typeof image?.url === 'string' ? image.url : undefined;
}

function slimItem(item) {
  const image = enclosureUrl(item.enclosure);
  return {
    title: item.title,
    description: item.description ?? '',
    link: item.link,
    pubDate: item.pubDate,
    ...(image ? { image } : {}),
  };
}

async function fetchSubstackFeed() {
  try {
    const feedData = await extract(feedUrl, {
      useISODateFormat: false,
      normalization: false,
    });

    if (!feedData || typeof feedData !== 'object') {
      throw new Error('Invalid Substack feed data');
    }

    const rawItems = feedData.item
      ? Array.isArray(feedData.item)
        ? feedData.item
        : [feedData.item]
      : [];
    const items = rawItems.map(slimItem).filter((item) => item.title && item.link);

    if (items.length === 0) {
      throw new Error('Substack feed contained no items');
    }

    const slimFeed = {
      title: feedData.title,
      description: feedData.description,
      link: feedData.link ?? sitedata.substackUrl,
      item: items,
    };

    fs.writeFileSync('src/customizations/substackfeed.json', JSON.stringify(slimFeed, null, 2));

    console.log('Substack feed saved successfully!');
  } catch (error) {
    console.error('Error fetching Substack feed:', error);
  }
}

fetchSubstackFeed();
