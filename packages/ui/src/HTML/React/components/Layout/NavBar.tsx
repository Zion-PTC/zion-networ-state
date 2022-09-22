import styled from "styled-components";

export const NavBar = styled.nav`
  border: 1px red solid;
  top: 0;
  display: grid;
  min-height: 4rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . web3 theme";
  text-align: center;
`;
