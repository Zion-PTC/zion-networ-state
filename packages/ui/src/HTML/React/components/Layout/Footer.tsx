import styled from "styled-components";
import { FooterProps } from "./Types";

export const Footer = styled.footer<FooterProps>`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "freccias Frecciad home cuore account";
  text-align: center;
  bottom: 0;
  min-height: ${(props) => (props.minHeight ? props.minHeight : "4rem")};
  width: 100%;
  z-index: 2;
  background-color: black;
  border-color: 1px solid white;
  color: white;
  place-items: center;
`;
