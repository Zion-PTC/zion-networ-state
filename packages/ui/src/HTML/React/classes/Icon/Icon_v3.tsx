import { dataGuard } from "@zionstate/utils";
import styled from "styled-components";
import { account } from "./Account/Account_v1";
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
import { Svg as SvgClass } from "../Basic/Svg";
import { album } from "./Album/Album_v1";
import path from "node:path/posix";
import { arrowBack } from "./ArrowBack/ArrowBack_v1";
import {
  IconPath,
  IconPathOptions,
  Icons,
} from "../IconPath";

export type StyledSvgProps = {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
};

export interface Icon_v3Props
  extends BaseNoizProps,
    IconPathOptions {
  svg?: {
    filled?: boolean | undefined;
    stroked?: boolean | undefined;
    secondary?: boolean | undefined;
  };
}
export class Icon_v3Props extends BaseNoizProps {}

export interface Icon_v3State {}
export class Icon_v3State {}

const arrowLeft = new IconPath(Icons.arrowLeft, ArrowLeft);
const arrowRight = new IconPath(
  Icons.arrowRight,
  ArrowRight
);
const filterAlt = new IconPath(Icons.filterAlt, FilterAlt);
const home = new IconPath(Icons.home, Home);
const like = new IconPath(Icons.like, Like);
const moon = new IconPath(Icons.moon, Moon);
const logoZion = new IconPath(Icons.logoZion, LogoZion);
const more_normal = new IconPath(
  Icons.more_normal,
  More_Normal
);
const queue = new IconPath(Icons.queue, Queue);
const repost = new IconPath(Icons.repost, Repost);
const scrollToTop = new IconPath(
  Icons.scrollToTop,
  ScrollToTop,
  "Svg51"
);
const search = new IconPath(Icons.search, Search);
const share = new IconPath(Icons.share, Share);
const sun = new IconPath(Icons.sun, Sun);
const tracks = new IconPath(Icons.tracks, Tracks);
const trending = new IconPath(Icons.trending, Trending);
const twitter = new IconPath(Icons.twitter, Twitter);

export class Icon_v3 extends BaseNoiz<
  Icon_v3Props,
  Icon_v3State
> {
  static IconPaths: IconPath[] = [
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
    return Icon_v3.IconPaths.map(path => {
      return path.name;
    });
  }

  static SvgComponent(
    type: typeof Icon_v3["IconPaths"][number]["name"]
  ) {
    return Icon_v3.IconPaths.find(
      path => path.name === type
    );
  }

  LogoZion = LogoZion;

  chooseIcon() {
    const LogoZion = this.LogoZion;
    let Icon: () => JSX.Element = LogoZion;
    Icon_v3.IconPaths.forEach((path, idx) => {
      if (this.props[path.name] === true) {
        Icon = dataGuard(
          Icon_v3.IconPaths[idx],
          ""
        ).Component;
      }
    });
    return Icon;
  }

  chooseIcon2() {
    let El: () => JSX.Element = () => <div>ciao</div>;
    Icon_v3.IconPaths.forEach(path => {
      if (this.props[path.name] === true)
        El = () => (
          <SvgClass
            filled={path.filled}
            stroked={path.stroked}
            secondary={path.secondary}
            layout="Svg24"
            style="defaultStyle"
          >
            {path.JsxPath}
          </SvgClass>
        );
    });
    return El;
  }

  render() {
    // let Layout = this.chooseLayout()
    let Icon: () => JSX.Element = this.chooseIcon();
    if (this.props.account) {
      Icon = this.chooseIcon2();
    }
    return <Icon></Icon>;
  }
}
