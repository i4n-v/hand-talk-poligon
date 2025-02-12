import styled from 'styled-components/native';
import { ITextFieldProps } from './types';
import { TouchableOpacity } from 'react-native';

const InputContainer = styled.View`
  width: 100%;
  row-gap: 6px;
  position: relative;
`;

interface ITextInputProps
  extends Pick<ITextFieldProps, 'leftIcon' | 'rightIcon' | 'password' | 'textArea'> {
  focused: boolean;
  error: boolean;
}

const TextInput = styled.TextInput<ITextInputProps>`
  height: ${({ textArea, numberOfLines }) => {
    if (!textArea) return '44px';

    const initialHeight = 20;
    const height = numberOfLines ? numberOfLines * initialHeight : 10 * initialHeight;

    return height + 'px';
  }};
  padding: ${({ textArea }) => (textArea ? '12px' : '0 12px')};
  padding-left: ${({ leftIcon }) => (leftIcon ? '46px' : '12px')};
  padding-right: ${({ rightIcon }) => (rightIcon ? '46px' : '12px')};
  border-width: 1.5px;
  border-color: ${({ theme, focused, error }) => {
    if (error) return theme.colors.error?.[400];

    if (focused) return theme.colors.primary?.[300];

    return theme.colors.secondary?.[800];
  }};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary?.[0]};
  font-family: ${({ theme }) => theme.typography.fonts.secondary.regular};
  font-size: ${({ theme }) => theme.typography.size.sm + 'px'};
  background-color: ${({ theme }) => theme.colors.secondary?.[900]};
  opacity: ${({ theme, editable }) => (editable ? 1 : theme.shape.opacity)};
`;

interface IInputIconProps {
  error: boolean;
  direction: 'left' | 'right';
}

const InputIconButton = styled(TouchableOpacity)<IInputIconProps>`
  position: absolute;
  right: ${({ direction }) => (direction === 'right' ? '8px' : 'initial')};
  left: ${({ direction }) => (direction === 'left' ? '8px' : 'initial')};
  bottom: ${({ error }) => (error ? '26px' : '3px')};
  padding: 3px;
`;

export { InputContainer, TextInput, InputIconButton };
