import theme from "@/clientComponents/style/theme";
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
import { textProp } from "../types";

export const Stext = styled.p<textProp>`
  ${color}
  ${typography}
${fontSize}
${layout}
${space}
${border}
${variant({ variants: theme.typography })}
`;
