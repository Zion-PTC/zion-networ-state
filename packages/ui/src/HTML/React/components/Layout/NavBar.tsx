import styled from "styled-components";
import { NavBarProps } from "./Types";

export const NavBar = styled.nav<NavBarProps>`
  border: 1px red solid;
  top: 0;
  display: grid;
  // TODO lift dimensions in the app
  min-height: 4rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . web3 theme";
  text-align: center;
`;
