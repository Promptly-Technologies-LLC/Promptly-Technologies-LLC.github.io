import React from 'react';
import propertiesJSON from '../../customizations/siteproperties.json';
import SiteProperties from '../../types/siteproperties';
import { Link } from 'react-router-dom';
import './Privacy.css';

const Privacy: React.FC = () => {
    const properties: SiteProperties = propertiesJSON;
    
    return(
    <section id="privacy">
        <div className="sectioncontainer">
            <div className="headercontainer">
                <h1>Privacy Policy</h1>
                <h2>Important disclosures about how we use your data</h2>
            </div>
            <div className="contentcontainer">
                <div className="textcontainer">
                <p>Welcome to the {properties.title} privacy policy! This page provides information about what data this website collects and why.</p>
                <p>Note that all data collection that occurs on this website is handled by third-party services, so you should also refer to those services' privacy policies. Additionally, this website is hosted on a secure third-party server owned by Github, and they may collect some usage information, including logs of visitor IP addresses. See <Link to="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Github's privacy policy</Link> for more information.</p>
                <h3>Booking form</h3>
                <p>The booking form on this site is served from Calendly.com. We have no control over how Calendly uses that data, so please refer to <Link to="https://calendly.com/privacy">Calendly's privacy policy</Link> for more information. For our part, we may use any information you voluntarily provide for the purpose of sending you meeting reminders or other communications or promotions related to the services we provide. You may opt out of these communications at any time by simplying replying to our emails with a request to discontinue.</p>
                <h3>Cookies</h3>
                <p>At the time of this writing, we do not collect information via cookies for analytics purposes. However, we reserve the right to change this practice in the future and to collect your IP address, referral source, landing page, and similar details via Google Analytics for the purpose of analyzing traffic to this website. Please refer to <Link to="https://policies.google.com/technologies/partner-sites">Google's privacy policy</Link> for partner sites.</p>
                <h3>Embedded content from other websites</h3>
                <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                <h3>Who your data is shared with</h3>
                <p>We will never share personal information collected by this website and its partners with any other third party without your permission. We cannot control what our partners do with your information, though we have carefully selected partners who we believe will exercise care for your privacy.</p>
                <h3>What rights you have over your data</h3>
                <p>You may request to receive a copy of any personal data we possess about you. You may also request that we erase that data, and we will make a sincere effort to do so. This does not include any data we are obliged to keep for administrative, legal, accounting, or security purposes.</p>
                <h3>How your data is protected</h3>
                <p>This site uses a secure SSL layer on a secure third-party server owned by Github. All of our data collection and storage partners use secure encryption.</p>
                <h3>What data breach procedures we have in place</h3>
                <p>Should we learn of a data breach that affects your data, we will immediately contact you by email (assuming you have provided it) to notify you of the breach.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Privacy;