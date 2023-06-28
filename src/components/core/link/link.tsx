import styled from "styled-components";
import Link from "next/link";
import { color, fontSize, space } from "styled-system";
import { sharedTypes } from "../types";
import shouldForwardProp from "@/utils/forwardProp";
interface link extends sharedTypes {
  textDecoration?: string;
}
export const Navigate = styled(Link).withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<link>`
  text-decoration: none;
  ${fontSize}
  ${color}
${space}
`;
