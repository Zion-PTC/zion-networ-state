import styled, {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";
import {
  BasicComponentProps,
  Dimensions,
  utility,
} from "../../../lib/global.types";
import { checkGridSetting } from "../../../lib/util/checkGridSettings";

type backgroundAreas =
  | "position"
  | "backgroundColor"
  | "zIndex"
  | Dimensions;

type BackgroundAreaStyle = {
  css_?: utility.ZionCss<
    | "display"
    | "gridTemplateRows"
    | "position"
    | "height"
    | "backgroundColor",
    true
  > & {
    upper: utility.ZionCss<backgroundAreas, true>;
    bottom: utility.ZionCss<backgroundAreas, true>;
  };
  bottomBackgroundColor?: string;
  item?: boolean;
  profilePage?: boolean;
} & StyledDefault;

export const BackgroundArea = styled.div<BackgroundAreaStyle>`
  display: grid;
  ${props =>
    checkGridSetting(props as { profilePage: boolean })}
  #upper {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 60vw;
    background-color: #c4c4c4;
  }
`;

export type BackgroundProps =
  BasicComponentProps<BackgroundAreaStyle>;

export const Background = (props: BackgroundProps) => {
  const { children } = props;
  return (
    <BackgroundArea
      css={props.css}
      className={props.className}
      bottomBackgroundColor={props.bottomBackgroundColor}
      profilePage={props.profilePage}
      item={props.item}
    >
      <div id="upper"></div>
      {children}
    </BackgroundArea>
  );
};
