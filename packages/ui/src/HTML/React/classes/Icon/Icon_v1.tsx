import styled from "styled-components";
import { LogoZion } from "../../components/Icons";
("../../lib/types");
import { Like as LikeIcon } from "./Like";
import { Moon as MoonIcon } from "./Moon";

///// TYPES
export type Icon_v1Datas = {};
export type Icon_v1Booleans = {};
export type Icon_v1Props = NoizProps<
  Icon_v1Datas & Icon_v1Booleans
>;
export type Icon_v1ClassBooleans = {
  like?: boolean;
  moon?: boolean;
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
};
////////////

export const Icon_v1 = class extends BaseNoiz<
  Icon_v1Datas,
  Icon_v1ClassBooleans
> {
  constructor(props: Icon_v1ClassProps) {
    super(props);
  }
  static StyledSvg = styled.svg<StyledSvgProps>`
    path {
      fill: ${props =>
        props.filled
          ? props.theme.primary.borderColor
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
  Like = LikeIcon;
  Moon = MoonIcon;
  render() {
    let Icon: () => JSX.Element = LogoZion;
    if (this.props.like) Icon = this.Like;
    if (this.props.moon) Icon = this.Moon;
    return <Icon {...this.props.datas[0]}></Icon>;
  }
};
