import React from "react";
import { cardProp } from "../types";
import { Flex } from "../flex/flex";

interface Props {}

const Card = (props: cardProp) => {
  return (
    <Flex variant="normal" {...props}>
      {props.children}
    </Flex>
  );
};

export default Card;
