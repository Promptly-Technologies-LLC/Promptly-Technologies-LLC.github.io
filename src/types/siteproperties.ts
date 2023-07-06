import SocialProfiles from './socialprofiles';
  
interface Robots {
    index: boolean;
    follow: boolean;
}
  
interface SiteLink {
    name: string;
    src: string;
}

interface SiteProperties {
    url: string;
    title: string;
    author: string;
    description: string;
    keywords: string[];
    socialCards: string[];
    favicon: string;
    robots: Robots;
    calendlyUrl?: string;
    socialProfiles: SocialProfiles;
    offsiteResources: SiteLink[];
}

export default SiteProperties;