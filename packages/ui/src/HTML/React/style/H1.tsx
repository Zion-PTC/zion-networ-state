import styled, { css } from "styled-components";
import { Css } from "../classes/Css";
import { CssStyled } from "../lib";

export type H1Style = StyledDefault & CssStyled;

const margin = css`
  margin: 0;
`;

export const H1 = styled.h1<H1Style>`
  ${props => new Css("margin", margin, props).value};
`;
