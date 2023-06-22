import styled from "@emotion/styled";
import Link from "next/link";
import { color, fontSize, space } from "styled-system";
import { sharedTypes } from "../types";
interface link extends sharedTypes {
  textDecoration?: string;
}
export const Navigate = styled(Link)<link>`
  text-decoration: none;
  ${fontSize}
  ${color}
${space}
`;
