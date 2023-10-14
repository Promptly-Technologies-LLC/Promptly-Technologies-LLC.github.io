import React from 'react';
import './ComicPanel.css';
import ComicNarration from './ComicNarration';

interface ComicPanelProps {
  text?: string;
  backgroundImage: string;
  altText?: string;
  verticalPosition?: 'top' | 'center' | 'bottom';
  horizontalPosition?: 'left' | 'center' | 'right';
}

const ComicPanel: React.FC<ComicPanelProps> = ({ 
  text,
  backgroundImage,
  altText = 'Comic Background',
  verticalPosition = 'center', 
  horizontalPosition = 'center'
}) => {
  return (
    <div className="comic-panel-container">
      <img 
        className={`comic-panel-image`} 
        src={backgroundImage} 
        alt={altText} 
      />
      {text && <span className={`narration-container v-${verticalPosition} h-${horizontalPosition}`}><ComicNarration text={text} /></span>}
    </div>
  );
}

export default ComicPanel;
