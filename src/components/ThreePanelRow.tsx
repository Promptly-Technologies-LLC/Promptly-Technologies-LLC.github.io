import React from 'react';
import PanelProps from '../types/panels';

const ThreePanelRow: React.FC<PanelProps> = ({ panels, widthClass='w-auto', heightClass='w-auto' }) => {
  return (
    <div className={`${widthClass} ${heightClass} md:max-h-screen mx-auto grid gap-4 px-4 pt-4 grid-cols-1 md:grid-cols-3`}>
      {panels.map((panel, index) => (
        <div key={index} className="w-full">
          {panel}
        </div>
      ))}
    </div>
  );
};

export default ThreePanelRow;
