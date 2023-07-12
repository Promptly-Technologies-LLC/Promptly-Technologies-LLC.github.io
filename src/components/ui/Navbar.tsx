import React, { useState, useEffect } from 'react';
import Logo from '../../components/logos/Logo';
import TextLogo from '../../components/logos/TextLogo';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

const Navbar: React.FC = () => {
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1 ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses=['navbar'];
  if (isScrolled){
    navbarClasses.push('scrolled');
  }

  return (
    <nav id="nav" className={navbarClasses.join(" ")}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="navbarcontainer">
        <div className="navbarleftside">
          <HashLink to="/#" className="nav-link h-full">
            <Logo className="h-full" />
          </HashLink>
          <HashLink to="/#" className="nav-link h-3/4">
            <TextLogo className="h-full" />
          </HashLink>  
        </div>
        <div className="navbarrightside">
              <HashLink to="/#" className="nav-link focusable">
                Home
              </HashLink>
              <HashLink to="/Blog#" className="nav-link focusable">
                Blog
              </HashLink>
              <HashLink to="/AboutUs#" className="nav-link focusable">
                About
              </HashLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;