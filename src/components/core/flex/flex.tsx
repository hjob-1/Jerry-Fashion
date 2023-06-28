import styled from "styled-components";
import { variant } from "styled-system";
import { cardProp } from "../types";
import { Box } from "../box/box";

export const Flex = styled(Box)<cardProp>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  flex: ${(props) => props.flex};
  flex-wrap: ${(props) => props.flexWrap};
  ${variant({
    variants: {
      normal: {
        padding: "6",
        "&:hover": {
          cursor: "pointer",
        },
      },
      rounded: {
        padding: "6",
        borderRadius: "3",
        boxShadow: "thickBorder",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  })};
`;
