import React from 'react';
import './Legal.css';
import Privacy from '../components/Privacy'
import ComicTitle from '../components/ComicTitle'
import SimpleNav from '../components/SimpleNav';
import Footer from '../components/Footer'
import { useWindowWidth } from '@react-hook/window-size';

const Legal: React.FC = () => {
    const windowWidth = useWindowWidth();
    const isLargeScreen = windowWidth >= 768;
    
    return(
        <main id="skip">
            <ComicTitle 
                text="PROMPTLY TECHNOLOGIES"
                fontSize={isLargeScreen ? 90 : 50} 
                lineSplit={!isLargeScreen}
                width={windowWidth}
            />
            <SimpleNav />
            <Privacy />
            <Footer />
        </main>
    )
}

export default Legal;