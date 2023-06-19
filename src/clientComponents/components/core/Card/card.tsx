import React from "react";
import { Flex } from "./base";
import { cardProp } from "../types";

interface Props {}

const Card = (props: cardProp) => {
  return (
    <Flex variant="normal" {...props}>
      {props.children}
    </Flex>
  );
};

export default Card;
