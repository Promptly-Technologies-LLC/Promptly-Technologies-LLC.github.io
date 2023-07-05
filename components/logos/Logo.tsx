import logosJSON from '@/customizations/logos.json';
import Logos from '@/types/logos';

const logos: Logos = logosJSON;

const Logo = ({ className = '' }) => (  
  <img
    src={logos.graphicalLogo.src}
    alt={logos.graphicalLogo.alt}
    className={className}
  />
);

export default Logo;
