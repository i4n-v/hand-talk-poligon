import { IIcon } from '@/types/Icon';
import { Control } from 'react-hook-form';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  ViewProps,
} from 'react-native';

interface IInputIcon {
  icon: IIcon;
  onPress?: () => void;
}

interface ITextFieldProps {
  name?: string;
  value?: string | number | null;
  control?: Control<any, any>;
  label?: string;
  password?: boolean;
  leftIcon?: IInputIcon;
  rightIcon?: IInputIcon;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  containerProps?: ViewProps;
  inputProps?: TextInputProps;
  showErrorMessage?: boolean;
  selectionColor?: string;
  errorMessage?: string;
  onChangeText?(value: string): void;
  onBlur?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
  onFocus?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
}

export type { ITextFieldProps, IInputIcon };
