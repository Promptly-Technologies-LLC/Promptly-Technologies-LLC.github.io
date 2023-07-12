import React from 'react';
import rssFeedData from './RssFeed.json';
import RssObject from '../../types/rssfeed';
import { Link } from 'react-router-dom';
import './BlogFeed.css';

const BlogFeed: React.FC = () => {
  const feedData: RssObject = rssFeedData;

  return (
    <section id="blog">
        <div className="sectioncontainer">
        <div className="headercontainer">
          <h1>{feedData.rss.channel.title}</h1>
          <h2>Recent Posts</h2>
        </div>
        <div className="contentcontainer">
          <div className="textcontainer">
          {feedData.rss.channel.item.slice(0, 2).map((item, index) => (
            <div key={index} className="blogtext mb-16 lg:md-24">
              <Link to={item.link} className="text-xl font-bold">Read this post on {feedData.rss.channel.generator}</Link>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              <div dangerouslySetInnerHTML={{ __html: item['content:encoded'] }} />
            </div>
          ))}
          <button>Read more from this blog on {feedData.rss.channel.generator}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeed;
