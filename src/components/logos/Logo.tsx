import React from 'react';
import logosJSON from '../../customizations/logos.json';
import Logos from '../../types/logos';

interface LogoProps {
  className?: string;
}

const logos: Logos = logosJSON;

const Logo: React.FC<LogoProps> = ({ className = '' }) => (  
  <img
    src={logos.graphicalLogo.src}
    alt={logos.graphicalLogo.alt}
    className={className}
  />
);

export default Logo;
