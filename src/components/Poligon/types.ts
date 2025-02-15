import { StyleProp, ViewStyle } from 'react-native';

type IPoligonTypes = 'cube' | 'cone' | 'dodecaedro';

interface IPoligonProps {
  type: IPoligonTypes;
  color: string;
  rotation: number;
  orbital?: boolean;
  accessible?: boolean;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

export type { IPoligonProps, IPoligonTypes };
