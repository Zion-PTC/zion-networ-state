import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import {
  BasicComponentProps,
  Dimensions,
  utility,
} from "../../../lib/global.types";

type backgroundAreas = "position" | "backgroundColor" | "zIndex" | Dimensions;

type BackgroundAreaStyle = {
  css?: utility.ZionCss<
    "display" | "gridTemplateRows" | "position" | "height" | "backgroundColor",
    true
  > & {
    upper: utility.ZionCss<backgroundAreas, true>;
    bottom: utility.ZionCss<backgroundAreas, true>;
  };
  bottomBackgroundColor?: string;
  item?: boolean;
  profilePage?: boolean;
};

const ItemGridSetting = css`
  grid-template-rows: 1.5rem 90vw auto;
  grid-template-columns: 1fr 90vw 1fr;
  grid-template-areas: ". . ." ". image ." ". infos .";
`;

const ProfileGridSetting = css`
  grid-template-rows: 40vw 40vw auto auto auto auto;
  grid-template-columns: 1fr 40vw 1fr;
  grid-template-areas:
    ". . ."
    ". image ."
    ". infos ."
    ". social ."
    ". navbar ."
    ". content .";
`;

const checkGridSetting = (
  props: BackgroundAreaStyle
): FlattenSimpleInterpolation => {
  let settings: FlattenSimpleInterpolation;
  if (props.profilePage) settings = ProfileGridSetting;
  else settings = ItemGridSetting;
  return settings;
};

export const BackgroundArea = styled.div<BackgroundAreaStyle>`
  display: grid;
  ${(props) => checkGridSetting(props)}
  #upper {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 60vw;
    background-color: #c4c4c4;
  }
`;

export type BackgroundProps = BasicComponentProps<BackgroundAreaStyle>;

export const Background = (props: BackgroundProps) => {
  const { children } = props;
  return (
    <BackgroundArea
      bottomBackgroundColor={props.bottomBackgroundColor}
      profilePage={props.profilePage}
      item={props.item}
    >
      <div id="upper"></div>
      {children}
    </BackgroundArea>
  );
};
