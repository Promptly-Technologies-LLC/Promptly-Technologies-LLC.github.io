import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import propertiesJSON from "../../customizations/siteproperties.json";
import SiteProperties from "../../types/siteproperties";
import './Book.css';

const Book: React.FC = () => {
    const [height, setHeight] = useState(getIframeHeight());
    const properties = propertiesJSON as SiteProperties;
    const calendlyUrl = properties.calendlyUrl as string;
    const callToAction = properties.callToAction as string;

  function getIframeHeight() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 999) {
      return '690px';
    } else {
      return '940px';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setHeight(getIframeHeight());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section id="book">
      <div className="sectioncontainer">
        <div className="headercontainer">
          <h1>Book a consultation</h1>
          <h2>{callToAction}</h2>
        </div>
        <div className="book">
          <InlineWidget 
            url={calendlyUrl}
            styles={{ height }}
          />
        </div>
      </div>
    </section>
  );
};

export default Book;