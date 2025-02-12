import { MainButton } from '@/components/Buttons';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.shape.padding + 'px'};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary?.[1100]};
`;

const Form = styled.View`
  padding: 32px 16px;
  border-radius: ${({ theme }) => theme.shape.borderRadius + 'px'};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary?.[1000]};
  row-gap: 12px;
  z-index: 1;
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.size.lg + 'px'};
  font-family: ${({ theme }) => theme.typography.fonts.primary.semibold};
  color: ${({ theme }) => theme.colors.secondary?.[50]};
  margin-bottom: 28px;
`;

const Button = styled(MainButton)`
  margin-top: 20px;
`;

const BottomDetail = styled.Image`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const TopDetail = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
`;

export { Container, Title, Button, Form, BottomDetail, TopDetail };
