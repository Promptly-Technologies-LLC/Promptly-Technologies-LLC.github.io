import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './SimpleNav.css';

const FullNav: React.FC = () => {
    return (
        <div className="mx-auto space-x-6">
            <div className="simplenavlinks">
                <HashLink to="/#" className="simplenavlink">Home</HashLink>
                <HashLink to="/#contact" className="simplenavlink">
                    Contact
                </HashLink>
                <HashLink to="/#story" className="simplenavlink">
                    Story
                </HashLink>
                <HashLink to="/#events" className="simplenavlink">
                    Events
                </HashLink>
                <HashLink to="/#credits" className="simplenavlink">
                    Credits
                </HashLink>
                <HashLink to="/Store" className="simplenavlink">
                    Store
                </HashLink>
                <HashLink to="/Legal" className="simplenavlink">
                    Privacy Policy
                </HashLink>
            </div>
        </div>
    );
}

export default FullNav;