import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SvgComponent({ color, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#clip0_602_1597)">
        <Path
          d="M24.4 7.613c-.52-.52-1.36-.52-1.88 0L16 14.12 9.48 7.6c-.52-.52-1.36-.52-1.88 0-.52.52-.52 1.36 0 1.88L14.12 16 7.6 22.52c-.52.52-.52 1.36 0 1.88.52.52 1.36.52 1.88 0L16 17.88l6.52 6.52c.52.52 1.36.52 1.88 0 .52-.52.52-1.36 0-1.88L17.88 16l6.52-6.52a1.336 1.336 0 000-1.867z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_602_1597">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
