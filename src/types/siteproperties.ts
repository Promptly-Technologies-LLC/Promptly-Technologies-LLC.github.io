import SocialProfiles from './socialprofiles';
  
interface Robots {
    index: boolean;
    follow: boolean;
}

interface SiteProperties {
    url: string;
    title: string;
    author: string;
    shortDescription: string;
    longDescription: string;
    keywords: string[];
    socialCards: string[];
    favicon: string;
    robots: Robots;
    calendlyUrl: string;
    substackUrl: string;
    callToAction: string;
    socialProfiles: SocialProfiles;
}

export default SiteProperties;