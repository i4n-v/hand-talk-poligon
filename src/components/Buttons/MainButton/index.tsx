import React from 'react';
import { ButtonContainer, ButtonLabel } from './styles';
import { IMainButtonProps } from './types';
import { SpinnerLoading } from '@/components/Loadings';

function MainButton({
  children,
  loading,
  loadingText = 'ENVIANDO',
  disabled,
  onPress,
  colorScheme,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  variant,
  ...props
}: IMainButtonProps) {
  return (
    <ButtonContainer
      disabled={loading || disabled}
      accessibilityState={{
        disabled: loading || disabled,
      }}
      onPress={onPress}
      activeOpacity={0.7}
      colorScheme={colorScheme}
      variant={variant}
      accessibilityLabel={children}
      accessibilityRole="button"
      style={style}
      {...props}
    >
      {!loading && leftIcon}
      {(loading || children) && (
        <ButtonLabel variant={variant} colorScheme={colorScheme} style={textStyle}>
          {loading ? loadingText : children}
        </ButtonLabel>
      )}
      {loading ? <SpinnerLoading /> : rightIcon}
    </ButtonContainer>
  );
}

export default MainButton;
