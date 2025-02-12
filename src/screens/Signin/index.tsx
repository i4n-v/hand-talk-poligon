import React, { useContext } from 'react';
import { BottomDetail, Button, Container, Form, Title, TopDetail } from './styles';
import { TextField } from '../../components/FormFields';
import { useForm } from 'react-hook-form';
import { defaultValues, validations } from './validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { ISiginForm } from './types';
import Icon from '@react-native-vector-icons/material-icons';
import { useTheme } from 'styled-components/native';
import bottomDetail from '@/assets/images/bottom-detail.png';
import topDetail from '@/assets/images/top-detail.png';
import { AuthContext } from '@/contexts/AuthContext';
import { authService } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

export default function Signin() {
  const theme = useTheme();
  const { setUser } = useContext(AuthContext);

  const siginMutation = useMutation({
    mutationFn: authService.signin,
  });

  const { control, handleSubmit } = useForm<ISiginForm>({
    defaultValues,
    resolver: zodResolver(validations),
  });

  const onSubmit = handleSubmit((data) => {
    siginMutation.mutate(data, {
      onSuccess() {
        Alert.alert('Login', 'Login realizado com sucesso.');
      },
      onError(error) {
        Alert.alert('Login', 'E-mail ou senha incorretos.');
      },
    });
  });

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <TextField
          label="E-mail"
          name="email"
          control={control}
          rightIcon={{ icon: <Icon name="person" size={32} color={theme.colors.primary?.[300]} /> }}
        />
        <TextField label="Senha" name="password" control={control} password />
        <Button onPress={onSubmit}>ENTRAR</Button>
      </Form>
      <TopDetail source={topDetail} />
      <BottomDetail source={bottomDetail} />
    </Container>
  );
}
