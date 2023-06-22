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
import theme from "@/components/style/theme";

export const Sbutton = styled.button<buttonProp>`
  cursor: "pointer";
  ${color} ${typography} ${fontSize} ${layout} ${space} ${border}
      ${variant({
    variants: {
      primary: {
        color: "white",
        bg: "pallete.700",
        "&:hover": {
          bg: "pallete.800",
        },
        px: "6",
        py: "4",
        borderRadius: "2",
        border: "1",
        borderColor: "pallete.700",
        fontSize: "md",
      },
      outlined: {
        color: "primary.1",
        bg: "transparent",
        border: "1",
        px: "6",
        py: "4",
        fontSize: "md",
        borderColor: "pallete.50",
        "&:hover": {
          bg: "primary.1",
          color: "white",
        },
      },
    },
  })};
`;
