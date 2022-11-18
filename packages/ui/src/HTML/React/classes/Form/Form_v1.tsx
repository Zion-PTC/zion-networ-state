import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import {
  callbackifyUseState,
  handleChange,
  handleSubmit,
} from "../../lib/util";
import { Input, InputAsChild } from "../Basic";

/////// TYPES
export type Form_v1Data<
  T extends InputValue = InputValue
> = {
  type: InputType;
  placeholder: string;
  preventDefault: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: T;
};
export type Form_v1Booleans = {};
export type Form_v1Props = NoizProps<
  Form_v1Data & Form_v1Booleans & InputAsChild
>;
export type Form_v1ClassProps = NoizDatas<Form_v1Props>;
export type Form_v1AsChild = MakeAsChild<
  "Form",
  Form_v1ClassProps
>;
/////////////

////////CLASS
export class Form_v1 extends BaseNoiz<
  Form_v1Data & InputAsChild,
  Form_v1Booleans
> {
  constructor(props: Form_v1ClassProps) {
    super(props);
    // this.state.inputValue = ""
  }
  Form = (props: Form_v1Props) => {
    const [inputValue, setInputValue] = useState("");
    const [formEntry, setFormEntry] = useState("");

    const _handleSubmit = handleSubmit(
      [setFormEntry],
      inputValue,
      setInputValue
    );

    const callbackedSetInputValue =
      callbackifyUseState(setInputValue);

    const _handleChange = handleChange([
      callbackedSetInputValue,
    ]);

    const inputProps: any = {
      handleChange: _handleChange,
      placeholder: "mi curi",
      preventDefault: true,
      type: "text",
      value: inputValue,
    };

    console.log(formEntry);
    return (
      <form
        className={props.className}
        onSubmit={_handleSubmit}
      >
        <label>
          <p>prova</p>
          <Input datas={inputProps} />
        </label>
      </form>
    );
  };

  Style = styled(this.Form)``;

  Mapper = Form_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
