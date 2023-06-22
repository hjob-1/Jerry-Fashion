import styled from "@emotion/styled";
import { flex, variant } from "styled-system";
import { cardProp } from "../types";
import { Box } from "../box/box";

export const Flex = styled(Box)<cardProp>`
  display: flex;
  ${flex}
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
  })}
`;
