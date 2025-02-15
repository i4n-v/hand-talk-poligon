import { Poligon } from '@/components';
import { MainButton } from '@/components/Buttons';
import styled from 'styled-components/native';

const Container = styled.View`
  gap: 20px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary?.[1100]};
  padding: 0px 16px 32px 16px;
`;

const Button = styled(MainButton)`
  margin-top: 20px;
`;

const SizedPoligon = styled(Poligon)`
  width: 100%;
  height: 250px;
`;

export { Container, Button, SizedPoligon };
