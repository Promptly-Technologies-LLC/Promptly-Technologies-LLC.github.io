interface RssObject {
    rss: Rss;
  }
  
  interface Rss {
    $: Xmlns;
    channel: Channel;
  }
  
  interface Xmlns {
    'xmlns:dc': string;
    'xmlns:content': string;
    'xmlns:atom': string;
    version: string;
    'xmlns:itunes': string;
    'xmlns:googleplay': string;
  }
  
  interface Channel {
    title: string;
    description: string;
    link: string;
    image: Image;
    generator: string;
    lastBuildDate: string;
    'atom:link': AtomLink;
    copyright: string;
    language: string;
    webMaster: string;
    'itunes:owner': ItunesOwner;
    'itunes:author': string;
    'googleplay:owner': string;
    'googleplay:email': string;
    'googleplay:author': string;
    item: Item[];
  }
  
  interface Image {
    url: string;
    title: string;
    link: string;
  }
  
  interface AtomLink {
    $: AtomLinkProperties;
  }
  
  interface AtomLinkProperties {
    href: string;
    rel: string;
    type: string;
  }
  
  interface ItunesOwner {
    'itunes:email': string;
    'itunes:name': string;
  }
  
  interface Item {
    title: string;
    description: string;
    link: string;
    guid: Guid;
    'dc:creator': string;
    pubDate: string;
    enclosure: Enclosure;
    'content:encoded': string;
  }
  
  interface Guid {
    _: string;
    $: IsPermaLink;
  }
  
  interface IsPermaLink {
    isPermaLink: string;
  }
  
  interface Enclosure {
    $: EnclosureProperties;
  }
  
  interface EnclosureProperties {
    url: string;
    length: string;
    type: string;
  }
  
export default RssObject;