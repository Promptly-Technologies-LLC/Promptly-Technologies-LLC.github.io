import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Nav.css';

const Nav: React.FC = () => {
    return (
            <div className="space-x-6 inline-flex flex-wrap justify-center">
                <HashLink to="#story" className="nav-link font-bangers">
                    Story
                </HashLink>
                <HashLink to="#book" className="nav-link font-bangers">
                    Bookings
                </HashLink>
                <HashLink to="#credits" className="nav-link font-bangers">
                    Credits
                </HashLink>
            </div>
    );
};

export default Nav;
