import styled from "styled-components";
import { CssStyled } from "../lib";

export type PStyle = {
  bold?: boolean;
  dimmed?: boolean;
} & CssStyled &
  StyledDefault;

export const P = styled.p<PStyle>`
  ${props => (props.bold ? "font-weight: bold;" : "")}
  ${props => (props.dimmed ? "color: grey;" : "")}
`;
