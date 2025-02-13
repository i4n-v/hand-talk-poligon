import React from 'react';
import { StatusBar } from 'react-native';
import { Container, GestureHandlerView } from './styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/configs';
import theme from '@/global/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@/routes';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '@/contexts/AuthContext';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <Container>
              <GestureHandlerView>
                <BottomSheetModalProvider>
                  <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.colors.secondary?.[1000]}
                  />
                  <Routes />
                </BottomSheetModalProvider>
              </GestureHandlerView>
            </Container>
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
