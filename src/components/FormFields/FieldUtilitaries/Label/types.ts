import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';

interface ILabelProps {
  children: ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  style?: StyleProp<TextStyle>;
}

export type { ILabelProps };
