type common = string[];

export default interface themeType {
  breakpoints: common;
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
    "8xl": string;
    "9xl": string;
  };
  colors: {
    pallete: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
    white: string;
    black: string;
    primary: string[];
  };
  letterSpacing: {
    normal: string;
    tracked: string;
    tight: string;
    mega: string;
  };
  lineHeights: {
    solid: number;
    title: number;
    copy: number;
  };
  space: common;
  sizes: common;
  borders: common;
  fontWeights: {
    hairline: number;
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  };
  radii: common;
  ZIndices: {
    hide: number;
    auto: string;
    base: number;
    docked: number;
    dropdown: number;
    sticky: number;
    banner: number;
    overlay: number;
    modal: number;
    popover: number;
    skipLink: number;
    toast: number;
    tooltip: number;
  };
  shadows: {};
}
