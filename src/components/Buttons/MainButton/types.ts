import { IIcon } from '@/types/Icon';
import { IColors } from '@/types/Theme';
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

interface IMainButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  colorScheme?: keyof IColors;
  leftIcon?: IIcon;
  rightIcon?: IIcon;
  textStyle?: StyleProp<TextStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  variant?: 'outlined' | 'contained';
}

export type { IMainButtonProps };
