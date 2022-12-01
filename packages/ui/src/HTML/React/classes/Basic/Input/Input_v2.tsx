import { ChangeEvent } from "react";
import styled from "styled-components";
import {
  InputType,
  InputValue,
  BaseNoizProps,
} from "../../../lib/global";
import { GComponent } from "../../../lib/global/BaseNoiz/BaseNoiz_v3";

export interface Input_v2PropsType<
  T extends InputValue = InputValue
> {
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: T;
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export interface Input_v2Props
  extends BuildProps<Input_v2PropsType>,
    BaseNoizProps {}

export class Input_v2Props extends BaseNoizProps {
  constructor(props: BuildProps<Input_v2PropsType>) {
    super(props);
    this.type = props.type;
    this.placeholder = props.placeholder;
    this.handleChange = props.handleChange;
    this.value = props.value;
    this.preventDefault = props.preventDefault;
    this.min = props.min;
    this.max = props.max;
    this.step = props.step;
    this.datas = props.datas;
  }
}
export interface Input_v2State {}

export interface Input_v2
  extends BaseNoiz<Input_v2Props, Input_v2State> {
  onChange(
    props: Input_v2Props
  ): (e: ChangeEvent<HTMLInputElement>) => void;
  Html: GComponent<Input_v2Props>;
}

export class Input_v2 extends BaseNoiz<
  Input_v2Props,
  Input_v2State
> {
  onChange =
    (props: Input_v2Props) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      if (props.preventDefault) e.preventDefault();
      return props.handleChange(e);
    };

  Html = (props: Input_v2Props) => {
    return (
      <input
        className={props.className}
        css={props.css}
        type={props.type}
        placeholder={props.placeholder}
        onChange={this.onChange(props)}
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
      />
    );
  };

  StyledHtml = styled(this.Html)``;

  render() {
    let Element = this.makeElement();
    return <Element {...this.props}></Element>;
  }
}
