import React from 'react';
import './Careers.css';
import { CareersData } from '../../types/careers';
import careersJSON from '../../customizations/careers.json';
import CareersAccordion from './CareersAccordion';

const Careers: React.FC = () => {
    const careers: CareersData = careersJSON
    
    return(
        <section id="careers">
            <div className="sectioncontainer">
                <div className="headercontainer">
                    <h1>{careers.heading}</h1>
                    <h2>{careers.subheading}</h2>
                </div>
                <div className="contentcontainer border border-gray-500">
                    <CareersAccordion listings={careers.listings} />
                </div>
            </div>
        </section>
    )
}

export default Careers;