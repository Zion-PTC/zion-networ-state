import React from "react";
import {
  Icon,
  NavBar,
  NavInput,
  NavInputProps,
} from "../../../HTML/React/classes";

export default function index() {
  const input1 = new NavInputProps();
  input1.inputId = "biu";
  input1.inputName = "ok";

  const input2 = new NavInputProps();
  input2.IconComponent = Icon.Svgs[0].Component;
  input2.inputId = "bello";
  input2.inputName = "mamma";

  const input3 = new NavInputProps();
  input3.IconComponent = Icon.Svgs[0].Component;
  input3.inputId = "ciao";
  input3.inputName = "ok";

  const input4 = new NavInputProps();
  input4.IconComponent = Icon.Svgs[4].Component;
  input4.inputId = "ciao";
  input4.inputName = "ok";

  return (
    <NavBar text>
      <NavInput {...input3} iconInput checked>
        <Icon arrowLeft />
      </NavInput>
      <NavInput {...input1} textInput />
      <NavInput {...input4} iconInput />
    </NavBar>
  );
}
