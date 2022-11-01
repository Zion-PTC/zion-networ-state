import styled from "styled-components";
import { CssStyled, StyledCss } from "../lib";

export type InputStyle = CssStyled & StyledCss;

export const Input = styled.input<InputStyle>`
  width: 100%;
  height: 100%;
`;
