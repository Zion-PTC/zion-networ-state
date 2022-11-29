import styled from "styled-components";
import {
  MakeAsChild,
  NoizDatas,
  NoizProps,
} from "../../../lib/types";
import { Flatten } from "../../../lib/utility";
import {
  Input,
  InputAsChild,
  InputClassProps,
  InputData,
} from "../Input";

/////// TYPES
export type Label_v1Data = Flatten<
  { name: string } & InputData
>;

export type Label_v1Booleans = {};

export type Label_v1Props = NoizProps<
  Label_v1Data & Label_v1Booleans & InputAsChild
>;

export type Label_v1ClassBooleans = {
  isMultiple?: boolean;
};

export type Label_v1ClassProps = NoizDatas<Label_v1Props>;

export type Label_v1State = {
  isMultiple: boolean;
};

export type Label_v1AsChild = MakeAsChild<
  "Label",
  Label_v1ClassProps
>;
/////////////

////////CLASS
export class Label_v1 extends BaseNoiz<
  Label_v1Data & InputAsChild,
  Label_v1Booleans,
  Label_v1State
> {
  constructor(props: Label_v1ClassProps) {
    super(props);
    if (this.props.datas.length === 1)
      this.state = { isMultiple: false };
    else this.state = { isMultiple: true };
  }
  Html = (props: Label_v1Props) => {
    const {
      handleChange,
      placeholder,
      type,
      min,
      max,
      step,
      preventDefault,
    } = props;
    const inputProps: InputClassProps = {
      datas: [
        {
          handleChange,
          placeholder,
          type,
          min,
          max,
          step,
          preventDefault,
        },
      ],
    };
    return (
      <>
        <label className={props.className}>
          <p>{props.name}</p>
          <Input datas={inputProps.datas} />
        </label>
      </>
    );
  };

  Style = styled(this.Html)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
      display: inline;
      margin-right: 0.3rem;
    }
    input {
      display: inline;
    }
  `;

  Mapper = Label_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
