import { CSSProperties } from "react";
import { css } from "styled-components";

export const checkPlaceItems = <
  T extends { css?: { placeItems?: CSSProperties["placeItems"] } }
>(
  props: T
) => {
  if (!props.css) return;
  if (!props.css.placeItems) return;
  return css`
    place-items: ${props.css.placeItems};
  `;
};
