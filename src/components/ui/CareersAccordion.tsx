import { Accordion } from 'flowbite-react';
import { Listings } from '../../types/careers';

interface CareersAccordionProps {
  listings: Listings[];
}

const CareersAccordion: React.FC<CareersAccordionProps> = ({listings}) => {
  
  return (
    <Accordion>
      {listings.map((listing, index) => (
        <Accordion.Panel key={index}>
          <Accordion.Title>
            {listing.title}
          </Accordion.Title>
          <Accordion.Content>
            {listing.description}
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  )
}

export default CareersAccordion;