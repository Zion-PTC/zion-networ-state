import styled from "styled-components";
import {
  GComponent,
  StyledGComponent,
} from "../../../lib/global/BaseNoiz/BaseNoiz_v3";
import { InputProps, InputPropsType } from "../Input";
import { Input_v2 } from "../Input/Input_v2";

export interface Label_v2PropsType extends InputPropsType {
  name: string;
}

export interface Label_v2Props
  extends BuildProps<Label_v2PropsType>,
    BaseNoizProps {}

export class Label_v2Props extends BaseNoizProps {
  constructor(props: Label_v2Props) {
    super(props);
    this.name = props.name;
    this.datas = props.datas;
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
      multiply,
      datas,
      value,
    } = props;

    const inputProps: InputProps = new InputProps({
      handleChange,
      placeholder,
      type,
      max,
      min,
      step,
      multiply,
      datas,
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
    let Element = this.makeElement();
    return <Element {...this.props}></Element>;
  }
}
