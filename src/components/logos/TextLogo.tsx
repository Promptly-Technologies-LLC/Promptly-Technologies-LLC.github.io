import React from 'react';
import logosJSON from '../../customizations/logos.json';
import Logos from '../../types/logos';

interface TextLogoProps {
  className?: string;
}

const logos: Logos = logosJSON;

const TextLogo: React.FC<TextLogoProps> = ({className = ''}) => (
    <img
      src={logos.textLogo.src}
      alt={logos.textLogo.alt}
      className={className}
    />
  );
  
export default TextLogo;
  