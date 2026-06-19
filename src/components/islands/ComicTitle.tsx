import { useEffect, useState } from 'react';

interface ComicTitleSvgProps {
  text: string;
  fontSize: number;
  lineSplit?: boolean;
  width: number;
}

function ComicTitleSvg({ text, fontSize, lineSplit, width }: ComicTitleSvgProps) {
  const words = text.split(' ');
  const viewBoxWidth = width;
  const numLines = lineSplit ? words.length : 1;
  const calculatedViewBoxHeight = fontSize * numLines + fontSize / 1.85;

  const generateJitter = (length: number): string => {
    const jitters = ['0', '-10', '8', '-8'];
    let result = '';

    for (let i = 0; i < length; i++) {
      result += `${jitters[i % jitters.length]},`;
    }

    return result.slice(0, -1);
  };

  const getJitterOffset = (size: number, word: string) => {
    return 10 + word.length * 0.5 + size * 0.05;
  };

  const maxJitterOffset = getJitterOffset(fontSize, words[0]);
  const adjustedViewBoxHeight = calculatedViewBoxHeight + maxJitterOffset;

  return (
    <div className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        viewBox={`0 0 ${viewBoxWidth} ${calculatedViewBoxHeight}`}
        aria-hidden="true"
        style={{ display: 'block', marginInline: 'auto', maxWidth: '100%' }}
      >
        <defs>
          <filter id="outline">
            <feMorphology operator="dilate" in="SourceAlpha" radius="3" />
            <feComposite in="SourceGraphic" />
          </filter>
          <pattern
            id="hexapolka"
            patternUnits="userSpaceOnUse"
            width="100"
            height="86"
            patternTransform="scale(.07)"
          >
            <rect width="100%" height="86" fill="#f0f" />
            <circle cx="0" cy="44" r="16" id="dot" fill="red" />
            <use href="#dot" transform="translate(48,0)" />
            <use href="#dot" transform="translate(25,-44)" />
            <use href="#dot" transform="translate(75,-44)" />
            <use href="#dot" transform="translate(100,0)" />
            <use href="#dot" transform="translate(75,42)" />
            <use href="#dot" transform="translate(25,42)" />
          </pattern>
          <filter id="shadow">
            <feConvolveMatrix
              order="4,4"
              kernelMatrix="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"
              in="SourceAlpha"
              result="bevel"
            />
            <feOffset dx="1" dy="1" in="bevel" result="offset" />
            <feMerge>
              <feMergeNode in="offset" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lineSplit ? (
          words.map((word, index) => (
            <text
              key={index}
              fill="url(#hexapolka)"
              filter="url(#outline) url(#shadow)"
              x={viewBoxWidth / 2}
              y={fontSize * (index + 1) + maxJitterOffset}
              dy={generateJitter(word.length)}
              textAnchor="middle"
              fontSize={fontSize}
              fontFamily="Bangers, cursive"
            >
              {word}
            </text>
          ))
        ) : (
          <text
            fill="url(#hexapolka)"
            filter="url(#outline) url(#shadow)"
            x={viewBoxWidth / 2}
            y={adjustedViewBoxHeight / 2 + fontSize / 2.5 + maxJitterOffset}
            dy={generateJitter(text.length)}
            textAnchor="middle"
            fontSize={fontSize}
            fontFamily="Bangers, cursive"
          >
            {text}
          </text>
        )}
      </svg>
    </div>
  );
}

function useWindowWidth(): number {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return width;
}

interface Props {
  text?: string;
}

export default function ComicTitle({ text = 'PROMPTLY TECHNOLOGIES' }: Props) {
  const windowWidth = useWindowWidth();
  const isLargeScreen = windowWidth >= 768;

  return (
    <ComicTitleSvg
      text={text}
      fontSize={isLargeScreen ? 90 : 50}
      lineSplit={!isLargeScreen}
      width={windowWidth}
    />
  );
}
