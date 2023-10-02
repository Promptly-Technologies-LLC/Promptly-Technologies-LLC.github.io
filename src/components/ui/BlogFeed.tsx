import React from 'react';
import RssObject from '../../types/rssfeed';
import { Link } from 'react-router-dom';
import rssFeedJSON from './RssFeed.json';
import propertiesJSON from '../../customizations/siteproperties.json';
import SiteProperties from '../../types/siteproperties';
import './BlogFeed.css';

const properties = propertiesJSON as SiteProperties;
const feedData: RssObject = rssFeedJSON as RssObject;

const BlogFeed: React.FC = () => {
  return (
    <section id="blog">
        <div className="sectioncontainer">
        <div className="headercontainer">
          <h1>{feedData?.title}</h1>
          <h2>Recent Posts</h2>
        </div>
        <div className="contentcontainer">
          <div className="textcontainer">
          {feedData?.entries.slice(0, 2).map((entry, index) => (
            <div key={index} className="blogtext mb-16 lg:md-24">
              <Link to={entry.link} className="text-xl font-bold">Read this post on {feedData.generator}</Link>
              <h1 dangerouslySetInnerHTML={{ __html: entry.title}} />
              <h2 dangerouslySetInnerHTML={{ __html: entry.description}} />
              <div dangerouslySetInnerHTML={{ __html: entry['content:encoded'] }} />
            </div>
          ))}
          <a href={properties.substackUrl} target="_blank" rel="noopener noreferrer">
            <button className="readmorebutton">
              Read more from this blog on {feedData?.generator}
            </button>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeed;
