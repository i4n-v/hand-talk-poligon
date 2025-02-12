import styled from 'styled-components/native';

const ErrorMessageContainer = styled.Text`
  font-family: ${({ theme }) => theme.typography.fonts.secondary.regular};
  font-size: ${({ theme }) => theme.typography.size.xxs + 'px'};
  color: ${({ theme }) => theme.colors.error?.[400]};
`;

export { ErrorMessageContainer };
