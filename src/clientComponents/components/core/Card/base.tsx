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
import { cardProp } from "../types";
import theme from "@/clientComponents/style/theme";

export const Box = styled.div`
  ${color}
  ${layout}
${space}
${border}
${position}
`;

export const Flex = styled(Box)<cardProp>`
  display: flex;
  ${flex}
  ${variant({ variants: theme.card })}
`;
export const Grid = styled(Box)`
  display: grid;
  ${grid}
`;
