import React from 'react';
import './Careers.css';
import { CareersData } from '../../types/careers';
import careersJSON from '../../customizations/careers.json';
import CareersAccordion from './CareersAccordion';

const Careers: React.FC = () => {
    const careers: CareersData = careersJSON
    
    return(
        <section>
            <a href="#careers"></a>
            <div className="careerssectioncontainer">
                <div className="careersheader">
                    <h1>{careers.heading}</h1>
                    <h2>{careers.subheading}</h2>
                </div>
                <div className="flex justify-center">
                    <CareersAccordion listings={careers.listings} />
                </div>
            </div>
        </section>
    )
}

export default Careers;