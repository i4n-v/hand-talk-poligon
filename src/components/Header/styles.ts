import styled from 'styled-components/native';

const Container = styled.View`
  padding: ${({ theme }) => theme.shape.padding + 'px'};
  background-color: ${({ theme }) => theme.colors.secondary?.[1000]};
  row-gap: 6px;
`;

const ScreenInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.size.md + 'px'};
  font-family: ${({ theme }) => theme.typography.fonts.primary.semibold};
  color: ${({ theme }) => theme.colors.secondary?.[0]};
  margin-bottom: -4px;
`;

const IconButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary?.[500]};
  border-radius: 32px;
  padding: ${({ isLogout }) => (isLogout ? '5px 4px 5px 8px' : '4px')};
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const UserIdentifier = styled.Text`
  font-size: ${({ theme }) => theme.typography.size.sm + 'px'};
  font-family: ${({ theme }) => theme.typography.fonts.secondary.regular};
  color: ${({ theme }) => theme.colors.secondary?.[0]};
`;

export { Container, ScreenInfo, TitleContainer, Title, UserInfo, UserIdentifier, IconButton };
