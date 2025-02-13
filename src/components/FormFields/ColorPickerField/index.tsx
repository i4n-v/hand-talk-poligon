import React from 'react';
import { Panel1, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';
import styles, { Container, InputWrapper, Picker } from './styles';
import { IColorPickerFieldrops } from './types';
import { useController } from 'react-hook-form';
import { ErrorMessage, Label } from '../FieldUtilitaries';

export default function ColorPickerField({
  name,
  control,
  label,
  disabled,
  required,
  containerProps,
}: IColorPickerFieldrops) {
  const {
    field,
    formState: { errors },
  } = useController({ name, control });
  const error = errors[field.name]?.message as string | undefined;

  return (
    <InputWrapper>
      <Label error={!!error} disabled={disabled} required={required}>
        {label}
      </Label>
      <Container
        {...containerProps}
        accessible
        accessibilityLabel={label}
        accessibilityLabelledBy={label}
        accessibilityRole="toolbar"
      >
        <Picker value={field.value} onChange={({ hex }) => field.onChange(hex)}>
          <Preview colorFormat="hex" style={styles.preview} textStyle={styles.previewText} />
          <Panel1 style={styles.panel} thumbStyle={styles.thumb} thumbInnerStyle={styles.thumb} />
          <HueSlider
            thumbStyle={styles.thumb}
            thumbInnerStyle={styles.thumb}
            sliderThickness={10}
          />
          <OpacitySlider
            thumbStyle={styles.thumb}
            thumbInnerStyle={styles.thumb}
            sliderThickness={10}
          />
        </Picker>
      </Container>
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
}
