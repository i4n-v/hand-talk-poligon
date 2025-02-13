import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';
import { IHomeProps } from './types';

function Home({ color }: IHomeProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_1674_8137)">
        <Path
          d="M13.333 25.333v-6.666h5.334v6.666c0 .734.6 1.334 1.333 1.334h4c.733 0 1.333-.6 1.333-1.334V16H27.6c.613 0 .907-.76.44-1.16L16.893 4.8a1.344 1.344 0 00-1.786 0L3.96 14.84c-.453.4-.173 1.16.44 1.16h2.267v9.333c0 .734.6 1.334 1.333 1.334h4c.733 0 1.333-.6 1.333-1.334z"
          fill="url(#paint0_linear_1674_8137)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1674_8137"
          x1={16.003}
          y1={4.46002}
          x2={16.003}
          y2={26.6667}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color ?? '#9B51E0'} />
          <Stop offset={1} stopColor={color ?? '#720ECF'} />
        </LinearGradient>
        <ClipPath id="clip0_1674_8137">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Home;
