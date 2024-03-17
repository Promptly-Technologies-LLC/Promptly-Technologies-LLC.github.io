import React from 'react';
import PanelProps from '../types/panels';

const ThreePanelRow: React.FC<PanelProps> = ({ panels, widthClass='w-auto', heightClass='w-auto' }) => {
  return (
    <div className={`${widthClass} ${heightClass} md:max-h-screen mx-auto grid gap-4 px-4 pt-4 grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1`}>
        <div className="w-full">
          {panels[0]}
        </div>
        <div className="w-full">
          {panels[1]}
        </div>
        <div className="w-full md:row-span-2 md:col-span-2 lg:col-span-1 lg:row-span-1">
          {panels[2]}
        </div>
    </div>
  );
};

export default ThreePanelRow;
