import React from 'react';

interface ComicTitleProps {
    text: string;
    fontSize: number;
    lineSplit?: boolean;
    width: number;
}

const ComicTitle: React.FC<ComicTitleProps> = ({ text, fontSize, lineSplit, width }) => {
    const words = text.split(' ');
    const viewBoxWidth = width;
    const numLines = lineSplit ? words.length : 1;
    const calculatedViewBoxHeight = (fontSize * numLines) + fontSize/1.85;
    
    const generateJitter = (length: number): string => {
        const jitters = ['0', '-10', '8', '-8'];
        let result = '';
    
        for (let i = 0; i < length; i++) {
            result += jitters[i % jitters.length] + ',';
        }
    
        return result.slice(0, -1);
    };

    const getJitterOffset = (fontSize: number, word: string) => {
        const baseOffset = 10;
        const lengthFactor = word.length * 0.5;
        const fontFactor = fontSize * 0.05;
    
        return baseOffset + lengthFactor + fontFactor;
    };

    const maxJitterOffset = getJitterOffset(fontSize, words[0]);
    const adjustedViewBoxHeight = calculatedViewBoxHeight + maxJitterOffset;

    return (
        <div className="w-full">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={width}
                viewBox={`0 0 ${viewBoxWidth} ${calculatedViewBoxHeight}`}
            >
                <defs>
                    {/* Roughened Text filter */}
                    <filter id="breakup">
                        <feTurbulence result="TURBULENCE" baseFrequency=".7" numOctaves="1" seed="1" />
                        <feDisplacementMap in="SourceGraphic" in2="TURBULENCE" scale="1.7" />
                    </filter>
                    
                    {/* Joined Outlined Letters filter */}
                    <filter id="outline">
                        <feMorphology operator="dilate" in="SourceAlpha" radius="3" />
                        <feComposite in="SourceGraphic" />
                    </filter>

                    {/* Ben-Day Dots pattern */}
                    <pattern id="hexapolka" patternUnits="userSpaceOnUse" width="100" height="86" patternTransform="scale(.07)">
                        <rect width="100%" height="86" fill="#f0f" />
                        <circle cx="0" cy="44" r="16" id="dot" fill="red" />
                        <use xlinkHref="#dot" transform="translate(48,0)" />
                        <use xlinkHref="#dot" transform="translate(25,-44)" />
                        <use xlinkHref="#dot" transform="translate(75,-44)" />
                        <use xlinkHref="#dot" transform="translate(100,0)" />
                        <use xlinkHref="#dot" transform="translate(75,42)" />
                        <use xlinkHref="#dot" transform="translate(25,42)" />
                    </pattern>

                    {/* Drop Shadow filter */}
                    <filter id="shadow">
                        <feConvolveMatrix order="4,4" 
                           kernelMatrix="
                           1 0 0 0
                           0 1 0 0
                           0 0 1 0 
                           0 0 0 1" in="SourceAlpha" result="bevel" />
                        <feOffset dx="1" dy ="1" in="bevel" result="offset" />
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
                        y={(fontSize * (index + 1)) + maxJitterOffset}
                        dy={generateJitter(word.length)}
                        textAnchor="middle"
                        fontSize={fontSize}
                        fontFamily="Bangers, cursive">
                        {word}
                    </text>
                ))
            ) : (
                <text
                    fill="url(#hexapolka)"
                    filter="url(#outline) url(#shadow)"
                    x={viewBoxWidth / 2}
                    y={(adjustedViewBoxHeight / 2) + (fontSize / 2.5) + maxJitterOffset}
                    dy={generateJitter(text.length)}
                    textAnchor="middle"
                    fontSize={fontSize}
                    fontFamily="Bangers, cursive">
                    {text}
                </text>
            )}

            </svg>
        </div>
    );
}

export default ComicTitle;