import { ChangeEvent } from "react";
import styled from "styled-components";
import {
  InputType,
  BaseNoizProps,
} from "../../../lib/global";
import { GComponent } from "../../../lib/global/BaseNoiz/BaseNoiz_v3";

export interface Input_v2Props extends BaseNoizProps {
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
}
export class Input_v2Props extends BaseNoizProps {}

export interface Input_v2State {}
export class Input_v2State {}

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
    let Element = this.StyledHtml;
    return <Element {...this.props}></Element>;
  }
}
