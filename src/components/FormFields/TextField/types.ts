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

interface ITextFieldProps {
  name: string;
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
}

export type { ITextFieldProps, IInputIcon };
