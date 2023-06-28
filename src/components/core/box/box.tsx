import styled from "styled-components";
import { border, color, compose, layout, position, space } from "styled-system";
import { sharedTypes } from "../types";
import shouldForwardProp from "@/utils/forwardProp";

export const Box = styled("div").withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<sharedTypes>`
  ${color}
  ${space}
  ${layout}
  ${position}
`;
