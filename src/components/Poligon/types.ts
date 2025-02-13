type IPoligonTypes = 'cube' | 'cone' | 'dodecaedro';

interface IPoligonProps {
  type: IPoligonTypes;
  color: string;
  rotation: number;
  size?: number;
  orbital?: boolean;
  accessible?: boolean;
  accessibilityLabel?: string;
}

export type { IPoligonProps, IPoligonTypes };
