import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

interface IHeaderProps {
  isUser?: boolean;
  options: NativeStackHeaderProps['options'] | BottomTabHeaderProps['options'];
  navigation: NativeStackHeaderProps['navigation'] | BottomTabHeaderProps['navigation'];
}

export type { IHeaderProps };
