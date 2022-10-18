import styled from "styled-components";
import { FooterProps } from "./Types";

export const Footer = styled.footer<FooterProps>`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . . .";
  text-align: center;
  bottom: 0;
  min-height: ${(props) => (props.minHeight ? props.minHeight : "4rem")};
  width: 100%;
  background-color: white;
  z-index: 2;
`;
