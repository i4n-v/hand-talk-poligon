import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';

function CloseEye() {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_2429_10705)">
        <Path
          d="M16 8.667a6.67 6.67 0 016.667 6.666c0 .68-.134 1.334-.32 1.947l4.08 4.08a15.736 15.736 0 004.24-6.04c-2.307-5.84-8-9.987-14.667-9.987a15.8 15.8 0 00-4.853.76l2.893 2.894c.627-.187 1.28-.32 1.96-.32zM3.613 4.213c-.52.52-.52 1.36 0 1.88L6.24 8.72a15.856 15.856 0 00-4.907 6.613c2.307 5.854 8 10 14.667 10 2.027 0 3.96-.4 5.747-1.093l3.626 3.627c.52.52 1.36.52 1.88 0 .52-.52.52-1.36 0-1.88L5.507 4.213a1.344 1.344 0 00-1.894 0zM16 22a6.67 6.67 0 01-6.667-6.667c0-1.026.24-2 .654-2.853l2.093 2.093c-.04.24-.08.494-.08.76 0 2.214 1.787 4 4 4 .267 0 .507-.04.76-.093l2.093 2.093A6.417 6.417 0 0116 22zm3.96-7.107a3.959 3.959 0 00-3.52-3.52l3.52 3.52z"
          fill="url(#paint0_linear_2429_10705)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_2429_10705"
          x1={15.9999}
          y1={3.8233}
          x2={15.9999}
          y2={28.2566}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={'#9B51E0'} />
          <Stop offset={1} stopColor="#720ECF" />
        </LinearGradient>
        <ClipPath id="clip0_2429_10705">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CloseEye;
