import React, { useContext } from 'react';
import { Container } from './styles';
import { Poligon, Title } from '@/components';
import { useNotifier, useQuery } from '@/hooks';
import { settingsService } from '@/services';
import { AuthContext } from '@/contexts/AuthContext';
import { useTheme } from 'styled-components/native';
import { poligonsOptions } from '../Settings/constants';

export default function Home() {
  const theme = useTheme();
  const { openNotification } = useNotifier();
  const { user } = useContext(AuthContext);

  const settingsQuery = useQuery({
    enabled: !!user,
    queryKey: settingsService.getSettingsQueryKey([user!.id]),
    queryFn: () => settingsService.getSettings(user!.id),
    onError() {
      openNotification({
        status: 'error',
        message: 'Houve um erro ao buscar as configurações dos poligonos.',
      });
    },
  });

  return (
    <Container>
      <Title>Poligonos</Title>
      {poligonsOptions.map(({ name, value }) => {
        const poligon = settingsQuery.data?.[value];

        return (
          <Poligon
            key={value}
            accessible
            accessibilityLabel={name}
            type={value}
            color={poligon ? poligon.color : theme.colors.primary?.[500]}
            rotation={poligon ? poligon.rotation : 0}
          />
        );
      })}
    </Container>
  );
}
