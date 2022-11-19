import styled from "styled-components";

/////// TYPES
export type Loading_v1Data = { type: "waves" };

export type Loading_v1Booleans = { display: boolean };

export type Loading_v1Props = NoizProps<
  Loading_v1Data & Loading_v1Booleans & utility.CssStyled
>;

export type Loading_v1ClassProps =
  NoizDatas<Loading_v1Props>;

export type Loading_v1AsChild = MakeAsChild<
  "Loading",
  Loading_v1ClassProps
>;
/////////////

////////CLASS
export class Loading_v1 extends BaseNoiz<
  Loading_v1Data,
  Loading_v1Booleans
> {
  constructor(props: Loading_v1ClassProps) {
    super(props);
  }
  Html = (props: Loading_v1Props) => {
    return (
      <div className={props.className}>{props.age}</div>
    );
  };

  Style = styled(this.Html)``;

  Mapper = Loading_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
