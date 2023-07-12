import React from 'react';
import servicesJSON from '../../customizations/services.json';
import ServicesData from '../../types/services';
import './Services.css';

const services: ServicesData = servicesJSON;

const Services: React.FC = () => {
    return(
    <section id="services">
        <div className="sectioncontainer">
            <div className="headercontainer">
                <h1>{services.heading}</h1>
                <h2>{services.subheading}</h2>
            </div>
            <div className="contentcontainer">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 rounded-xl text-left">
                    <div className="p-4 lg:p-6 bg-light-accent text-white rounded-t-xl md:rounded-none md:rounded-l-xl">
                        <span className="text-4xl font-bold">{services.description}</span>
                    </div>
                    <div className="p-4 lg:p-6 rounded-b-xl md:rounded-none md:rounded-r-xl">
                        <ul className="list-disc list-inside text-xl">
                    {services.services.map((service, index) => {
                        return(
                            <li key={index}>{service}</li>
                        )
                    })}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services;