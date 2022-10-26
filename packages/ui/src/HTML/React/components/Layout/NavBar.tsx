import styled from "styled-components";
import { NavBarProps } from "./Types";

export const NavBar = styled.nav<NavBarProps>`
  top: 0;
  display: grid;
  text-align: center;
  ${(props) =>
    props.gridTemplateColumns &&
    `grid-template-columns: ${props.gridTemplateColumns};`}
  ${(props) =>
    props.gridTemplateAreas &&
    `grid-template-areas: ${props.gridTemplateAreas};`}
`;
