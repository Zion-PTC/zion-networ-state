import styled from "styled-components";
import { Input, InputAsChild } from "../Input";

/////// TYPES
export type Label_v1Data = { name: string };

export type Label_v1Booleans = {};

export type Label_v1Props = NoizProps<
  Label_v1Data & Label_v1Booleans & InputAsChild
>;

export type Label_v1ClassProps = NoizDatas<Label_v1Props>;

export type Label_v1AsChild = MakeAsChild<
  "Label",
  Label_v1ClassProps
>;
/////////////

////////CLASS
export class Label_v1 extends BaseNoiz<
  Label_v1Data & InputAsChild,
  Label_v1Booleans
> {
  constructor(props: Label_v1ClassProps) {
    super(props);
  }
  Html = (props: Label_v1Props) => {
    return (
      <label className={props.className}>
        <p>{props.name}</p>
        <Input datas={...props.Input} />
      </label>
    );
  };

  Style = styled(this.Html)``;

  Mapper = Label_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
