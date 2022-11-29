import { node } from "@zionstate/utils";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { InputType, InputValue } from "../../lib/global";
import { MakeAsChild, NoizDatas } from "../../lib/types";
import { NoizProps } from "../../lib/types";
import { handleChange } from "../../lib/util";
import { callbackifyUseState } from "../../lib/util";
import { handleSubmit } from "../../lib/util";
import {
  Input,
  InputAsChild,
  Label as LabelledInput,
  LabelAsChild,
} from "../Basic";

const guard = node.dataGuard;

/////// TYPES
export type Form_v1Data<
  T extends InputValue = InputValue
> = {
  // type: InputType;
  // placeholder: string;
  // preventDefault: boolean;
  // handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // value: T;
} & LabelAsChild;

export type Form_v1Booleans = {};

export type Form_v1Props = NoizProps<
  Form_v1Data & Form_v1Booleans
>;

export type Form_v1ClassBooleans = { cia: boolean };

export type Form_v1ClassProps = NoizDatas<
  Form_v1Props & Form_v1Booleans
>;

export type Form_v1AsChild = MakeAsChild<
  "Form",
  Form_v1ClassProps
>;
/////////////

////////CLASS
export class Form_v1 extends BaseNoiz<
  Form_v1Data & Form_v1Booleans,
  Form_v1Booleans
> {
  constructor(props: Form_v1ClassProps) {
    super(props);
    // this.state.inputValue = ""
  }
  Html = (props: Form_v1Props) => {
    const { Label } = props;
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

    console.log(formEntry);
    return (
      <form
        className={props.className}
        onSubmit={_handleSubmit}
      >
        {/* <Input datas={Input_.datas} /> */}
        <LabelledInput datas={Label.datas}></LabelledInput>
      </form>
    );
  };

  Style = styled(this.Html)`
    display: grid;
    grid-auto-columns: max-content;
  `;

  Mapper = Form_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
