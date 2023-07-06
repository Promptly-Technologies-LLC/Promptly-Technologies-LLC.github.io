interface Listings {
    title: string;
    description: string;
}

interface CareersData {
    heading: string;
    subheading: string;
    listings: Listings[];
  }
  
export default CareersData;