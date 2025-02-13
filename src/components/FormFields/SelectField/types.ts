import { IFlatlisProps } from '@/components/BottomSheetList/types';
import { Control } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface ISelectFieldProps<T> {
  name: string;
  label?: string;
  control: Control<any, any>;
  options: T[];
  optionKeyExtractor?: string;
  optionLabelKey: string;
  optionValueKey?: string;
  optionCompareKey?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  inputProps?: TextInputProps;
  containerProps?: ViewProps;
  listProps?: Omit<IFlatlisProps<T>, 'data' | 'renderItem'>;
}

export type { ISelectFieldProps };
