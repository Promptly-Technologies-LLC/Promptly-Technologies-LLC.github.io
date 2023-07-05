import logosJSON from '@/customizations/logos.json';
import Logos from '@/types/logos';

const logos: Logos = logosJSON;

const TextLogo = ({ className = '' }) => (
    <img
      src={logos.textLogo.src}
      alt={logos.textLogo.alt}
      className={className}
    />
  );
  
  export default TextLogo;
  