import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function Info({ color, ...props }: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#clip0_2437_409)">
        <Path
          d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16S8.64 29.333 16 29.333 29.333 23.36 29.333 16 23.36 2.667 16 2.667zm1.333 22.666h-2.666v-2.666h2.666v2.666zM20.093 15l-1.2 1.227c-.666.68-1.146 1.293-1.386 2.253a6.12 6.12 0 00-.174 1.52h-2.666v-.667a5.33 5.33 0 011.56-3.773l1.653-1.68c.613-.587.907-1.467.733-2.4a2.654 2.654 0 00-1.853-2.04 2.688 2.688 0 00-3.293 1.693c-.16.494-.574.867-1.094.867h-.4c-.773 0-1.306-.747-1.093-1.493a5.344 5.344 0 014.307-3.774c2.026-.32 3.96.734 5.16 2.4 1.573 2.174 1.106 4.507-.254 5.867z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2437_409">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Info;
