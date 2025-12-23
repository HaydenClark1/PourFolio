import React from 'react';
import { Canvas, TextPath, useFont, Skia } from '@shopify/react-native-skia';

interface CurvedTextProps {
    text: string;
    fontSize?: number;
    spacing?: number; // spacing between letters
    color?: string;
    radius?: number;
}

export default function CurvedText({
    text,
    fontSize = 32,
    spacing = 0,
    color = 'white',
    radius = 100,
    }: CurvedTextProps) {
    const font = useFont(
        require('../../assets/fonts/SpaceMono-Regular.ttf'),
        fontSize
    );

    if (!font) return null;

    // Add spacing by inserting spaces between characters
    const spacedText =
        spacing > 0 ? text.split('').join(' '.repeat(spacing)) : text;
    
    const padding = fontSize * 1.5;

    // Create top semi-circle path
    const path = Skia.Path.Make();
     path.addArc(
    {
      x: padding,
      y: padding,
      width: radius * 2,
      height: radius * 2,
    },
    181,   // start at right
    360   // sweep UPWARD (top arc)
  );

    return (
        <Canvas
        style={{
            width: radius * 2 + padding * 2,
            height: radius + padding * 2,
        }}
        >
        <TextPath
            path={path}
            text={spacedText}
            font={font}
            color={color}
        />
        </Canvas>
    );
}
