import { dataGuard } from "@zionstate/utils";
import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import { Account } from "./Account";
import { Album } from "./Album";
import { ArrowBack } from "./ArrowBack";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { LogoZion } from "./LogoZion";

export interface Icon_v3PropsType {}

export type StyledSvgProps = {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
};

export interface Icon_v3Props extends BaseNoizProps {
  like?: boolean;
  moon?: boolean;
  account?: boolean;
  album?: boolean;
  arrowBack?: boolean;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  filterAlt?: boolean;
  home?: boolean;
  repost?: boolean;
  search?: boolean;
  sun?: boolean;
  trending?: boolean;
  more_Normal?: boolean;
  queue?: boolean;
  share?: boolean;
  tracks?: boolean;
  twitter?: boolean;
  scrollToTop?: boolean;
  buttoned?: boolean;
  svg?: {
    filled?: boolean | undefined;
    stroked?: boolean | undefined;
    secondary?: boolean | undefined;
  };
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
}

export class Icon_v3Props extends BaseNoizProps {
  constructor(props: Icon_v3Props) {
    super(props);
    this.account = props.account;
    this.album = props.album;
    // TODO #26 @ariannatnl aggiungere il reseto delle props
  }
}
export interface Icon_v3State {}

export class Icon_v3State {}

export interface Svg<S extends string = string> {
  name: S;
  Component: () => JSX.Element;
  bla: string;
}

export class Svg<S extends string = string> {
  constructor(name: S, Component: () => JSX.Element) {
    this.name = name;
    this.Component = Component;
  }
}
const ACCOUNT = "account";
const account = new Svg(ACCOUNT, Account);
const ALBUM = "album";
const album = new Svg(ALBUM, Album);
const arrowBack = new Svg("arrowBack", ArrowBack);
const arrowLeft = new Svg("arrowLeft", ArrowLeft);
const arrowRight = new Svg("arrowRight", ArrowRight);
const logoZion = new Svg("logozion", LogoZion);

export class Icon_v3 extends BaseNoiz<
  Icon_v3Props,
  Icon_v3State
> {
  static StyledSvg = styled.svg<StyledSvgProps>`
    // #10 aggiungere qui
    path {
      fill: ${props =>
        props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : ""};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
    circle {
      fill: ${props =>
        props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : ""};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
  `;

  static Svg24 = (props: Icon_v3Props) => (
    <Icon_v3.StyledSvg
      filled={props.filled}
      stroked={props.stroked}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      {props.children}
    </Icon_v3.StyledSvg>
  );

  static Svg51 = (props: Icon_v3Props) => (
    <Icon_v3.StyledSvg
      filled={props.filled}
      stroked={props.stroked}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
    >
      {props.children}
    </Icon_v3.StyledSvg>
  );

  static Svgs: Svg[] = [
    account,
    album,
    arrowBack,
    arrowLeft,
    arrowRight,
    logoZion,
  ];

  static svgslist(): string[] {
    return Icon_v3.Svgs.map(Svg => {
      return Svg.name;
    });
  }

  static SvgComponent(
    type: typeof Icon_v3["Svgs"][number]["name"]
  ) {
    return Icon_v3.Svgs.find(svg => svg.name === type);
  }

  constructor(props: Icon_v3Props) {
    super(props);
  }
  LogoZion = LogoZion;
  // ArrowLeft = ArrowLeftIcon;
  // ArrowRight = ArrowRightIcon;

  Html = (props: Icon_v3Props) => {
    return <h1>{props.children}</h1>;
  };
  StyledHtml = styled(this.Html)``;

  render() {
    const LogoZion = this.LogoZion;
    let Icon:
      | (() => JSX.Element)
      | StyledComponent<
          () => JSX.Element,
          DefaultTheme,
          {},
          never
        > = LogoZion;
    if (this.props.arrowLeft)
      Icon = dataGuard(Icon_v3.Svgs[3], "").Component;
    if (this.props.arrowRight)
      Icon = dataGuard(Icon_v3.Svgs[4], "").Component;
    // TODO #27 @ariannatnl finire di mettere le icone anche qui
    // let Element = this.makeElement();
    return <Icon></Icon>;
  }
}
