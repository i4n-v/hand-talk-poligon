import React from 'react';
import { Decoration, TitleContainer, TitleText } from './styles';
import { ITitleProps } from './types';

export default function Title({ children, style }: ITitleProps) {
  return (
    <TitleContainer>
      <Decoration />
      <TitleText style={style}>{children}</TitleText>
    </TitleContainer>
  );
}
