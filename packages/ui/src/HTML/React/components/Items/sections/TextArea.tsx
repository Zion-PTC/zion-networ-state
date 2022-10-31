import styled from "styled-components";
import {
  CssStyled,
  StyledCss,
  utility,
} from "../../../lib";

export type TextAreaStyle = CssStyled &
  StyledCss &
  utility.ZionCss<undefined, true, "gridArea">;

export const TextArea = styled.div<TextAreaStyle>`
  width: 100%;
  height: 60%;
  background-color: grey;
  grid-area: ${props => props.gridArea};
`;
