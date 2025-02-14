import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

function ArrowDown(props: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.345 19.763a1.5 1.5 0 01-1.664.002l-9.009-5.987a1.5 1.5 0 011.66-2.498l8.177 5.433 8.16-5.457a1.5 1.5 0 011.667 2.493l-8.99 6.014z"
        fill="url(#paint0_linear_2435_10706)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2435_10706"
          x1={15.5135}
          y1={20.0158}
          x2={15.5001}
          y2={11.0156}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9B51E0" />
          <Stop offset={1} stopColor="#720ECF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ArrowDown;
