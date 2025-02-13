import { MainButton } from '@/components/Buttons';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.secondary?.[1100]};
  padding: 0px 16px 32px 16px;
`;

const Button = styled(MainButton)`
  margin-top: 20px;
`;

export { Container, Button };
