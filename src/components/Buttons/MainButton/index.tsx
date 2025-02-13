import React, { useMemo } from 'react';
import { useTheme } from 'styled-components/native';
import { ButtonContainer, ButtonLabel } from './styles';
import { IMainButtonProps } from './types';

function MainButton({
  children,
  loading,
  loadingText = 'enviando...',
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
  const theme = useTheme();

  return (
    <ButtonContainer
      disabled={loading || disabled}
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
      {!loading && rightIcon}
    </ButtonContainer>
  );
}

export default MainButton;
