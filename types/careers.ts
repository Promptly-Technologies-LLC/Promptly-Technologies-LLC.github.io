interface Listings {
    title: string;
    description: string;
}

interface Careers {
    heading: string;
    subheading: string;
    listings: Listings[];
  }
  
export default Careers;