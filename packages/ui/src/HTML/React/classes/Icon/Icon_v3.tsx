import { dataGuard } from "@zionstate/utils";
import styled from "styled-components";
import { LogoZion } from "./LogoZion";
import { Svg as SvgClass } from "../Basic/Svg";
import { album } from "./Album/Album_v1";
import path from "node:path/posix";
import { arrowBack } from "./ArrowBack/ArrowBack_v1";
import { account } from "./Account/Account_v1";
import { Arrowleft } from "./ArrowLeft/ArrowLeft_v1";
import { IconPath, IconPathOptions } from "../IconPath";
import { arrowRight } from "./ArrowRight/ArrowRight_v1";
import { filterAlt } from "./FilterAlt/FilterAlt_v1";
import { twitter } from "./Twitter/Twitter_v1";
import { trending } from "./Trending/Trending_v1";
import { tracks } from "./Tracks/Tracks_v1";
import { logoZion } from "./LogoZion/LogoZion_v1";
import { home } from "./Home/Home_v1";
import { sun } from "./Sun/Sun_v1";
import { share } from "./Share/Share_v1";
import { search } from "./Search/Search_v1";
import { scrollToTop } from "./ScrollToTop/ScrollToTop_v1";
import { repost } from "./Repost/Repost_v1";
import { queue } from "./Queue/Queue_v1";
import { like } from "./Like/Like_v1";
import { moon } from "./Moon/Moon_v1";
import { more_normal } from "./More_Normal/More_Normal_v1";

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

export class Icon_v3 extends BaseNoiz<
  Icon_v3Props,
  Icon_v3State
> {
  static IconPaths: IconPath[] = [
    account,
    album,
    arrowBack,
    Arrowleft,
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
