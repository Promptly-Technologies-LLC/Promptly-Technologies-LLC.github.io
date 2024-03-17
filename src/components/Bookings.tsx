import { InlineWidget } from "react-calendly";
import { useWindowWidth } from '@react-hook/window-size';
import propertiesJSON from "../customizations/siteproperties.json";
import SiteProperties from "../types/siteproperties";
import './Bookings.css';

const Book: React.FC = () => {
    const windowWidth = useWindowWidth();
    const properties = propertiesJSON as SiteProperties;
    const calendlyUrl = properties.calendlyUrl;

    const getIframeHeight = () => {
        return windowWidth >= 999 ? '690px' : '940px';
    };

    const height = getIframeHeight();

    return ( 
        <section id="book">
            {calendlyUrl ?
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
            : <p className="text-red-600">Error: To use the Book component, supply a calendlyUrl in siteproperties.json.</p>}
        </section>
    );
};

export default Book;
