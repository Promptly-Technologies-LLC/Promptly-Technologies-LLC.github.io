import React from 'react';
import './Store.css';
import ComicTitle from '../components/ComicTitle';
import Products from '../components/Products'
import SimpleNav from '../components/SimpleNav';
import Footer from '../components/Footer'
import { useWindowWidth } from '@react-hook/window-size';

const Store: React.FC = () => {
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
            <Products />
            <Footer />
        </main>
    )
}

export default Store;