interface Entry {
  id: string;
  title: string;
  link: string;
  published: string;
  description: string;
  "content:encoded": string;
}

interface RssObject {
  title: string;
  link: string;
  description: string;
  language: string;
  generator: string;
  published: string;
  entries: Entry[];
}
  
export default RssObject;