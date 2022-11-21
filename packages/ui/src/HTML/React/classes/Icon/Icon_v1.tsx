import styled, {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
("../../lib/types");
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
export type Icon_v1Datas = {};
export type Icon_v1Booleans = {};
export type Icon_v1Props = NoizProps<
  Icon_v1Datas & Icon_v1Booleans
>;
export type Icon_v1ClassBooleans = {
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
};
export type Icon_v1ClassProps = NoizDatas<Icon_v1Props> &
  Icon_v1ClassBooleans;
export type Icon_v1AsChild = MakeAsChild<
  "Icon",
  Icon_v1ClassProps
>;
export type StyledSvgProps = {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
};
////////////

export const Icon_v1 = class extends BaseNoiz<
  Icon_v1Datas,
  Icon_v1ClassProps
> {
  constructor(props: Icon_v1ClassProps) {
    super(props);
  }

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
    <Icon_v1.StyledSvg
      filled={props.filled}
      stroked={props.stroked}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      {props.children}
    </Icon_v1.StyledSvg>
  );

  ButtonedHtml(props: {
    Component: (props: Icon_v1Props) => JSX.Element;
  }) {
    const { Component } = props;
    return () => (
      <button>
        <Component></Component>
      </button>
    );
  }

  Buttoned = (props: {
    Component: (props: Icon_v1Props) => JSX.Element;
  }) => styled(this.ButtonedHtml(props))``;

  static Svg51 = (
    props: NoizProps<StyledSvgProps, true>
  ) => (
    <Icon_v1.StyledSvg
      filled={props.filled}
      stroked={props.stroked}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
    >
      {props.children}
    </Icon_v1.StyledSvg>
  );

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
