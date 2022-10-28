import { CSSProperties } from "react";
import { css } from "styled-components";

export const checkZIndex = <
  T extends { css_?: { zIndex?: CSSProperties["zIndex"] } }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.zIndex) return;
  return css`
    z-index: ${props.css_.zIndex};
  `;
};
