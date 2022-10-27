import styled from "styled-components";
import { utility } from "../../../lib";

type BottomSpaceStyle = {
  css?: utility.ZionCss<
    | "textAlign"
    | "zIndex"
    | "display"
    | "gridTemplateRows"
    | "placeItems"
    | "margin"
    | "gridArea"
  >;
};

type BottomSpaceCss = {
  gridArea: string;
};

export const BottomSpace = styled.div<BottomSpaceStyle & BottomSpaceCss>`
  text-align: center;
  z-index: 2;
  display: grid;
  grid-template-rows: 2rem auto 5rem;
  place-items: center;
  margin: 0;
  ${(props) => {
    if (props.gridArea) return `grid-area: ${props.gridArea};`;
  }}
`;
