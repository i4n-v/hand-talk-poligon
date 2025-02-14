import styled from 'styled-components/native';

const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary?.[1100]};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: 0.8;
`;

export { LoadingContainer };
