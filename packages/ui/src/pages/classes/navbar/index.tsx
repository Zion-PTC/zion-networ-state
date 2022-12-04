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
  input2.IconComponent = Icon.Paths[0].Component;
  input2.inputId = "bello";
  input2.inputName = "ok";

  const input3 = new NavInputProps();
  input3.IconComponent = Icon.Paths[0].Component;
  input3.inputId = "Arianna";
  input3.inputName = "ok";

  const input4 = new NavInputProps();
  input4.IconComponent = Icon.Paths[4].Component;
  input4.inputId = "wow";
  input4.inputName = "ok";

  return (
    <NavBar text layout="main" style="borderOnTop">
      <NavInput {...input3} iconInput checked>
        <Icon arrowLeft />
      </NavInput>
      <NavInput {...input1} textInput />
      <NavInput {...input4} iconInput />
    </NavBar>
  );
}
