type common = string[];

export default interface themeType {
  fontSizes: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
    "3xl"?: string;
    "4xl"?: string;
    "5xl"?: string;
    "6xl"?: string;
    "7xl"?: string;
    "8xl"?: string;
    "9xl"?: string;
  };
  colors: {
    green50?: string;
    green100?: string;
    green200?: string;
    green300?: string;
    green400?: string;
    green500?: string;
    green600?: string;
    green700?: string;
    green800?: string;
    green900?: string;
    white?: string;
    black?: string;
    primary?: string;
  };
  letterSpacing: {
    normal?: string;
    tight?: string;
    tighter?: string;
    wide?: string;
    wider?: string;
    widest?: string;
  };
  lineHeights: {
    solid?: number;
    title?: number;
    copy?: number;
  };
  space: {};
  sizes: common;
  borders: common;
  fontWeights: {
    hairline?: number;
    thin?: number;
    light?: number;
    normal?: number;
    medium?: number;
    semibold?: number;
    bold?: number;
    extrabold?: number;
    black?: number;
  };
  radii: {
    xs?: string;
    sm?: string;
    md?: string;
    base?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
    "3xl"?: string;
    squared?: string;
    rounded?: string;
    pill?: string;
  };
  ZIndices: {
    hide?: number;
    auto?: string;
    base?: number;
    docked?: number;
    dropdown?: number;
    sticky?: number;
    banner?: number;
    overlay?: number;
    modal?: number;
    popover?: number;
    skipLink?: number;
    toast?: number;
    tooltip?: number;
  };
  shadows: {};
}
