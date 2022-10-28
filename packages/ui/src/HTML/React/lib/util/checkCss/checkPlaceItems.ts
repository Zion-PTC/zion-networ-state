import { CSSProperties } from "react";
import { css } from "styled-components";
import { checkPropAndSetDefault } from "./checkPropsAndSetDefault";

export const checkPlaceItems = <
  T extends { css_?: { placeItems?: CSSProperties["placeItems"] } }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.placeItems) return;
  return css`
    place-items: ${props.css_.placeItems};
  `;
};

export const checkPlaceItems2 = <
  T extends { css_: { placeItems?: CSSProperties["placeItems"] } }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.placeItems) return;
  let result;
  if (props)
    result = checkPropAndSetDefault(
      props,
      "placeItems",
      css`
        place-items: ${props.css_.placeItems};
      `
    );
  return result;
};
