import styled from "styled-components";
import { ChangeEvent, PropsWithChildren } from "react";

type Input_v1Datas<T extends InputValue = InputValue> = {
  type: InputType;
  placeholder: string;
  preventDefault: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: T;
};

type Input_v1Css = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = Input_v1Datas & Input_v1Css;
type FromLibrary = StyledDefault;

export type Input_v1Props = ToEdit & FromLibrary;

type Input_v1Data = (
  props: PropsWithChildren<Input_v1Props>
) => JSX.Element;

export const Input_v1Data: Input_v1Data = props => {
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (props.preventDefault) e.preventDefault();
    return props.handleChange(e);
  }
  return (
    <input
      className={props.className}
      css={props.css}
      type={props.type}
      placeholder={props.placeholder}
      onChange={onChange}
      value={props.value}
    />
  );
};

export const Input_v1 = styled(Input_v1Data)``;
