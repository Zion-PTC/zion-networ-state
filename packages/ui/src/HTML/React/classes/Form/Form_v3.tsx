import { dataGuard } from "@zionstate/utils";
import { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import {
  Label as LabelledInput,
  LabelProps as LabelledInputProps,
} from "../Basic";

class InputState {
  input = "";
  value = "";
}

export interface Form_v3PropsType {
  name: string;
  inputs: LabelledInputProps[];
  reset?: boolean;
}

export interface Form_v3Props
  extends BuildProps<Form_v3PropsType>,
    BaseNoizProps {}

export class Form_v3Props extends BaseNoizProps {
  constructor(props: BuildProps<Form_v3PropsType>) {
    super(props);
    this.name = props.name;
    this.datas = props.datas;
    this.inputs = props.inputs;
    this.reset = props.reset;
  }
}
export interface Form_v3State {
  inputs: { input: string; value: string }[];
}

export interface Form_v3
  extends BaseNoiz<Form_v3Props, Form_v3State> {
  InputState: typeof InputState;
  inputs: LabelledInputProps[];
  initializeIns(ins: LabelledInputProps[]): InputState[];
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
  handleInputsOnSubmit(
    currentInputs: LabelledInputProps[]
  ): {
    input: string;
    value: string;
  }[];
  computeInputs(currInput: string): {
    input: string;
    value: string;
  };
  handleChanges(
    id: number
  ): (e: ChangeEvent<HTMLInputElement>) => void;
  mapLabelledInputs(): JSX.Element;
  buildInputs(): LabelledInputProps[];
  mapInputs(inputs: LabelledInputProps[]): JSX.Element;
  Html(props: Form_v3Props): JSX.Element;
}

export class Form_v3 extends BaseNoiz<
  Form_v3Props,
  Form_v3State
> {
  InputState = InputState;

  inputs;

  constructor(props: Form_v3Props) {
    super(props);
    let ins = props.inputs;
    this.inputs = props.inputs;
    let inputs = this.initilizeIns(ins);
    this.state = { inputs };
  }

  initilizeIns = (ins: LabelledInputProps[]) =>
    ins.map(() => new this.InputState());

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentInputs = this.inputs;
    let inputs = this.handleInputsOnSubmit(currentInputs);
    this.setState({ inputs });
  };

  handleInputsOnSubmit(
    currentInputs: LabelledInputProps[]
  ) {
    return currentInputs.map((_, index) => {
      let currInpState = this.state.inputs[index];
      let currInput = dataGuard(currInpState, "").input;
      let { input, value } = this.computeInputs(currInput);
      let nuInsState = { input, value };
      return nuInsState;
    });
  }

  computeInputs(currInput: string) {
    const cond = currInput !== "";
    const reset = this.props.reset;
    let value: string = "";
    let input: string = "";
    if (cond) input = reset ? "" : currInput;
    if (cond) value = currInput;
    return { input, value };
  }

  handleChanges =
    (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      let inputs = [...this.state.inputs];
      let inputToEdit = inputs[id];
      inputToEdit = dataGuard(inputToEdit, "");
      inputToEdit.input = e.target.value;
      this.setState({ inputs });
    };

  mapLabelledInputs() {
    const inputs = this.buildInputs();
    let mappedInputs = this.mapInputs(inputs);
    return mappedInputs;
  }

  buildInputs() {
    const inputs = this.inputs;
    inputs.forEach((input, idx) => {
      const curIn = this.state.inputs[idx];
      const safeInput = dataGuard(curIn, "");
      input.value = safeInput.input;
      input.handleChange = this.handleChanges(idx);
    });
    return inputs;
  }

  mapInputs(inputs: LabelledInputProps[]) {
    return (
      <>
        {inputs.map((el, id) => (
          <LabelledInput key={id} {...el}></LabelledInput>
        ))}
      </>
    );
  }

  Html = (props: Form_v3Props) => {
    let mappedLabelledInputs = this.mapLabelledInputs();
    return (
      <form
        className={props.className}
        onSubmit={this.handleSubmit}
      >
        {mappedLabelledInputs}
        <input type="submit" id="submit-button"></input>
        {props.children}
      </form>
    );
  };

  StyledHtml = styled(this.Html)`
    display: grid;
    grid-auto-columns: max-content;
    #submit-button {
      display: none;
    }
  `;

  render() {
    let Element = this.makeElement();
    console.log(this.state);
    return (
      <Element
        inputs={this.props.inputs}
        name=""
      ></Element>
    );
  }
}
