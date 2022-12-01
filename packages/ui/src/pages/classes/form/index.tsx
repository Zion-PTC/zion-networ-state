import React from "react";
import {
  Form,
  FormProps,
  LabelProps as LabelledInputProps,
} from "../../../HTML/React/classes";

let input1 = new LabelledInputProps({
  name: "bodl",
  placeholder: "bolder",
  type: "text",
  handleChange: () => {},
});

let input2 = new LabelledInputProps({
  name: "bolt",
  placeholder: "bolter",
  type: "text",
  handleChange: () => {},
});

let input3 = new LabelledInputProps({
  name: "input 3",
  placeholder: "sdflter",
  type: "text",
  handleChange: () => {},
});

let input4 = new LabelledInputProps({
  name: "input 4",
  placeholder: "sdflter",
  type: "text",
  handleChange: () => {},
});

const formProps = new FormProps({
  inputs: [input1, input2, input3, input4],
  name: "myform",
  reset: true,
});

export default function index() {
  return <Form {...formProps}></Form>;
}
