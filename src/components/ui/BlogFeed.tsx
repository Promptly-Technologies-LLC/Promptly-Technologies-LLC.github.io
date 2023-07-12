import React from 'react';
import RssObject from '../../types/rssfeed';
import { Link } from 'react-router-dom';
import useFetchContent from '../../hooks/useFetchContent';
import './BlogFeed.css';

// Default RssObject
const defaultRssObject: RssObject = {
  rss: {
    $: {
      'xmlns:dc': '',
      'xmlns:content': '',
      'xmlns:atom': '',
      version: '',
      'xmlns:itunes': '',
      'xmlns:googleplay': '',
    },
    channel: {
      title: '',
      description: '',
      link: '',
      image: { url: '', title: '', link: '' },
      generator: '',
      lastBuildDate: '',
      'atom:link': { $: { href: '', rel: '', type: '' } },
      copyright: '',
      language: '',
      webMaster: '',
      'itunes:owner': { 'itunes:email': '', 'itunes:name': '' },
      'itunes:author': '',
      'googleplay:owner': '',
      'googleplay:email': '',
      'googleplay:author': '',
      item: [],
    },
  },
};

const BlogFeed: React.FC = () => {
  const feedData: RssObject = useFetchContent('data/RssFeed.json') || defaultRssObject;

  return (
    <section id="blog">
        <div className="sectioncontainer">
        <div className="headercontainer">
          <h1>{feedData?.rss?.channel?.title}</h1>
          <h2>Recent Posts</h2>
        </div>
        <div className="contentcontainer">
          <div className="textcontainer">
          {feedData?.rss?.channel?.item.slice(0, 2).map((item, index) => (
            <div key={index} className="blogtext mb-16 lg:md-24">
              <Link to={item.link} className="text-xl font-bold">Read this post on {feedData.rss.channel.generator}</Link>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              <div dangerouslySetInnerHTML={{ __html: item['content:encoded'] }} />
            </div>
          ))}
          <button>Read more from this blog on {feedData?.rss?.channel?.generator}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeed;
