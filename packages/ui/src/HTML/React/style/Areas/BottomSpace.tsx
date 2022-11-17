import styled, { css } from "styled-components";
import { Css } from "../../lib/global/BaseNoiz/Css";

type BottomSpaceStyle = {
  css?: utility.ZionCss<
    undefined,
    true,
    | "textAlign"
    | "zIndex"
    | "display"
    | "gridTemplateRows"
    | "placeItems"
    | "margin"
    | "gridArea"
  >;
} & StyledDefault &
  utility.CssStyled;

export const BottomSpace = styled.div<BottomSpaceStyle>`
  text-align: center;
  z-index: 2;
  display: grid;
  grid-template-rows: 2rem auto 5rem;
  place-items: center;
  margin: 0;
  ${props => new Css("gridArea", css``, props).value}
`;
