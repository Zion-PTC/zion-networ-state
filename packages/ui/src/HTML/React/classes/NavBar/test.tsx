import styled from "styled-components";

export interface testProps extends BaseNoizProps {
  name: string;
  boo: boolean;
  foo?: number;
}

export class testProps extends BaseNoizProps {
  constructor(props: testProps) {
    super(props);
    this.name = props.name;
    this.boo = props.boo;
  }
}

export interface testState {}

export class testState {}

export interface Test
  extends BaseNoiz<testProps, testState> {}

export class Test extends BaseNoiz<testProps, testState> {
  constructor(props: testProps) {
    super(props);
  }
  Html = (props: testProps) => {
    return <h1>{props.children}</h1>;
  };
  StyledHtml = styled(this.Html)``;
  render() {
    let Element = this.StyledHtml;
    return <Element {...this.props}></Element>;
  }
}

function Profile(props: {
  name: string;
  type1?: boolean;
  type2: boolean;
}) {
  const type1 = (
    <div>
      <Test boo={true} name={props.name} />
    </div>
  );

  const type2 = (
    <div>
      <p></p>
      <Test boo={true} name={props.name} />
    </div>
  );
  let Element: JSX.Element = <></>;
  if (props.type1) Element = type1;
  if (props.type2) Element = type2;
  return Element;
}

export async function getStateProps() {
  return {
    data: [{ name: "il nome" }],
  };
}

function App(props: { data: { name: string }[] }) {
  if (!props.data[0]) throw new Error("");
  return <Profile name={props.data[0].name} />;
}

function Donno(p: { boh: any }) {
  return <App data={[{ name: "" }]} />;
}
