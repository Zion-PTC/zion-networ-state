import { CSSProperties } from "react";
import { css } from "styled-components";
import { checkPropAndSetDefault } from "./checkPropsAndSetDefault";

export const checkPlaceContent = <
  T extends { css_?: { placeContent?: CSSProperties["placeContent"] } }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.placeContent) return;
  return css`
    place-content: ${props.css_.placeContent};
  `;
};

export const checkPlaceContent2 = <
  T extends { css_: { placeContent?: CSSProperties["placeContent"] } }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.placeContent) return;
  let result;
  // const result1 = css`
  //   place-content: ${props.css_.placeContent};
  // `;

  if (props)
    result = checkPropAndSetDefault(
      props,
      "placeItems",
      css`
        place-content: ${props.css_.placeContent};
      `
    );
  return result;
};
