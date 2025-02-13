import { Control } from 'react-hook-form';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface IColorPickerFieldrops {
  name: string;
  control: Control<any, any>;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  containerProps?: ViewProps;
}

export type { IColorPickerFieldrops };
