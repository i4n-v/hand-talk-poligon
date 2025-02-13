import { IInputOption } from './types';
import { InputOptionContainer, InputOptionLabel } from './styles';

export default function InputOption({ selected, children, onPress }: IInputOption) {
  return (
    <InputOptionContainer
      accessible
      accessibilityLabel={children}
      accessibilityRole="button"
      selected={selected}
      onPress={onPress}
    >
      <InputOptionLabel selected={selected}>{children}</InputOptionLabel>
    </InputOptionContainer>
  );
}
