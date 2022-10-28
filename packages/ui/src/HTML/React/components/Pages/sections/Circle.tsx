import styled from "styled-components";
import { utility } from "../../../lib";
import checkCss from "../../../lib/util/checkCss";

type CircleStyle = {
  borderColor?: string;
  size?: { auto?: boolean; width?: string; height?: string };
  css_?: utility.ZionCss<
    undefined,
    true,
    | "width"
    | "height"
    | "border"
    | "borderRadius"
    | "placeSelf"
    | "zIndex"
    | "gridArea"
    | "backgroundColor"
  >;
};

export const checkBorderColor = <T extends { borderColor?: string }>(
  props: T
) => {
  if (!props.borderColor) return "black";
  return props.borderColor;
};

export const Circle = styled.div<CircleStyle>`
  border-radius: 100%;
  place-self: center;
  border: 1px solid ${(props) => checkBorderColor(props)};
  ${(props) => checkCss("zIndex", props)}
  ${(props) => checkCss("size", props)}
  ${(props) => checkCss("backgroundColor", props)}
  ${(props) => checkCss("gridArea", props)}
`;
