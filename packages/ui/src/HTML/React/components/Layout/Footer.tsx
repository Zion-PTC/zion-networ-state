import styled from "styled-components";
import { BasicLayoutProps, StyledCss } from "../../lib";

export type FooterProps = BasicLayoutProps & StyledCss;

export const Footer = styled.footer<FooterProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "freccias Frecciad home cuore account";
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: black;
  border-top: 1px solid white;
  color: white;
  place-items: center;
`;
