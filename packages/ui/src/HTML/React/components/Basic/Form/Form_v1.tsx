import styled from "styled-components";
import { PropsWithChildren, useState } from "react";
import { Input, InputProps } from "../Input";
import { handleChange } from "../../../lib/util";
import { handleSubmit } from "../../../lib/util/handleSubmit";
import { callbackifyUseState } from "../../../lib/util/callbackifyUseState";

type Form_v1Datas = {};

type Form_v1Css = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = Form_v1Datas & Form_v1Css;
type FromLibrary = StyledDefault;

export type Form_v1Props = ToEdit & FromLibrary;

export const Form_v1Data = (
  props: PropsWithChildren<Form_v1Props>
) => {
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

  const inputProps: InputProps = {
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
        <Input {...inputProps} />
      </label>
    </form>
  );
};

export const Form_v1 = styled(Form_v1Data)`
  width: fit-content;
  /* height: 2rem; */
  place-self: center;
  label {
    display: inline;
    p {
      margin-right: 0.3rem;
      display: inline;
    }
    input {
      display: inline;
      padding-left: 0.5rem;
    }
  }
`;
