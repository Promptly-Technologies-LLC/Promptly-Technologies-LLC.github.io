import React from 'react';
import { Accordion } from 'flowbite-react';
import { Listings } from '../../types/careers';
import './CareersAccordion.css';

interface CareersAccordionProps {
  listings: Listings[];
}

const CareersAccordion: React.FC<CareersAccordionProps> = ({listings}) => {

  return (
    <Accordion className="w-full mb-0 border-none">
      {listings.map((listing, index) => (
        <Accordion.Panel key={index}>
          <Accordion.Title id={`accordion-title-${index}`} className='w-full p-4 rounded-xl focus:ring-0'>
            {listing.title}
          </Accordion.Title>
          <Accordion.Content className="p-4">
            {listing.description}
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  )
}

export default CareersAccordion;