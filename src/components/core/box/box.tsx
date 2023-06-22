import styled from "@emotion/styled";
import {
  border,
  color,
  flex,
  grid,
  layout,
  position,
  space,
  variant,
} from "styled-system";
import { sharedTypes } from "../types";

export const Box = styled.div<sharedTypes>`
  ${color}
  ${layout}
${space}
${border}
${position}
`;
