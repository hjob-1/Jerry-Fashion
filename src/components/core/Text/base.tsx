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
import { textProp } from "../types";
import shouldForwardProp from "@/utils/forwardProp";

export const Stext = styled("p").withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<textProp>`
  ${compose(color, typography, fontSize, layout, space, border)}
  ${variant({
    variants: {
      text: {
        fontSize: "md",
      },
      h1: {
        fontWeight: "semibold",
        fontSize: "heading",
      },
      h2: {
        fontWeight: "bold",
        fontSize: "7xl",
      },
      h3: {
        fontWeight: "medium",
        fontSize: "4xl",
      },
    },
  })}
`;
