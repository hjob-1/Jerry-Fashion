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
${variant({
    variants: {
      text: {
        fontSize: "md",
      },
      h1: {
        fontWeight: "semibold",
        fontSize: "8xl",
      },
      h2: {
        fontWeight: "bold",
        fontSize: "6xl",
      },
      h3: {
        fontWeight: "medium",
        fontSize: "4xl",
      },
    },
  })}
`;
