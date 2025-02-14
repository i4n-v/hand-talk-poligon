import styled from 'styled-components/native';

const Container = styled.View`
  width: 80%;
  padding: 12px;
  border-radius: 6px;
  position: absolute;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, status }) => theme.colors[status][200]};
  z-index: 1;
`;

const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Message = styled.Text`
  font-family: ${({ theme }) => theme.typography.fonts.secondary.regular};
  font-size: ${({ theme }) => theme.typography.size.sm + 'px'};
  color: ${({ theme, status }) => theme.colors[status][800]};
  max-width: 90%;
`;

export { Container, MessageContainer, Message };
