import { CSSProperties } from "react";
import { css } from "styled-components";

export const checkGridAreaWithCss_ = <
  T extends {
    css_: { gridArea?: CSSProperties["gridArea"] };
  }
>(
  props: T
) => {
  if (!props.css_.gridArea) return;
  return css`
    grid-area: ${props.css_.gridArea};
  `;
};
