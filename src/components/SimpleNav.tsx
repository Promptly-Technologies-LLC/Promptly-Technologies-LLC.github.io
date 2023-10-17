import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './SimpleNav.css';

const FullNav: React.FC = () => {
    return (
        <div className="mx-auto space-x-6">
            <div className="simplenavlinks">
                <HashLink to="/#" className="simplenavlink">Home</HashLink>
                <HashLink to="/Store" className="simplenavlink">Store</HashLink>
                <Link to="https://knowledgeworkersguide.substack.com/" className="simplenavlink">Newsletter</Link>
                <HashLink to="/Legal" className="simplenavlink">Privacy Policy</HashLink>
            </div>
        </div>
    );
}

export default FullNav;