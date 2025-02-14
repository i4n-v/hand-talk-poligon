import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

function ArrowUp(props: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.668 12.252a1.5 1.5 0 011.664 0l9 6a1.5 1.5 0 01-1.664 2.496L15.5 15.303l-8.168 5.445a1.5 1.5 0 01-1.664-2.496l9-6z"
        fill="url(#paint0_linear_2435_10706)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2435_10706"
          x1={15.5002}
          y1={12}
          x2={15.5002}
          y2={21.0002}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9B51E0" />
          <Stop offset={1} stopColor="#720ECF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ArrowUp;
