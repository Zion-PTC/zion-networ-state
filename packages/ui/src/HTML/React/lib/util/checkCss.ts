import {
  css,
  CSSProperties,
  FlattenSimpleInterpolation,
} from "styled-components";
// import { utility } from "../global.types";
import {
  checkGridArea,
  checkPlaceContent,
  checkBackgroundColor,
  checkSize,
  checkZIndex,
} from "./checkCss/";

// class CheckCss {}

// type Choice = "gridArea" | "placeContent" | "placeItems" | "backgroundColor";

export default function <
  T extends {
    css_?: {
      gridArea?: CSSProperties["gridArea"];
      placeContent?: CSSProperties["placeContent"];
      backgroundColor?: CSSProperties["backgroundColor"];
      zIndex?: CSSProperties["zIndex"];
    };
    size?:
      | { auto?: boolean; width?: string; height?: string }
      | ("small" | "mid" | "big");
  }
>(
  type:
    | "gridArea"
    | "placeContent"
    | "placeItems"
    | "backgroundColor"
    | "size"
    | "zIndex",
  props: T
): FlattenSimpleInterpolation | undefined {
  let resultCss: FlattenSimpleInterpolation | undefined;
  if (!props.css_) return;
  switch (type) {
    case "backgroundColor":
      resultCss = checkBackgroundColor(props);
      break;
    case "gridArea":
      resultCss = checkGridArea(props);
      break;
    case "placeContent":
      resultCss = checkPlaceContent(props);
      break;
    case "size":
      resultCss = checkSize(
        props as { size: { auto?: boolean; width?: string; height?: string } }
      );
      break;
    case "zIndex":
      resultCss = checkZIndex(props);
      break;
    default:
      resultCss = css``;
      break;
  }
  return resultCss;
}
