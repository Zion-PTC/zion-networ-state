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
  >;
};

export const BottomSpace = styled.div<BottomSpaceStyle>`
  text-align: center;
  z-index: 2;
  display: grid;
  grid-template-rows: 2rem 2.8rem 4rem 3rem 5rem;
  place-items: center;
  margin: 0;
`;
