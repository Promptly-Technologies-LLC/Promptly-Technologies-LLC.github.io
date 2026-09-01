export type SubstackItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  image?: string;
};

type SubstackFeed = {
  title: string;
  description: string;
  link: string;
  item: SubstackItem | SubstackItem[];
};

export default SubstackFeed;
