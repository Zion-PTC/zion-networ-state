import styled from "styled-components";
import { CssStyled } from "../lib";

export type InputStyle = CssStyled & StyledDefault;

export const Input = styled.input<InputStyle>`
  width: 100%;
  height: 100%;
`;
