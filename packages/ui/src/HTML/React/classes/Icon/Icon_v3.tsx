import { dataGuard } from "@zionstate/utils";
import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import { BooleanizeUnions } from "../../lib/utility";
import { Account } from "./Account";
import { Album } from "./Album";
import { ArrowBack } from "./ArrowBack";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { FilterAlt } from "./FilterAlt";
import { Home } from "./Home";
import { Like } from "./Like";
import { LogoZion } from "./LogoZion";
import { Moon } from "./Moon";
import { More_Normal } from "./More_Normal";
import { Queue } from "./Queue";
import { Repost } from "./Repost";
import { ScrollToTop } from "./ScrollToTop";
import { Search } from "./Search";
import { Share } from "./Share";
import { Sun } from "./Sun";
import { Tracks } from "./Tracks";
import { Trending } from "./Trending";
import { Twitter } from "./Twitter";

export type StyledSvgProps = {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
};

enum Icons {
  account = "account",
  album = "album",
  like = "like",
  arrowBack = "arrowBack",
  arrowLeft = "arrowLeft",
  arrowRight = "arrowRight",
  logoZion = "logoZion",
  moon = "moon",
  filterAlt = "filterAlt",
  home = "home",
  repost = "repost",
  search = "search",
  sun = "sun",
  trending = "trending",
  more_normal = "more_normal",
  queue = "queue",
  share = "share",
  tracks = "tracks",
  twitter = "twitter",
  scrollToTop = "scrollToTop",
  buttoned = "buttoned",
  filled = "filled",
  stroked = "stroked",
  secondary = "secondary",
}
type IconsType = keyof typeof Icons;
type IconsOptions = BooleanizeUnions<IconsType>;

export interface Icon_v3Props
  extends BaseNoizProps,
    IconsOptions {
  svg?: {
    filled?: boolean | undefined;
    stroked?: boolean | undefined;
    secondary?: boolean | undefined;
  };
}

export class Icon_v3Props extends BaseNoizProps {
  // TODO #26 @ariannatnl aggiungere il reseto delle props
}
export interface Icon_v3State {}

export class Icon_v3State {}

export interface Svg {
  name: IconsType;
  Component: () => JSX.Element;
  bla: string;
}

export class Svg {
  constructor(
    name: IconsType,
    Component: () => JSX.Element
  ) {
    this.name = name;
    this.Component = Component;
  }
}
const account = new Svg(Icons.account, Account);
const album = new Svg(Icons.album, Album);
const arrowBack = new Svg(Icons.arrowBack, ArrowBack);
const arrowLeft = new Svg(Icons.arrowLeft, ArrowLeft);
const arrowRight = new Svg(Icons.arrowRight, ArrowRight);
const filterAlt = new Svg(Icons.filterAlt, FilterAlt);
const home = new Svg(Icons.home, Home);
const like = new Svg(Icons.like, Like);
const moon = new Svg(Icons.moon, Moon);
const logoZion = new Svg(Icons.logoZion, LogoZion);
const more_normal = new Svg(
  Icons.more_normal,
  More_Normal
);
const queue = new Svg(Icons.queue, Queue);
const repost = new Svg(Icons.repost, Repost);
const scrollToTop = new Svg(
  Icons.scrollToTop,
  ScrollToTop
);
const search = new Svg(Icons.search, Search);
const share = new Svg(Icons.share, Share);
const sun = new Svg(Icons.sun, Sun);
const tracks = new Svg(Icons.tracks, Tracks);
const trending = new Svg(Icons.trending, Trending);
const twitter = new Svg(Icons.twitter, Twitter);
// una volta create tutte le icone come istance di SVCG,
// aggiungerle nell'array più in basso

export class Icon_v3 extends BaseNoiz<
  Icon_v3Props,
  Icon_v3State
> {
  // aggiungere icone qui
  static Svgs: Svg[] = [
    account,
    album,
    arrowBack,
    arrowLeft,
    arrowRight,
    filterAlt,
    home,
    like,
    logoZion,
    moon,
    more_normal,
    queue,
    repost,
    scrollToTop,
    search,
    share,
    tracks,
    sun,
    trending,
    twitter,
  ];

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

  chooseIcon() {
    const LogoZion = this.LogoZion;
    let Icon: () => JSX.Element = LogoZion;
    Icon_v3.Svgs.forEach((svg, idx) => {
      if (this.props[svg.name] === true)
        Icon = dataGuard(Icon_v3.Svgs[idx], "").Component;
    });
    return Icon;
  }

  render() {
    const LogoZion = this.LogoZion;
    let Icon:
      | (() => JSX.Element)
      | StyledComponent<
          () => JSX.Element,
          DefaultTheme,
          {},
          never
        > = this.chooseIcon();
    return <Icon></Icon>;
  }
}
