import React from 'react';
import { LabelRequirement, LabelText } from './styles';
import { ILabelProps } from './types';

export default function Label({ children, required, disabled, error, style }: ILabelProps) {
  if (!children) return null;

  return (
    <LabelText
      accessible
      accessibilityLabel={children}
      nativeID={children}
      disabled={disabled}
      aria-disabled={disabled}
      error={error}
      style={style}
    >
      {children}
      {required && <LabelRequirement>{' *'}</LabelRequirement>}
    </LabelText>
  );
}
