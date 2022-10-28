import { CSSProperties } from "react";
import { css } from "styled-components";

export const checkBackgroundColor = <
  T extends { css_?: { backgroundColor?: CSSProperties["backgroundColor"] } }
>(
  props: T
) => {
  return css`
    background-color: ${props.css_?.backgroundColor};
  `;
};
