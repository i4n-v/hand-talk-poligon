import styled from 'styled-components/native';
import { IMainButtonProps } from './types';
import { css } from 'styled-components/native';

type IButtonContainerProps = Pick<IMainButtonProps, 'variant' | 'colorScheme'>;

const ButtonContainer = styled.TouchableOpacity<IButtonContainerProps>`
  ${({ theme, colorScheme, disabled, variant }) => {
    const isOutlined = variant === 'outlined';

    let color = 'transparent';
    let borderColor = theme.colors.secondary?.[800];

    if (isOutlined) {
      if (colorScheme) {
        borderColor = theme.colors[colorScheme]?.[500];
      } else {
        borderColor = theme.colors.primary?.[500];
      }
    }

    if (!isOutlined) {
      if (colorScheme) {
        color = theme.colors[colorScheme]?.[500];
      } else {
        color = theme.colors.primary?.[500];
      }
    }

    return css`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    height: 64px;
    width: 100%;
    padding: ${'0 ' + theme.shape.padding + 'px'};
    border-radius: ${theme.shape.borderRadius + 'px'};
    border-width: ${isOutlined ? '1px' : '0px'};
    border-style: solid;
    border-color: ${borderColor};
    opacity: ${disabled ? theme.shape.opacity + 'px' : 1};
    background-color: ${color};
    ${!isOutlined ? (theme.shadows[0] as any) : ''};
  `;
  }}
`;

const ButtonLabel = styled.Text<IButtonContainerProps>`
  font-size: ${({ theme }) => theme.typography.size.sm + 'px'};
  font-family: ${({ theme }) => theme.typography.fonts.primary.semibold};
  color: ${({ theme, colorScheme, variant }) => {
    let color = theme.colors.secondary?.[0];

    if (variant === 'outlined') {
      if (colorScheme) {
        color = theme.colors[colorScheme]?.[500];
      } else {
        color = theme.colors.primary?.[500];
      }
    }

    return color;
  }};
`;

export { ButtonContainer, ButtonLabel };
