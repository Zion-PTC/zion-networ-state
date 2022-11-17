import { ChangeEvent } from "react";
import styled from "styled-components";

/////// TYPES
export type Input_v1Data<
  T extends InputValue = InputValue
> = {
  type: InputType;
  placeholder: string;
  preventDefault: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: T;
};

export type Input_v1Booleans = { small?: boolean };

export type Input_v1Props = NoizProps<
  Input_v1Data & Input_v1Booleans
>;

export type Input_v1ClassProps = NoizDatas<Input_v1Props>;

export type Input_v1AsChild = MakeAsChild<
  "Input",
  Input_v1ClassProps
>;
/////////////

////////CLASS
export class Input_v1 extends BaseNoiz<
  Input_v1Data,
  Input_v1Booleans
> {
  constructor(props: Input_v1ClassProps) {
    super(props);
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
      />
    );
  };

  Style = styled(this.Html)``;

  Mapper = Input_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
