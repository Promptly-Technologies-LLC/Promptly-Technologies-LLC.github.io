import React, { useState, useEffect } from 'react';
import Logo from '../../components/logos/Logo';
import TextLogo from '../../components/logos/TextLogo';
import './Navbar.css';
import { NavHashLink } from 'react-router-hash-link';

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
          <NavHashLink to="/" className="nav-link h-full" aria-label="Logo">
            <Logo className="h-full" />
          </NavHashLink>
          <NavHashLink to="/" className="nav-link h-3/4" aria-label="Logo">
            <TextLogo className="h-full" />
          </NavHashLink>  
        </div>
        <div className="navbarrightside">
              <NavHashLink to="/" className="nav-link focusable">
                Home
              </NavHashLink>
              <NavHashLink to="/AboutUs" className="nav-link focusable">
                About
              </NavHashLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;