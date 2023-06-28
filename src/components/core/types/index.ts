export type sharedTypes = {
  children?: any;
  mb?: string | string[];
  mt?: string | string[];
  ml?: string | string[];
  mr?: string | string[];
  mx?: string | string[];
  my?: string | string[];
  m?: string | string[];
  p?: string | string[];
  px?: string | string[];
  py?: string | string[];
  pr?: string | string[];
  pl?: string | string[];
  pb?: string | string[];
  pt?: string | string[];
  bg?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string | string[];
  fontWeight?: string | string[];
  border?: string | string[];
  borderRadius?: string;
  height?: string;
  width?: string;
  boxShadow?: string;
};
export interface buttonProp extends sharedTypes {
  leftIcon?: React.ReactNode | any;
  rightIcon?: React.ReactNode | any;
  variant?: "primary" | "secondary" | "outlined";
}
export interface textProp extends sharedTypes {
  variant?: "h1" | "h2" | "h3" | "text";
  textAlign?: string;
}
export interface cardProp extends sharedTypes {
  variant?: "rounded" | "normal";
  alignItems?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | "space-around"
    | "space-evenly";
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignSelf?: string;
  justifySelf?: string;
  flexDirection?: string;
  flex?: string;
  flexShrink?: string;
  flexWrap?: string;
  flexGrow?: string;
  alignContent?: string;
}

export interface gridType extends sharedTypes {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridGap?: string;
  rowGap?: string;
  columnGap?: string;
}
