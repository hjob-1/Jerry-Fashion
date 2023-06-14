type common = string[];

export default interface themeType {
  breakpoints: common;
  fontSizes: common;
  colors: {
    primary: common;
    white: string;
    black: string;
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
  fontWeights: number[];
  radii: common;
  ZIndices: number[];
  shadows: string[];
}
