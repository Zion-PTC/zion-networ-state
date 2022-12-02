import { ChangeEvent } from "react";
import styled from "styled-components";
import { InputType } from "../../../lib/global";
import {
  GComponent,
  StyledGComponent,
} from "../../../lib/global/BaseNoiz/BaseNoiz_v3";
import { InputProps, InputPropsType } from "../Input";
import { Input_v2 } from "../Input/Input_v2";

export interface Label_v2PropsType<T>
  extends InputPropsType {
  name: string;
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: T;
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export interface Label_v2Props<T>
  extends Label_v2PropsType<T>,
    BaseNoizProps {}

export class Label_v2Props<T> extends BaseNoizProps {
  constructor(props: Label_v2Props<T>) {
    super(props);
    this.name = props.name;
    this.type = props.type;
    this.placeholder = props.placeholder;
    this.handleChange = props.handleChange;
    this.value = props.value;
    this.preventDefault = props.preventDefault;
    this.min = props.min;
    this.max = props.max;
    this.step = props.step;
  }
}
export interface Label_v2State {}

export interface Label_v2<T>
  extends BaseNoiz<Label_v2Props<T>, Label_v2State> {
  Html: GComponent<Label_v2Props<T>>;
  StyledHtml: StyledGComponent<Label_v2Props<T>>;
}

export class Label_v2<
  T extends string | number | readonly string[] | undefined
> extends BaseNoiz<Label_v2Props<T>, Label_v2State> {
  Html = (props: Label_v2Props<T>) => {
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

    const inputProps: InputProps<T> = new InputProps({
      handleChange,
      placeholder,
      type,
      max,
      min,
      step,
      preventDefault,
      value,
    });
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
