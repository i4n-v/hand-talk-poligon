import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import {
  Container,
  IconButton,
  ScreenInfo,
  Title,
  TitleContainer,
  UserIdentifier,
  UserInfo,
} from './styles';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useTheme } from 'styled-components/native';
import { IHeaderProps } from './types';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services';
import { Account, ArrowBack, Logout } from '../Icons';

export default function UserHeader({ isUser, options, navigation }: IHeaderProps) {
  const theme = useTheme();
  const { user } = useContext(AuthContext);

  const signoutMutation = useMutation({
    mutationFn: authService.signout,
  });

  return (
    <Container>
      <ScreenInfo>
        <TitleContainer>
          {navigation.canGoBack() && (
            <IconButton activeOpacity={theme.shape.opacity} onPress={navigation.goBack}>
              <ArrowBack />
            </IconButton>
          )}
          <Title>{options.title}</Title>
        </TitleContainer>
        {isUser && (
          <IconButton isLogout activeOpacity={theme.shape.opacity} onPress={signoutMutation.mutate}>
            <Logout />
          </IconButton>
        )}
      </ScreenInfo>
      {isUser && (
        <UserInfo>
          <Account />
          <UserIdentifier>{user?.email}</UserIdentifier>
        </UserInfo>
      )}
    </Container>
  );
}
