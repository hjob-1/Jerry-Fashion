import { grid } from "styled-system";
import styled from "styled-components";
import { Box } from "../box/box";
import shouldForwardProp from "@/utils/forwardProp";
import { gridType } from "../types";

export const Grid = styled(Box).withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<gridType>`
  display: grid;
  ${grid}
`;
