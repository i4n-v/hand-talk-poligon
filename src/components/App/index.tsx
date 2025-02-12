import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/configs';
import theme from '@/global/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@/routes';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary?.[1000]} />
          <Routes />
        </Container>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
