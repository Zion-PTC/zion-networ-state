import styled from "styled-components";
// import { BaseNoiz } from "../../lib/global/BaseNoiz";
// import {
//   // MakeAsChild,
//   // MakeAsChild,
//   // NoizDatas,
// } from "../../lib/types";

///////
type SmalleData = { age: number };
type SmalleBooleans = { total?: boolean };
type SmalleProps = NoizProps<SmalleData & SmalleBooleans>;
type SmalleClassProps = NoizDatas<SmalleProps>;
type SmalleAsChild = MakeAsChild<
  "Smalle",
  SmalleClassProps
>;

class Smalle extends BaseNoiz<SmalleData, SmalleBooleans> {
  constructor(props: SmalleClassProps) {
    super(props);
  }
  Html = (props: SmalleProps) => (
    <div className={props.className}>
      <p>{props.age}</p>
      <p>{props.age}</p>
    </div>
  );
  Style = styled(this.Html)``;
  Mapper = Smalle.mapperFactory(this.Style);
  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}

/////
type FCDatas = {
  name: string;
  onClick: () => void;
};
type FCBooleans = { primary?: boolean };
type FCProps = NoizProps<FCDatas & FCBooleans>;
type FCClassProps = NoizDatas<FCProps>;
type FCAsChild = MakeAsChild<"FC", FCClassProps>;

class FC extends BaseNoiz<FCProps, {}> {
  constructor(props: FCClassProps) {
    super(props);
  }
  Html = (props: FCProps) => (
    <div
      onClick={props.onClick}
      className={props.className}
    >
      {props.name}
    </div>
  );
  Style = styled(this.Html)``;
  Mapper = Smalle.mapperFactory(this.Style);
  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}

///////
type Client1Datas = {
  name: string;
  onClick: () => void;
};
type Client1Booleans = {
  exotic?: boolean;
};
type Client1Props = NoizProps<
  Client1Datas &
    Client1Booleans &
    FCAsChild &
    SmalleAsChild
>;
type Client1ClassProps = NoizDatas<Client1Props>;
type Client1AsChild = MakeAsChild<
  "Client1",
  Client1ClassProps
>;

class Client1 extends BaseNoiz<Client1Props, {}> {
  constructor(props: Client1ClassProps) {
    super(props);
  }
  Html = (props: Client1Props) => (
    <div
      onClick={props.onClick}
      className={props.className}
    >
      <FC datas={...props.FC}></FC>
      <Smalle datas={...props.Smalle}></Smalle>
      <p>{props.name}</p>
    </div>
  );
}

//////////
const Client1Styled = styled(Client1)``;

type Client2Datas = {
  text: string;
};
type Client2Booleans = {
  main?: boolean;
};
type Client2Props = NoizProps<
  Client2Datas & Client2Booleans & Client1AsChild,
  true
>;

type Client2ClassProps = NoizDatas<Client2Props>;

export type Client2AsAChild = MakeAsChild<
  "Client2",
  Client2ClassProps
>;

export class Client2 extends BaseNoiz<Client2Props, {}> {
  constructor(props: Client2ClassProps) {
    super(props);
  }
  Html = (props: Client2Props) => (
    <div className={props.className}>
      <Client1Styled datas={...props.Client1} />
    </div>
  );
  Style = styled(this.Html)``;
  Mapper = Client2.mapperFactory(this.Style);
  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}

// const Bla = styled(Client2)``;

// export const Athing = styled.div`
//   ${Bla}
// `;
