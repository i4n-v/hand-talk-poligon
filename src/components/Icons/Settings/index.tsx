import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath, SvgProps } from 'react-native-svg';

function Settings({ color, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#clip0_543_406)">
        <Path
          d="M26 16c0-.307-.013-.6-.04-.907l2.48-1.88c.533-.4.68-1.146.347-1.733l-2.494-4.307a1.316 1.316 0 00-1.666-.56L21.76 7.827a10.112 10.112 0 00-1.56-.907l-.387-3.08a1.337 1.337 0 00-1.32-1.173H13.52a1.34 1.34 0 00-1.333 1.173L11.8 6.92c-.547.253-1.067.56-1.56.907L7.373 6.613a1.316 1.316 0 00-1.666.56l-2.494 4.32a1.344 1.344 0 00.347 1.734l2.48 1.88a10.314 10.314 0 000 1.8l-2.48 1.88c-.533.4-.68 1.146-.347 1.733l2.494 4.307a1.316 1.316 0 001.666.56l2.867-1.214c.493.347 1.013.654 1.56.907l.387 3.08c.08.667.653 1.173 1.32 1.173h4.973c.667 0 1.24-.506 1.32-1.173l.387-3.08c.546-.253 1.066-.56 1.56-.907l2.866 1.214a1.316 1.316 0 001.667-.56l2.493-4.307a1.344 1.344 0 00-.346-1.733l-2.48-1.88c.04-.307.053-.6.053-.907zm-9.947 4.667A4.672 4.672 0 0111.387 16a4.672 4.672 0 014.666-4.667A4.672 4.672 0 0120.72 16a4.672 4.672 0 01-4.667 4.667z"
          fill="url(#paint0_linear_543_406)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_543_406"
          x1={16}
          y1={2.66669}
          x2={16}
          y2={29.3334}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color ?? '#9B51E0'} />
          <Stop offset={1} stopColor={color ?? '#720ECF'} />
        </LinearGradient>
        <ClipPath id="clip0_543_406">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Settings;
