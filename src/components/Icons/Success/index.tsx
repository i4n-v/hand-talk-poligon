import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function Success({ color, ...props }: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#clip0_2437_417)">
        <Path
          d="M28.8 16l-2.832-3.248.4-4.304-4.208-.96-2.192-3.712L16 5.488l-3.952-1.712L9.84 7.488l-4.192.96.4 4.304L3.2 16l2.832 3.248-.4 4.304 4.208.96 2.192 3.712L16 26.496l3.952 1.712 2.192-3.712 4.208-.96-.4-4.304L28.8 16zm-7.712-2.448l-6.784 6.784a.792.792 0 01-1.136 0l-2.256-2.256a.792.792 0 010-1.136.792.792 0 011.136 0l1.696 1.696 6.224-6.224a.792.792 0 011.136 0c.32.32.304.832-.016 1.136z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2437_417">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Success;
