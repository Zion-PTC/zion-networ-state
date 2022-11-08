import styled, { css } from "styled-components";
import { PropsWithChildren } from "react";
import { Input, InputProps } from "../Input";

type Label_v1Datas = {
  input: InputProps;
  name: string;
};

type Label_v1Css = {
  fillable?: boolean;
};

type ToEdit = Label_v1Datas & Label_v1Css;
type FromLibrary = StyledDefault;

export type Label_v1Props = ToEdit & FromLibrary;

export const Label_v1Data = (
  props: PropsWithChildren<Label_v1Props>
) => {
  return (
    <label className={props.className}>
      <p>{props.name}</p>
      <Input
        handleChange={props.input.handleChange}
        placeholder={props.input.placeholder}
        preventDefault={props.input.preventDefault}
        type={props.input.type}
        value={props.input.value}
      />
    </label>
  );
};

const fillable = css`
  width: 100%;
  height: 100%;
`;

export const Label_v1 = styled(Label_v1Data)`
  ${props => props.fillable && fillable}
  display: inline;
  p {
    margin-right: 0.3rem;
    display: inline;
  }
  input {
    display: inline;
    padding-left: 0.5rem;
  }
`;
