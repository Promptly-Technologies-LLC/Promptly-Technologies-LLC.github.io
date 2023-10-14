import React from 'react';
import SimpleNav from './SimpleNav';
import './Footer.css';
import propertiesJSON from '../customizations/siteproperties.json';
import SiteProperties from '../types/siteproperties';
import { HashLink } from 'react-router-hash-link';


const Footer: React.FC = () => {
    const properties: SiteProperties = propertiesJSON;
  
    return (
    <footer id="footer" className="footer">
        <div className="footercontents">
            <div className="copyrighttext">
            Published by <HashLink to="/#" className="text-sm font-normal" >{properties.title}</HashLink>.<br/>Copyright 2023. All Rights Reserved.
            </div>
            <SimpleNav />
        </div>
    </footer>
  );
}

export default Footer;