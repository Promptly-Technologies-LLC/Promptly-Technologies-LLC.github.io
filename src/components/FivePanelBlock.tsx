import React from 'react';
import PanelProps from '../types/panels';

const FivePanelBlock: React.FC<PanelProps> = ({ panels, widthClass='w-auto', heightClass='h-auto' }) => {
  return (
    <div className={`${widthClass} ${heightClass} mx-auto xl:max-h-screen grid gap-4 px-4 pt-4 grid-cols-1 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2`}>
      <div className="w-full md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-1">
        {panels[0]}
      </div>
      <div className="w-full md:col-span-1 md:row-span-1 md:row-start-1 md:col-start-2 xl:col-start-1 xl:row-start-2">
        {panels[1]}
      </div>
      <div className="w-full md:col-span-1 md:row-span-1 md:row-start-2 md:col-start-1 xl:col-start-2 xl:row-start-1">
        {panels[2]}
      </div>
      <div className="w-full md:col-span-1 md:row-span-1 xl:col-start-2 xl:row-start-2 md:row-start-3 md:col-start-1">
        {panels[3]}
      </div>
      <div className="w-full md:col-span-1 md:row-span-2">
        {panels[4]}
      </div>
    </div>
  );
};

export default FivePanelBlock;
