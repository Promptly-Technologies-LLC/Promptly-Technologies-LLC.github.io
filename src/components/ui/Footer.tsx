import React from 'react';
import Logo from '../../components/logos/Logo';
import TextLogo from '../../components/logos/TextLogo';
import './Footer.css';
import propertiesJSON from '../../customizations/siteproperties.json';
import SiteProperties from '../../types/siteproperties';
import SocialIcon from '../../components/logos/SocialIcon';


const Footer: React.FC = () => {
    const properties: SiteProperties = propertiesJSON;
  
    return (
    <footer className="footer">
        <div className="footercontents">
            <div className="footertoprow">
              <div className="footerleftside">
                  <a href="/"><Logo className="h-24 mb-4" /></a>
                  <a href="/"><TextLogo className="h-16 mb-4" /></a>
              </div>
              <div className="footerrightside">
                  <div>
                      <h2 className="nav-header">Resources</h2>
                      <ul>     
                        {properties.offsiteResources.map((resource, index) => (
                        <li key={index} className="mb-0 md:mb-4">
                            <a href={resource.src} className="nav-link">{resource.name}</a>
                        </li>
                        ))}
                      </ul>
                  </div>
                  <div>
                      <h2 className="nav-header">About Us</h2>
                      <ul>
                          <li className="mb-0 md:mb-4">
                              <a href="/#/AboutUs" className="nav-link">Team</a>
                          </li>
                          <li>
                              <a href="/#/AboutUs" className="nav-link">Careers</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="nav-header">Legal</h2>
                      <ul>
                          <li className="mb-0 md:mb-4">
                              <a href="/#/Legal" className="nav-link">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="/#/Legal" className="nav-link">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className="horizontaldivider" />
          <div className="footerbottomrow">
              <span className="copyrighttext">
                © 2023 <a href="/" >{properties.title}</a>. All Rights Reserved.
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