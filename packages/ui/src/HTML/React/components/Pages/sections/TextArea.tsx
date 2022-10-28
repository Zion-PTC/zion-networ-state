import styled from "styled-components";
import { utility } from "../../../lib/global.types";
import checkCss from "../../../lib/util/checkCss";

type TextAreaStyle = {
  css_?: utility.ZionCss<
    undefined,
    true,
    "display" | "margin" | "placeContent" | "placeItems" | "gridArea"
  >;
};

export const TextArea = styled.div<TextAreaStyle>`
  display: ${(props) =>
    props.css_
      ? props.css_.display
        ? props.css_.display
        : "inline-flex"
      : "inline-flex"};
  ${(props) => checkCss("placeContent", props)}
  ${(props) => checkCss("placeItems", props)}
  ${(props) => checkCss("gridArea", props)}
  p {
    margin: 0 0.3rem 0 0;
  }
`;
