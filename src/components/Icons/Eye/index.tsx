import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath, SvgProps } from 'react-native-svg';

function Eye(props: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#clip0_355_600)">
        <Path
          d="M16 5.333c-6.667 0-12.36 4.147-14.667 10 2.307 5.854 8 10 14.667 10s12.36-4.146 14.667-10c-2.307-5.853-8-10-14.667-10zM16 22a6.67 6.67 0 01-6.667-6.667A6.67 6.67 0 0116 8.667a6.67 6.67 0 016.667 6.666A6.67 6.67 0 0116 22zm0-10.667c-2.213 0-4 1.787-4 4 0 2.214 1.787 4 4 4s4-1.786 4-4c0-2.213-1.787-4-4-4z"
          fill="url(#paint0_linear_355_600)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_355_600"
          x1={15.9999}
          y1={5.33331}
          x2={15.9999}
          y2={25.3333}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9B51E0" />
          <Stop offset={1} stopColor="#720ECF" />
        </LinearGradient>
        <ClipPath id="clip0_355_600">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Eye;
