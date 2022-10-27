import styled from "styled-components";
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
};

export const BackgroundArea = styled.div<BackgroundAreaStyle>`
  display: grid;
  grid-template-rows: 1.5rem 90vw auto;
  grid-template-columns: 1fr 90vw 1fr;
  grid-template-areas: ". . ." ". image ." ". infos .";
  position: relative;
  height: 100%;
  background-color: blue;
  #upper {
    position: absolute;
    background-color: #c4c4c4;
    height: 50%;
    width: 100%;
    z-index: 1;
  }
  #bottom {
    position: absolute;
    top: 50%;
    background-color: ${(props) =>
      props.bottomBackgroundColor ? props.bottomBackgroundColor : "#fffffa"};
    height: 50%;
    width: 100%;
    z-index: 1;
  }
`;

export type BackgroundProps = BasicComponentProps<BackgroundAreaStyle>;

export const Background = (props: BackgroundProps) => {
  const { children } = props;
  return (
    <BackgroundArea bottomBackgroundColor={props.bottomBackgroundColor}>
      <div id="upper"></div>
      <div id="bottom"></div>
      <div id="upper-space"></div>
      {children}
    </BackgroundArea>
  );
};
