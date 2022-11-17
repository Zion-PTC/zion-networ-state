import styled from "styled-components";

/////// TYPES
export type testSipData = { age: number };

export type testSipBooleans = { small?: boolean };

export type testSipProps = NoizProps<
  testSipData & testSipBooleans
>;

export type testSipClassProps = NoizDatas<testSipProps>;

export type testSipAsChild = MakeAsChild<
  "NavBar",
  testSipClassProps
>;
/////////////

////////CLASS
export class testSip extends BaseNoiz<
  testSipData,
  testSipBooleans
> {
  constructor(props: testSipClassProps) {
    super(props);
  }
  Html = (props: testSipProps) => {
    return (
      <div className={props.className}>{props.age}</div>
    );
  };

  Style = styled(this.Html)``;

  Mapper = testSip.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
