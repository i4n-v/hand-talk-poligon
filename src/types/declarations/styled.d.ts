import 'styled-components/native';
import { ITheme } from '@/types/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ITheme {}
}
