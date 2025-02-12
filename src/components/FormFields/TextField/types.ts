import { IIcon } from '@/types/Icon';
import { Control } from 'react-hook-form';
import {
  ColorValue,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputFocusEventData,
  TextInputProps,
  ViewProps,
} from 'react-native';

interface IInputIcon {
  icon: IIcon;
  onPress?: () => void;
}

type IIconPassword = 'visibility' | 'visibility-off';

interface ITextFieldProps {
  name?: string;
  value?: string | number | null;
  control?: Control<any, any>;
  label?: string;
  textArea?: boolean;
  numberOfLines?: number;
  password?: boolean;
  errorMessage?: string;
  showErrorMessage?: boolean;
  selectionColor?: ColorValue;
  leftIcon?: IInputIcon;
  rightIcon?: IInputIcon;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  customOnChange?(value: string): void;
  containerProps?: ViewProps;
  inputProps?: TextInputProps;
  onChangeText?(value: string): void;
  onBlur?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
  onEndEditing?(e: NativeSyntheticEvent<TextInputEndEditingEventData>): void;
  onFocus?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
}

export type { ITextFieldProps, IInputIcon, IIconPassword };
