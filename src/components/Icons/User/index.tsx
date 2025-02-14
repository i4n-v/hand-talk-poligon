import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath, SvgProps } from 'react-native-svg';

function User(props: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#clip0_355_601)">
        <Path
          d="M16 16a5.332 5.332 0 005.333-5.333A5.332 5.332 0 0016 5.333a5.332 5.332 0 00-5.333 5.334A5.332 5.332 0 0016 16zm0 2.667c-3.56 0-10.667 1.786-10.667 5.333v1.333c0 .734.6 1.334 1.334 1.334h18.666c.734 0 1.334-.6 1.334-1.334V24c0-3.547-7.107-5.333-10.667-5.333z"
          fill="url(#paint0_linear_355_601)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_355_601"
          x1={15.9999}
          y1={5.33331}
          x2={15.9999}
          y2={26.6666}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9B51E0" />
          <Stop offset={1} stopColor="#720ECF" />
        </LinearGradient>
        <ClipPath id="clip0_355_601">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default User;
