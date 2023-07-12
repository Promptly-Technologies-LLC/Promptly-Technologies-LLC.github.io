import React from 'react';
import './Pitch.css';
import propertiesJSON from '../../customizations/siteproperties.json';
import SiteProperties from '../../types/siteproperties';
import Logo from '../logos/Logo';
import TextLogo from '../logos/TextLogo';

const properties: SiteProperties = propertiesJSON;

const Pitch: React.FC = () => {
    return(
    <section id="pitch">
        <div className="sectioncontainer">
            <div className="headercontainer">
                <h1>{properties.title}</h1>
                <h2>{properties.shortDescription}</h2>
            </div>
            <div className="contentcontainer items-end">
                <div className="grid grid-cols-3 md:grid-cols-6">
                    <div className="flex items-end col-span-3 mb-2 md:mb-0 md:mr-4">
                        <span className="text-xl">{properties.longDescription}</span>
                    </div>
                    <div className="flex items-end col-span-1 mt-2 md:mt-0 md:ml-4">
                        <Logo/>
                    </div>
                    <div className="flex items-end col-span-2 mt-2 md:mt-0">
                        <TextLogo />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Pitch;