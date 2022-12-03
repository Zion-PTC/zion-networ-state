import { ChangeEvent } from "react";
import styled from "styled-components";
import { InputType } from "../../../lib/global";
import {
  GComponent,
  StyledGComponent,
} from "../../../lib/global/BaseNoiz/BaseNoiz_v3";
import { InputProps, InputPropsType } from "../Input";
import { Input_v2 } from "../Input/Input_v2";

export interface Label_v2PropsType extends InputPropsType {
  name: string;
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export interface Label_v2Props
  extends Label_v2PropsType,
    BaseNoizProps {}
export class Label_v2Props extends BaseNoizProps {}

export interface Label_v2State {}
export class Label_v2State {}

export interface Label_v2
  extends BaseNoiz<Label_v2Props, Label_v2State> {
  Html: GComponent<Label_v2Props>;
  StyledHtml: StyledGComponent<Label_v2Props>;
}

export class Label_v2 extends BaseNoiz<
  Label_v2Props,
  Label_v2State
> {
  Html = (props: Label_v2Props) => {
    const {
      name,
      handleChange,
      placeholder,
      type,
      min,
      max,
      step,
      preventDefault,
      value,
    } = props;

    const inputProps: InputProps = new InputProps();
    inputProps.preventDefault = preventDefault;
    inputProps.handleChange = handleChange;
    inputProps.placeholder = placeholder;
    inputProps.value = value;
    inputProps.step = step;
    inputProps.type = type;
    inputProps.max = max;
    inputProps.min = min;
    return (
      <>
        <label className={props.className}>
          <p>{name}</p>
          <Input_v2 {...inputProps} />
        </label>
      </>
    );
  };

  StyledHtml = styled(this.Html)``;

  render() {
    let Element = this.StyledHtml;
    return <Element {...this.props}></Element>;
  }
}
