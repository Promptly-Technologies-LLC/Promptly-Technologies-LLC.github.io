import React from 'react';
import Logo from '../../components/logos/Logo';
import TextLogo from '../../components/logos/TextLogo';
import './Footer.css';
import propertiesJSON from '../../customizations/siteproperties.json';
import SiteProperties from '../../types/siteproperties';
import SocialIcon from '../../components/logos/SocialIcon';
import { HashLink } from 'react-router-hash-link';


const Footer: React.FC = () => {
    const properties: SiteProperties = propertiesJSON;
  
    return (
    <footer id="footer" className="footer">
        <div className="footercontents">
            <div className="footertoprow">
              <div className="footerleftside">
                  <HashLink to="/#"><Logo className="h-24 mb-4" /></HashLink>
                  <HashLink to="/#"><TextLogo className="h-16 mb-4" /></HashLink>
              </div>
              <div className="footerrightside">
                  <div>
                      <h2 className="nav-header">Navigation</h2>
                      <ul>     
                        <li className="mb-0 md:mb-4">
                            <HashLink to="/#" className="nav-link">Home</HashLink>
                        </li>
                        <li>
                            <HashLink to="/Blog#" className="nav-link">Blog</HashLink>
                        </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="nav-header">About Us</h2>
                      <ul>
                          <li className="mb-0 md:mb-4">
                              <HashLink to="/AboutUs#team" className="nav-link">Team</HashLink>
                          </li>
                          <li>
                              <HashLink to="/AboutUs#careers" className="nav-link">Careers</HashLink>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="nav-header">Legal</h2>
                      <ul>
                          <li className="mb-0 md:mb-4">
                              <HashLink to="/Legal#privacy" className="nav-link">Privacy Policy</HashLink>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className="horizontaldivider" />
          <div className="footerbottomrow">
              <span className="copyrighttext">
                © 2023 <HashLink to="/#" className="nav-link text-sm font-normal" >{properties.title}</HashLink>. All Rights Reserved.
              </span>
              <div className="socialicons">
                {Object.entries(properties.socialProfiles).map(([key, value]) => {
                    return (
                        <SocialIcon iconName={key} url={value} className="nav-link" key={key}/>
                    );
                })}
              </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;