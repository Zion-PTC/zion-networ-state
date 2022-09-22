import styled from "styled-components";
import { utility } from "../../../lib/global.types";

type TextAreaStyle = {
  css?: utility.ZionCss<undefined, true, "display" | "margin">;
};

export const TextArea = styled.div<TextAreaStyle>`
  display: ${(props) =>
    props.css
      ? props.css.display
        ? props.css.display
        : "inline-flex"
      : "inline-flex"};
  p {
    margin: 0 0.3rem 0 0;
  }
`;
