import React from "react";
import { NavInput } from "../../../../HTML/React/classes";
import { Icon } from "../../../../HTML/React/classes";
// console.log(ArrowBack);

export default function index() {
  return (
    <NavInput
      inputId="ciao"
      inputName="baby"
      IconComponent={Icon.Svgs[3].Component}
      iconInput
      value="boom"
    ></NavInput>
  );
}
