import React, { useState, useEffect } from 'react';
import Logo from '../../components/logos/Logo';
import TextLogo from '../../components/logos/TextLogo';
import './Navbar.css';

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
    <nav className={navbarClasses.join(" ")}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
        <div className="navbarcontainer">
          <div className="navbarleftside">
            <a href="/" className="nav-link h-full" aria-label="Logo">
              <Logo className="h-full" />
            </a>
            <a href="/" className="nav-link h-3/4" aria-label="Logo">
              <TextLogo className="h-full" />
            </a>  
          </div>
          <div className="navbarrightside">
                <a href="/" className="nav-link">
                  Home
                </a>
                <a href="/#/AboutUs" className="nav-link">
                  About
                </a>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;