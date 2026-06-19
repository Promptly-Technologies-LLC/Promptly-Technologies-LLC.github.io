import React from 'react';
import './ComicNarration.css';

interface ComicNarrationProps {
  text: string;
}

const ComicNarration: React.FC<ComicNarrationProps> = ({ text }) => {
  return (
    <div className="comic-narration-container">
      <div className="comic-narration-border"></div>
      <span className="comic-narration-text" dangerouslySetInnerHTML={{ __html: text }}></span>
    </div>
  );
}

export default ComicNarration;
