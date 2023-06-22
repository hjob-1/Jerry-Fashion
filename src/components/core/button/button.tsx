import React from "react";
import { Sbutton } from "./base";
import { buttonProp } from "../types";

const Button = (props: buttonProp) => {
  return (
    <Sbutton variant="primary" {...props}>
      {props?.leftIcon}
      {props.children}
      {props?.rightIcon}
    </Sbutton>
  );
};

export default Button;
