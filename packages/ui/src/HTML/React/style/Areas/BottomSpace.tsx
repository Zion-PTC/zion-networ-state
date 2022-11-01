import styled, { css } from "styled-components";
import { Css } from "../../classes";
import { CssStyled, StyledCss, utility } from "../../lib";

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
} & StyledCss &
  CssStyled;

export const BottomSpace = styled.div<BottomSpaceStyle>`
  text-align: center;
  z-index: 2;
  display: grid;
  grid-template-rows: 2rem auto 5rem;
  place-items: center;
  margin: 0;
  ${props => new Css("gridArea", css``, props).value}
`;
