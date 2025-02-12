type IColorsKeys = 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100;

type IColorsPattern = {
  [key in IColorsKeys]?: string;
};

interface IColors {
  primary?: IColorsPattern;
  secondary?: IColorsPattern;
  success?: IColorsPattern;
  error?: IColorsPattern;
  info?: IColorsPattern;
  warning?: IColorsPattern;
}

interface ITypography {
  size: {
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;
  };
  fonts: {
    primary: {
      normal: string;
      medium: string;
      semibold: string;
    };
    secondary: {
      light: string;
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    };
  };
}

interface IShape {
  borderRadius: number;
  padding: number;
  opacity: number;
}

interface IShadowPattern {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

type IShadowKeys = 0;

type IShadow = {
  [key in IShadowKeys]: IShadowPattern;
};

interface ITheme {
  colors: IColors;
  typography: ITypography;
  shape: IShape;
  shadows: IShadow;
}

export type { ITheme, IColorsPattern, IColors, ITypography, IShape, IShadow, IShadowPattern };
