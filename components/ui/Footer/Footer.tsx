import Logo from '@/components/logos/Logo';
import TextLogo from '@/components/logos/TextLogo';
import s from './Footer.module.css'
import propertiesJSON from '@/customizations/siteproperties.json';
import SiteProperties from '@/types/siteproperties';
import SocialIcon from '@/components/logos/SocialIcon';


export default function Footer() {
    const properties: SiteProperties = propertiesJSON;
  
    return (
    <footer className={s.footer}>
        <div className={s.footercontents}>
            <div className={s.footertoprow}>
              <div className={s.footerleftside}>
                  <a href="/"><Logo className="h-24 mb-4" /></a>
                  <a href="/"><TextLogo className="h-16 mb-4" /></a>
              </div>
              <div className={s.footerrightside}>
                  <div>
                      <h2 className="nav-header">Resources</h2>
                      <ul>     
                        {properties.offsiteResources.map((resource, index) => (
                        <li key={index} className="mb-4">
                            <a href={resource.src} className="nav-link">{resource.name}</a>
                        </li>
                        ))}
                      </ul>
                  </div>
                  <div>
                      <h2 className="nav-header">About Us</h2>
                      <ul>
                          <li className="mb-4">
                              <a href="/AboutUs#team" className="nav-link">Team</a>
                          </li>
                          <li>
                              <a href="/AboutUs#careers" className="nav-link">Careers</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="nav-header">Legal</h2>
                      <ul>
                          <li className="mb-4">
                              <a href="/PrivacyPolicy" className="nav-link">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="/TermsandConditions" className="nav-link">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className={s.horizontaldivider} />
          <div className={s.footerbottomrow}>
              <span className={s.copyrighttext}>
                © 2023 <a href="/" >{properties.title}</a>. All Rights Reserved.
              </span>
              <div className={s.socialicons}>
                {Object.entries(properties.socialProfiles).map(([key, value]) => {
                    return (
                        <SocialIcon iconName={key} url={value} className="nav-link"/>
                    );
                })}
              </div>
          </div>
        </div>
    </footer>
  );
}

