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
import { useNotifier } from '@/hooks';

export default function UserHeader({ isUser, options, navigation }: IHeaderProps) {
  const { openNotification } = useNotifier();
  const theme = useTheme();
  const { user } = useContext(AuthContext);

  const signoutMutation = useMutation({
    mutationFn: authService.signout,
    onSuccess() {
      openNotification({
        status: 'success',
        message: 'Logout realizado com sucesso.',
      });
    },
    onError() {
      openNotification({
        status: 'error',
        message: 'Erro ao realizar logout.',
      });
    },
  });

  return (
    <Container accessible accessibilityRole="header">
      <ScreenInfo>
        <TitleContainer>
          {navigation.canGoBack() && (
            <IconButton
              accessible
              accessibilityLabel="Voltar para a tela anterior"
              accessibilityRole="menuitem"
              activeOpacity={theme.shape.opacity}
              onPress={navigation.goBack}
            >
              <ArrowBack />
            </IconButton>
          )}
          <Title accessible accessibilityLabel={options.title}>
            {options.title}
          </Title>
        </TitleContainer>
        {isUser && (
          <IconButton
            accessible
            accessibilityLabel="Sair do aplicativo"
            accessibilityRole="menuitem"
            isLogout
            activeOpacity={theme.shape.opacity}
            onPress={signoutMutation.mutate}
          >
            <Logout />
          </IconButton>
        )}
      </ScreenInfo>
      {isUser && (
        <UserInfo>
          <Account accessible accessibilityRole="image" accessibilityLabel="Ícone de usuário" />
          <UserIdentifier accessible accessibilityLabel={user?.email}>
            {user?.email}
          </UserIdentifier>
        </UserInfo>
      )}
    </Container>
  );
}
