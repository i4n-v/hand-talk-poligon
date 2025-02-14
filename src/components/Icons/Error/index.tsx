import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function Error({ color, ...props }: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#clip0_2437_414)">
        <Path
          d="M20.427 4h-8.854c-.346 0-.693.147-.933.387L4.387 10.64c-.24.24-.387.587-.387.933v8.84c0 .36.147.694.387.947l6.24 6.24c.253.253.6.4.946.4h8.84c.36 0 .694-.147.947-.387l6.24-6.24a1.32 1.32 0 00.387-.946v-8.854c0-.36-.147-.693-.387-.946l-6.24-6.24A1.345 1.345 0 0020.427 4zM16 23.067a1.73 1.73 0 01-1.733-1.734c0-.96.773-1.733 1.733-1.733.96 0 1.733.773 1.733 1.733A1.73 1.73 0 0116 23.067zm0-5.734c-.733 0-1.333-.6-1.333-1.333v-5.333c0-.734.6-1.334 1.333-1.334s1.333.6 1.333 1.334V16c0 .733-.6 1.333-1.333 1.333z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2437_414">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Error;
