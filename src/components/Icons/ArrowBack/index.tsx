import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath, SvgProps } from 'react-native-svg';

function ArrowBack(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_1696_9935)">
        <Path
          d="M16.62 2.99a1.25 1.25 0 00-1.77 0L6.54 11.3a.996.996 0 000 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
          fill="url(#paint0_linear_1696_9935)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1696_9935"
          x1={11.6182}
          y1={2.6225}
          x2={11.6182}
          y2={21.3875}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF" />
          <Stop offset={1} stopColor="#FFF" />
        </LinearGradient>
        <ClipPath id="clip0_1696_9935">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowBack;
