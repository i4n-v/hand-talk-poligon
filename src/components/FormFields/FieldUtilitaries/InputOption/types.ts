import { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';

interface IInputOption {
  selected: boolean;
  children: ReactNode;
  onPress(event: GestureResponderEvent): void;
}

export type { IInputOption };
