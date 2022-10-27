import styled from "styled-components";
import { utility } from "../../../lib";

type CircleStyle = {
  borderColor?: string;
  css?: utility.ZionCss<
    undefined,
    true,
    "width" | "height" | "border" | "borderRadius" | "placeSelf"
  >;
};

export const Circle = styled.div<CircleStyle>`
  width: 5.5vw;
  height: 5.5vw;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "black")};
  border-radius: 100%;
  place-self: center;
`;
