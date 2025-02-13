import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const GestureHandlerView = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary?.[1100]};
`;

export { Container, GestureHandlerView };
