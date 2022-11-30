import { ChangeEvent } from "react";
import styled from "styled-components";
import { InputValue } from "../../../lib/global";
import { InputType } from "../../../lib/global";
import { NoizDatas } from "../../../lib/types";
import { MakeAsChild } from "../../../lib/types";
import { NoizProps } from "../../../lib/types";

/////// TYPES
export type Input_v1Data<
  T extends InputValue = InputValue
> = {
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: T;
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
};

export type Input_v1Booleans = { small?: boolean };

export type Input_v1Props = NoizProps<
  Input_v1Data & Input_v1Booleans
>;

export type Input_v1ClassBooleans = {
  isMultiple?: boolean;
};

export type Input_v1ClassProps = NoizDatas<
  Input_v1Props & Input_v1ClassBooleans
>;

export type Input_v1State = {
  isMultiple: boolean;
};

export type Input_v1AsChild = MakeAsChild<
  "Input",
  Input_v1ClassProps
>;
/////////////

////////CLASS
export class Input_v1 extends BaseNoiz<
  Input_v1Data,
  Input_v1Booleans,
  Input_v1State
> {
  constructor(props: Input_v1ClassProps) {
    super(props);
    if (this.props.datas.length === 1)
      this.state = { isMultiple: false };
    else this.state = { isMultiple: true };
  }

  Html = (props: Input_v1Props) => {
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
        min={props.min}
        max={props.max}
        step={props.step}
      />
    );
  };

  Style = styled(this.Html)``;

  Mapper = Input_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
