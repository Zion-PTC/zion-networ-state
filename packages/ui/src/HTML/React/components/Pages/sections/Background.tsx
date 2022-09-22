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
};

export const BackgroundArea = styled.div<BackgroundAreaStyle>`
  display: grid;
  grid-template-rows: 1rem 20rem auto;
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
    background-color: white;
    height: 50%;
    width: 100%;
    z-index: 1;
  }
`;

export type BackgroundProps = BasicComponentProps<BackgroundAreaStyle>;

export const Background = (props: BackgroundProps) => {
  const { children } = props;
  return (
    <BackgroundArea>
      <div id="upper"></div>
      <div id="bottom"></div>
      <div id="upper-space"></div>
      {children}
    </BackgroundArea>
  );
};
