import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Nav.css';

const Nav: React.FC = () => {
    return (
            <div className="space-x-6 inline-flex flex-wrap justify-center font-bangers">
                <HashLink to="#contact" className="nav-link">
                    Contact
                </HashLink>
                <HashLink to="#story" className="nav-link">
                    Story
                </HashLink>
                <HashLink to="#events" className="nav-link">
                    Events
                </HashLink>
                <HashLink to="#credits" className="nav-link">
                    Credits
                </HashLink>
                <HashLink to="/Store" className="nav-link">
                    Store
                </HashLink>
            </div>
    );
};

export default Nav;
