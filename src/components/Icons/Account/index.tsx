import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath, SvgProps } from 'react-native-svg';

function Account(props: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#clip0_543_408)">
        <Path
          d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16S8.64 29.333 16 29.333 29.333 23.36 29.333 16 23.36 2.667 16 2.667zM16 8a4.672 4.672 0 014.667 4.667A4.672 4.672 0 0116 17.333a4.672 4.672 0 01-4.667-4.666A4.672 4.672 0 0116 8zm0 18.667c-2.707 0-5.907-1.094-8.187-3.84A13.262 13.262 0 0116 20c3.093 0 5.933 1.067 8.187 2.827-2.28 2.746-5.48 3.84-8.187 3.84z"
          fill="url(#paint0_linear_543_408)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_543_408"
          x1={16.0001}
          y1={2.66669}
          x2={16.0001}
          y2={29.3334}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9B51E0" />
          <Stop offset={1} stopColor="#720ECF" />
        </LinearGradient>
        <ClipPath id="clip0_543_408">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Account;
