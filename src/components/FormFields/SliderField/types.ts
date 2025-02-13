import { Control } from 'react-hook-form';
import { ViewProps } from 'react-native';

type ISlideSizes = 'xs' | 'sm';

interface ISliderFieldProps {
  name: string;
  control: Control<any, any>;
  value?: number;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  size?: ISlideSizes;
  disabled?: boolean;
  required?: boolean;
  containerProps?: ViewProps;
}

interface IAnimationContext extends Record<string, unknown> {
  startX: number;
}

export type { ISliderFieldProps, IAnimationContext, ISlideSizes };
