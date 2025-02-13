import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary?.[1100]};
  padding: ${({ theme }) => theme.shape.padding + 'px'};
`;

export { Container };
