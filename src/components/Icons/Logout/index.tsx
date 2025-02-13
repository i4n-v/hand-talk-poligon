import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';

function Logout() {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_543_407)">
        <Path
          d="M6.667 6.667h8c.733 0 1.333-.6 1.333-1.334C16 4.6 15.4 4 14.667 4h-8A2.675 2.675 0 004 6.667v18.666C4 26.8 5.2 28 6.667 28h8C15.4 28 16 27.4 16 26.667c0-.734-.6-1.334-1.333-1.334h-8V6.667z"
          fill="url(#paint0_linear_543_407)"
        />
        <Path
          d="M27.533 15.533l-3.72-3.72c-.426-.426-1.146-.133-1.146.467v2.387h-9.334c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333h9.334v2.387c0 .6.72.893 1.133.467l3.72-3.72a.656.656 0 00.013-.934z"
          fill="url(#paint1_linear_543_407)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_543_407"
          x1={10}
          y1={4}
          x2={10}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF" />
          <Stop offset={1} stopColor="#FFF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_543_407"
          x1={19.8608}
          y1={11.6113}
          x2={19.8608}
          y2={20.3887}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF" />
          <Stop offset={1} stopColor="#FFF" />
        </LinearGradient>
        <ClipPath id="clip0_543_407">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Logout;
