import React from 'react';
import './Hero.css';
import heroJSON from '../customizations/hero.json';
import HeroData from '../types/hero';
import propertiesJSON from '../customizations/siteproperties.json';
import SiteProperties from '../types/siteproperties';
import SocialIcon from './SocialIcon';
import ComicTitle from './ComicTitle';
import Navbar from './Nav';
import { useWindowWidth } from '@react-hook/window-size';
import ScallopedOval from './ScallopedOval';

const Hero: React.FC = () => {
    const hero: HeroData = heroJSON;
    const properties: SiteProperties = propertiesJSON;
    const windowWidth = useWindowWidth();
    const isLargeScreen = windowWidth >= 768;

    return (
        <section id="hero" className="hero-container">
            <div className="top-content-wrapper">
                <div className="comic-title">
                    <ComicTitle 
                        text="PROMPTLY TECHNOLOGIES"
                        fontSize={isLargeScreen ? 90 : 50} 
                        lineSplit={!isLargeScreen}
                        width={windowWidth}
                    />
                </div>
                <div className="inline-flex nav-wrapper">
                    <Navbar />
                </div>
            </div>
            <img className="hero-image" src={hero.src} alt={hero.alt} style={isLargeScreen ? { left: hero.adjustment } : {}} />
            <div className="bottom-container">
                <div className="bottomwrapper">
                    <ScallopedOval className="px-10 py-10">
                        <div 
                            className="hero-script"
                            dangerouslySetInnerHTML={{ __html: hero.script }}
                        />
                        <div className="social-icons">
                            {Object.entries(properties.socialProfiles).map(([key, value], index) => {
                                return (
                                    <>
                                        {(index !== 0 && index % 4 === 0) && <br />}
                                        <SocialIcon iconName={key} url={value} className="icon-link" key={key}/>
                                    </>
                                );
                            })}
                        </div>
                    </ScallopedOval>
                </div>
            </div>
        </section>
    );
}

export default Hero;
