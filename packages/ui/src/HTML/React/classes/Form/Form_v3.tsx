import { dataGuard } from "@zionstate/utils";
import { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import {
  GComponent,
  StyledGComponent,
} from "../../lib/global/BaseNoiz/BaseNoiz_v3";
import {
  Label as LabelledInput,
  LabelProps as LabelledInputProps,
} from "../Basic";

class InputState {
  input = "";
  value = "";
}

export interface Form_v3Props<T> extends BaseNoizProps {
  name: string;
  inputs: LabelledInputProps<T>[];
  reset?: boolean;
}

export class Form_v3Props<T> extends BaseNoizProps {
  constructor(props: Form_v3Props<T>) {
    super(props);
    this.name = props.name;
    this.inputs = props.inputs;
    this.reset = props.reset;
  }
}
export interface Form_v3State {
  inputs: { input: string; value: string }[];
}

export interface Form_v3<
  T extends string | number | readonly string[] | undefined
> extends BaseNoiz<Form_v3Props<T>, Form_v3State> {
  InputState: typeof InputState;
  inputs: LabelledInputProps<T>[];
  newInputState(): InputState;
  computeInputs(currInput: string): {
    input: string;
    value: string;
  };
  buildNewInputState(
    _: any,
    index: number
  ): {
    input: string;
    value: string;
  };
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
  handleChanges(
    id: number
  ): (e: ChangeEvent<HTMLInputElement>) => void;
  buildInputs(): LabelledInputProps<T>[];
  LabelledInputs(
    el: LabelledInputProps<T>,
    id: number
  ): JSX.Element;
  mapLabelledInputs(): JSX.Element;
  Html: GComponent<Form_v3Props<T>>;
  StyledHtml: StyledGComponent<Form_v3Props<T>>;
}

export class Form_v3<T> extends BaseNoiz<
  Form_v3Props<T>,
  Form_v3State
> {
  InputState = InputState;

  inputs;

  newInputState = () => new this.InputState();

  constructor(props: Form_v3Props<T>) {
    super(props);
    let ins = props.inputs;
    this.inputs = props.inputs;
    let inputs = ins.map(this.newInputState);
    this.state = { inputs };
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

  buildNewInputState = (_: any, index: number) => {
    let currInpState = this.state.inputs[index];
    let currInput = dataGuard(currInpState, "").input;
    let { input, value } = this.computeInputs(currInput);
    let nuInsState = { input, value };
    return nuInsState;
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currIns = this.inputs;
    let inputs = currIns.map(this.buildNewInputState);
    this.setState({ inputs });
  };

  handleChanges =
    (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      let inputs = [...this.state.inputs];
      let inputToEdit = inputs[id];
      inputToEdit = dataGuard(inputToEdit, "");
      inputToEdit.input = e.target.value;
      this.setState({ inputs });
    };

  buildInputs() {
    const inputs = this.inputs;
    inputs.forEach((input, idx) => {
      const curIn = this.state.inputs[idx];
      const safeInput = dataGuard(curIn, "");
      input.value = safeInput.input as NonNullable<T>;
      input.handleChange = this.handleChanges(idx);
    });
    return inputs;
  }

  LabelledInputs = (
    el: LabelledInputProps<T>,
    id: number
  ) => <LabelledInput key={id} {...el}></LabelledInput>;

  mapLabelledInputs() {
    const inputs = this.buildInputs();
    let mappedInputs = inputs.map(this.LabelledInputs);
    return <>{mappedInputs}</>;
  }

  Html = (props: Form_v3Props<T>) => {
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
    let Element = this.StyledHtml;
    console.log(this.state);
    return (
      <Element
        inputs={this.props.inputs}
        name=""
      ></Element>
    );
  }
}
