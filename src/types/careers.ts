export interface Listings {
    title: string;
    description: string;
}

export interface CareersData {
    heading: string;
    subheading: string;
    listings: Listings[];
  }