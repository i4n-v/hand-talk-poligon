import React, { useContext, useEffect } from 'react';
import { Button, Container, SizedPoligon } from './styles';
import { gestureHandlerRootHOC, ScrollView } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import { defaultValues, validations } from './validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { ColorPickerField, SelectField, SliderField } from '@/components/FormFields';
import { ISettingsForm } from './types';
import { poligonsNames, poligonsOptions } from './constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsService } from '@/services';
import { AuthContext } from '@/contexts/AuthContext';
import { useNotifier } from '@/hooks';

function Settings() {
  const { openNotification } = useNotifier();
  const { user, flags } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const settingsQueryData = queryClient.getQueryData(
    settingsService.getSettingsQueryKey([user!.id]),
  );

  const postSettingsMutation = useMutation({
    mutationFn: settingsService.postSettings,
  });

  const { control, watch, handleSubmit, setValue } = useForm<ISettingsForm>({
    defaultValues,
    resolver: zodResolver(validations),
  });

  const { type, color, rotation } = watch();

  const onSubmit = handleSubmit((data) => {
    if (!user) return;

    const payload = {
      id: user.id,
      ...data,
    };

    postSettingsMutation.mutate(payload, {
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: settingsService.getSettingsQueryKey([user!.id]),
        });

        openNotification({
          status: 'success',
          message: 'Configurações salvas com sucesso.',
        });
      },
      onError() {
        openNotification({
          status: 'error',
          message: 'Erro ao salvar as configurações.',
        });
      },
    });
  });

  useEffect(() => {
    if (settingsQueryData && settingsQueryData[type]) {
      const { color, rotation } = settingsQueryData[type];

      setValue('color', color);
      setValue('rotation', rotation);
    }
  }, [type]);

  return (
    <ScrollView>
      <Container contentContainerStyle={{}}>
        <SizedPoligon
          accessible
          accessibilityLabel={poligonsNames[type]}
          type={type}
          color={color}
          rotation={rotation}
        />
        <SelectField
          label="Tipo de poligono"
          name="type"
          control={control}
          optionLabelKey="name"
          optionCompareKey="value"
          optionKeyExtractor="value"
          optionValueKey="value"
          options={poligonsOptions}
        />
        {flags?.polygon_rotation_change && (
          <SliderField label="Rotação" name="rotation" control={control} />
        )}
        {flags?.polygon_color_change && (
          <ColorPickerField label="Cor" name="color" control={control} />
        )}
        <Button
          loading={postSettingsMutation.isPending}
          onPress={onSubmit}
          disabled={!flags?.polygon_rotation_change && !flags?.polygon_color_change}
        >
          SALVAR
        </Button>
      </Container>
    </ScrollView>
  );
}

export default gestureHandlerRootHOC(Settings);
