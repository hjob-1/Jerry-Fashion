import React from "react";
import { textProp } from "../types";
import { Stext } from "./base";

const Text = (props: textProp) => {
  return (
    <Stext variant="text" {...props}>
      {props.children}
    </Stext>
  );
};

export default Text;
