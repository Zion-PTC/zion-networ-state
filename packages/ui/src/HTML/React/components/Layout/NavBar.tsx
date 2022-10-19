import styled from "styled-components";
import { NavBarProps } from "./Types";

export const NavBar = styled.nav<NavBarProps>`
  top: 0;
  display: grid;
  min-height: ${(props) => (props.minHeight ? props.minHeight : "4rem")};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "home . logo web3 theme";
  text-align: center;
`;
