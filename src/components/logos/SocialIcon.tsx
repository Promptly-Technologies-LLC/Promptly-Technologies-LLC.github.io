import React from 'react';
import iconsJSON from '../../customizations/socialicons.json';
import SocialIcons from '../../types/socialicons';
import { Link } from 'react-router-dom';

interface SocialIconProps {
    iconName?: string;
    url?: string;
    className?: string;
}


const getIconPath = (iconName: string = '') => {
    const icons: SocialIcons = iconsJSON;
  
    if (!icons.hasOwnProperty(iconName)) {
      throw new Error(`${iconName} is not a valid key. Valid keys are: ${Object.keys(icons).join(", ")}`);
    }
    
    return icons[iconName];
  }


const SocialIcon: React.FC<SocialIconProps> = ({ iconName = '', url = '', className = '' }) => {
    return (
        <Link to={url} className={className} target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={getIconPath(iconName)} fillRule="evenodd" clipRule="evenodd" />
            </svg>
            <span className="sr-only">{iconName}</span>
        </Link>
    )
}

export default SocialIcon;