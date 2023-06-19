import { theme } from "@/clientComponents/style/theme";
import styled from "@emotion/styled";
import {
  border,
  color,
  fontSize,
  layout,
  space,
  typography,
  variant,
} from "styled-system";
import { buttonProp } from "../types";

export const Sbutton = styled.button<buttonProp>`
  cursor: "pointer";
  ${color} ${typography} ${fontSize} ${layout} ${space} ${border}
      ${variant({ variants: theme.button })};
`;
