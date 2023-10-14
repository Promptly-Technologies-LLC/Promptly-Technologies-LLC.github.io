import React from "react";
import { InlineWidget } from "react-calendly";
import propertiesJSON from "../customizations/siteproperties.json";
import SiteProperties from "../types/siteproperties";
import './Bookings.css';
import { useWindowWidth } from '@react-hook/window-size';

const Book: React.FC = () => {
    const windowWidth = useWindowWidth();
    const properties = propertiesJSON as SiteProperties;
    const calendlyUrl = properties.calendlyUrl as string;

    const getIframeHeight = () => {
        return windowWidth >= 999 ? '690px' : '940px';
    };

    const height = getIframeHeight();

    return (
        <section id="book">
            <div className="sectioncontainer">
                <div className="headercontainer">
                    <h1>Book a free consultation</h1>
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
