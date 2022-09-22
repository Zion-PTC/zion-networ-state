import styled from "styled-components";
import { utility } from "../../../lib";

type CircleStyle = {
  css?: utility.ZionCss<
    "width" | "height" | "border" | "borderRadius" | "placeSelf",
    true
  >;
};

export const Circle = styled.div<CircleStyle>`
  width: 5.5vw;
  height: 5.5vw;
  border: 1px solid black;
  border-radius: 100%;
  place-self: center;
`;
