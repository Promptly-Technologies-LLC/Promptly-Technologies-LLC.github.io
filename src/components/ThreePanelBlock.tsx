import PanelProps from '../types/panels';

interface ThreePanelBlockProps extends PanelProps {
  orientation?: 'left' | 'right';
}

const ThreePanelBlock: React.FC<ThreePanelBlockProps> = ({ panels, widthClass = 'w-auto', heightClass = 'h-auto', orientation = 'right' }) => {
  return (
    <div className={`${widthClass} ${heightClass} md:max-h-screen mx-auto grid gap-4 px-4 pt-4 grid-cols-1 md:grid-cols-4 md:grid-rows-2`}>
      {orientation === 'left' ? (
        <>
          <div className="w-full md:col-start-1 md:col-span-2 md:row-span-2">
            {panels[0]}
          </div>
          <div className="w-full md:col-span-2 md:col-start-3">
            {panels[1]}
          </div>
          <div className="w-full md:col-span-2 md:col-start-3">
            {panels[2]}
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:col-span-2 md:row-span-1">
            {panels[0]}
          </div>
          <div className="w-full md:col-span-2 md:row-start-2">
            {panels[1]}
          </div>
          <div className="w-full md:col-start-3 md:col-span-2 md:row-span-2">
            {panels[2]}
          </div>
        </>
      )}
    </div>
  );
};

export default ThreePanelBlock;
