import { ChangeEvent } from "react";
import styled from "styled-components";
import {
  InputType,
  BaseNoizProps,
} from "../../../lib/global";
import { GComponent } from "../../../lib/global/BaseNoiz/BaseNoiz_v3";

export interface Input_v2Props<T> extends BaseNoizProps {
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: T;
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export class Input_v2Props<T> extends BaseNoizProps {
  constructor(props: Input_v2Props<T>) {
    super(props);
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
export interface Input_v2State {}

export interface Input_v2<T>
  extends BaseNoiz<Input_v2Props<T>, Input_v2State> {
  onChange(
    props: Input_v2Props<T>
  ): (e: ChangeEvent<HTMLInputElement>) => void;
  Html: GComponent<Input_v2Props<T>>;
}

export class Input_v2<
  T extends string | number | readonly string[] | undefined
> extends BaseNoiz<Input_v2Props<T>, Input_v2State> {
  onChange =
    (props: Input_v2Props<T>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      if (props.preventDefault) e.preventDefault();
      return props.handleChange(e);
    };

  Html = (props: Input_v2Props<T>) => {
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
    let Element = this.StyledHtml;
    return <Element {...this.props}></Element>;
  }
}
