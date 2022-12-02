import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import {
  Like as LikeIcon,
  Moon as MoonIcon,
  Account as AccountIcon,
  LogoZion as ZionIcon,
  Album as AlbumIcon,
  ArrowBack as ArrowBackIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  FilterAlt as FilterAltIcon,
  Home as HomeIcon,
  Repost as RepostIcon,
  Search as SearchIcon,
  Sun as SunIcon,
  Trending as TrendingIcon,
  More_Normal as More_NormalIcon,
  Queue as QueueIcon,
  Share as ShareIcon,
  Tracks as TracksIcon,
  Twitter as TwitterIcon,
  ScrollToTop as ScrollToTopIcon,
} from "./";

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

export class Svg<S extends string = string> {
  name: S;
  component: (props: Icon_v3Props) => JSX.Element;
  constructor(
    name: S,
    component: (props: Icon_v3Props) => JSX.Element
  ) {
    this.name = name;
    this.component = component;
  }
}

const account = new Svg("account", AccountIcon);
const album = new Svg("album", AlbumIcon);
const arrowBack = new Svg("arrowBack", ArrowBackIcon);
const arrowLeft = new Svg("arrowLeft", ArrowLeftIcon);

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
  LogoZion = ZionIcon;
  ArrowLeft = ArrowLeftIcon;
  ArrowRight = ArrowRightIcon;

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
    if (this.props.arrowLeft) Icon = this.ArrowLeft;
    if (this.props.arrowRight) Icon = this.ArrowRight;
    // TODO #27 @ariannatnl finire di mettere le icone anche qui
    // let Element = this.makeElement();
    return <Icon></Icon>;
  }
}
