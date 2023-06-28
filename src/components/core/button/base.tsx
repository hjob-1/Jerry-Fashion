import styled from "styled-components";
import {
  border,
  color,
  compose,
  fontSize,
  layout,
  space,
  typography,
  variant,
} from "styled-system";
import { buttonProp } from "../types";
import shouldForwardProp from "@/utils/forwardProp";

export const Sbutton = styled("button").withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<buttonProp>`
  cursor: "pointer";
  ${compose(color, typography, fontSize, layout, space, border)}
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
        color: "green900",
        bg: "transparent",
        border: "thick",
        borderColor: "green900",
        px: "xl",
        py: "md",
        fontSize: "md",
        "&:hover": {
          bg: "green900",
          color: "white",
        },
      },
    },
  })};
`;
