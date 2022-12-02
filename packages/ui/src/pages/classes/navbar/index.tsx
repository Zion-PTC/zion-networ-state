import React from "react";
import {
  Icon,
  NavBar,
  NavInput,
  NavInputProps,
} from "../../../HTML/React/classes";

export default function index() {
  const input1 = new NavInputProps({
    inputId: "biu",
    inputName: "ok",
  });

  const input2 = new NavInputProps({
    IconComponent: Icon.Svgs[0].Component,
    inputId: "bello",
    inputName: "mamma",
  });

  const input3 = new NavInputProps({
    IconComponent: Icon.Svgs[0].Component,
    inputId: "ciao",
    inputName: "ok",
  });

  const input4 = new NavInputProps({
    IconComponent: Icon.Svgs[2].Component,
    inputId: "miao",
    inputName: "ok",
  });

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
