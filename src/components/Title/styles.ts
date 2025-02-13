import styled from 'styled-components/native';

const TitleContainer = styled.View`
  position: relative;
  padding-left: 15px;
`;

const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.typography.size.lg + 'px'};
  font-family: ${({ theme }) => theme.typography.fonts.primary.semibold};
  color: ${({ theme }) => theme.colors.secondary?.[0]};
`;

const Decoration = styled.View`
  position: absolute;
  top: 3px;
  left: 4px;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary?.[500]};
  border-radius: 0px 12px 12px 12px;
`;

export { TitleContainer, TitleText, Decoration };
