type ProductFeed = {
    title: string;
    link: string;
    description: string;
    language: string;
    pubDate?: string;
    ttl: number;
    "opensearch:totalResults": number;
    "opensearch:startIndex": number;
    "opensearch:itemsPerPage": number;
    "opensearch:Query": {
      "@_role": string;
      "@_searchTerms": string;
    };
    item: Item | Item[];
  };
  
  type Item = {
    guid: string;
    pubDate: string;
    title: string;
    link: string;
    author: string;
    description: string;
    price: string;
    "media:title": string;
    "media:description": string;
    "media:price": string;
    "media:thumbnail": {
      "@_url": string;
    };
    "media:content": {
      "@_url": string;
    };
    "media:keywords": string;
    "media:rating": {
      "#text": string;
      "@_scheme": string;
    };
  };

  export default ProductFeed;