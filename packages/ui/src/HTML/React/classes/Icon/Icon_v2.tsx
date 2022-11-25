import { ReactNode } from "react";
import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import { NoizProps, MakeAsChild } from "../../lib/types";

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

///// TYPES
export type Icon_v2Datas = {};

export type Icon_v2Booleans = {};

export type Icon_v2Props = NoizProps<
  Icon_v2Datas & Icon_v2Booleans
>;

export type Icon_v2ClassBooleans = {
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
};

export type Icon_v2ClassProps = {
  datas: {
    css?: string | undefined;
    className?: string | undefined;
  }[];
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
  children?: ReactNode | undefined;
};

export type Icon_v2AsChild = MakeAsChild<
  "Icon",
  Icon_v2ClassProps
>;

export type StyledSvgProps = {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
};

////////////
export interface Icon_v2 {}

export class Svg<S extends string = string> {
  name: S;
  component: (
    props: NoizProps<StyledSvgProps, true>
  ) => JSX.Element;
  constructor(
    name: S,
    component: (
      props: NoizProps<StyledSvgProps, true>
    ) => JSX.Element
  ) {
    this.name = name;
    this.component = component;
  }
}

const account = new Svg("account", AccountIcon);
const album = new Svg("album", AlbumIcon);
const arrowBack = new Svg("arrowBack", ArrowBackIcon);
const arrowLeft = new Svg("arrowLeft", ArrowLeftIcon);
// TODO @ariannatnl finire di aggiungere icone

export const Icon_v2 = class extends BaseNoiz<
  Icon_v2Datas,
  Icon_v2ClassProps
> {
  static StyledSvg = styled.svg<StyledSvgProps>`
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

  static Svg24 = (
    props: NoizProps<StyledSvgProps, true>
  ) => (
    <Icon_v2.StyledSvg
      filled={props.filled}
      stroked={props.stroked}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      {props.children}
    </Icon_v2.StyledSvg>
  );

  static Svg51 = (
    props: NoizProps<StyledSvgProps, true>
  ) => (
    <Icon_v2.StyledSvg
      filled={props.filled}
      stroked={props.stroked}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
    >
      {props.children}
    </Icon_v2.StyledSvg>
  );

  static Svgs: Svg[] = [
    account,
    album,
    arrowBack,
    arrowLeft,
  ];

  static svgslist(): string[] {
    return Icon_v2.Svgs.map(Svg => {
      return Svg.name;
    });
  }

  static SvgComponent(
    type: typeof Icon_v2["Svgs"][number]["name"]
  ) {
    return Icon_v2.Svgs.find(svg => svg.name === type);
  }

  constructor(props: Icon_v2ClassProps) {
    super(props);
  }

  ButtonedHtml(props: {
    Component: (props: Icon_v2Props) => JSX.Element;
  }) {
    const { Component } = props;
    return () => (
      <button>
        <Component></Component>
      </button>
    );
  }

  Buttoned = (props: {
    Component: (props: Icon_v2Props) => JSX.Element;
  }) => styled(this.ButtonedHtml(props))``;

  LogoZion = ZionIcon;

  Like = LikeIcon;

  Moon = MoonIcon;

  Account = AccountIcon;

  Album = AlbumIcon;

  ArrowBack = ArrowBackIcon;

  ArrowLeft = ArrowLeftIcon;

  ArrowRight = ArrowRightIcon;

  FilterAlt = FilterAltIcon;

  Home = HomeIcon;

  Repost = RepostIcon;

  Search = SearchIcon;

  Sun = SunIcon;

  Trending = TrendingIcon;

  More_Normal = More_NormalIcon;

  Queue = QueueIcon;

  Share = ShareIcon;

  Tracks = TracksIcon;

  Twitter = TwitterIcon;

  ScrollToTop = ScrollToTopIcon;

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
    if (this.props.scrollToTop) Icon = this.ScrollToTop;
    if (this.props.more_Normal) Icon = this.More_Normal;
    if (this.props.queue) Icon = this.Queue;
    if (this.props.share) Icon = this.Share;
    if (this.props.tracks) Icon = this.Tracks;
    if (this.props.twitter) Icon = this.Twitter;
    if (this.props.arrowBack) Icon = this.ArrowBack;
    if (this.props.arrowRight) Icon = this.ArrowRight;
    if (this.props.arrowLeft) Icon = this.ArrowLeft;
    if (this.props.filterAlt) Icon = this.FilterAlt;
    if (this.props.home) Icon = this.Home;
    if (this.props.repost) Icon = this.Repost;
    if (this.props.search) Icon = this.Search;
    if (this.props.sun) Icon = this.Sun;
    if (this.props.trending) Icon = this.Trending;
    if (this.props.album) Icon = this.Album;
    if (this.props.account) Icon = this.Account;
    if (this.props.like) Icon = this.Like;
    if (this.props.moon) Icon = this.Moon;
    if (this.props.buttoned)
      Icon = this.Buttoned({ Component: Icon });
    return <Icon {...this.props.datas[0]}></Icon>;
  }
};
