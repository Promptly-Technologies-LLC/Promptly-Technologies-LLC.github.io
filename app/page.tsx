import { Metadata } from 'next'
import SiteProperties from '@/types/siteproperties'
import propertiesJSON from '@/customizations/siteproperties.json'
import Home from '@/components/ui/Home'

export async function generateMetadata(): Promise<Metadata> {       
    const properties: SiteProperties = propertiesJSON;

    return {
        metadataBase: new URL(properties.url),
        title: properties.title,
        authors: [{ name: properties.author }],
        description: properties.description,
        keywords: properties.keywords,
        openGraph: {
            images: properties.socialCards
        },
        robots: properties.robots,
        icons: {
            icon: properties.favicon,
        }
      };
    }

export default function LandingPage() {
    return (
        <Home />
    );
}