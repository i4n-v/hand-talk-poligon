import React from 'react';
import { BottomDetail, Button, Container, Form, FormTitle, TopDetail } from './styles';
import { TextField } from '../../components/FormFields';
import { useForm } from 'react-hook-form';
import { defaultValues, validations } from './validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { ISiginForm } from './types';
import bottomDetail from '@/assets/images/bottom-detail.png';
import topDetail from '@/assets/images/top-detail.png';
import { authService } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';
import { User } from '@/components/Icons';

export default function Signin() {
  const siginMutation = useMutation({
    mutationFn: authService.signin,
  });

  const { control, handleSubmit } = useForm<ISiginForm>({
    defaultValues,
    resolver: zodResolver(validations),
  });

  const onSubmit = handleSubmit((data) => {
    siginMutation.mutate(data, {
      onError() {
        Alert.alert('Login', 'E-mail ou senha incorretos.');
      },
    });
  });

  return (
    <Container>
      <Form accessible accessibilityLabel="Formulário de login">
        <FormTitle>Login</FormTitle>
        <TextField label="E-mail" name="email" control={control} rightIcon={{ icon: <User /> }} />
        <TextField label="Senha" name="password" control={control} password />
        <Button loading={siginMutation.isPending} onPress={onSubmit}>
          ENTRAR
        </Button>
      </Form>
      <TopDetail source={topDetail} />
      <BottomDetail source={bottomDetail} />
    </Container>
  );
}
