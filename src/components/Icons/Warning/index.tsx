import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function Warning({ color, ...props }: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5.96 28h20.08c2.053 0 3.333-2.227 2.307-4L18.307 6.653c-1.027-1.773-3.587-1.773-4.614 0L3.653 24c-1.026 1.773.254 4 2.307 4zM16 18.667c-.733 0-1.333-.6-1.333-1.334v-2.666c0-.734.6-1.334 1.333-1.334s1.333.6 1.333 1.334v2.666c0 .734-.6 1.334-1.333 1.334zM17.333 24h-2.666v-2.667h2.666V24z"
        fill={color}
      />
    </Svg>
  );
}

export default Warning;
