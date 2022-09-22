import styled from "styled-components";
import { utility } from "../../../lib";

type InfoSubStyle = {
  css?: utility.ZionCss<
    "display" | "gridTemplateRows" | "width" | "zIndex",
    true
  >;
};

export const InfoSub = styled.div<InfoSubStyle>`
  display: grid;
  grid-template-rows: 25% 75%;
  width: 100%;
  height: 100%;
  z-index: 2;
  p {
    margin: 0;
  }
`;
