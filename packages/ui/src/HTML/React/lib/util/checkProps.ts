import { css, FlattenSimpleInterpolation } from "styled-components";
import { BooleanSizes, CSSProps, Size } from "../global.types";
import {
  checkSize,
  CheckSizePossibleProps,
  CheckSizeOptions,
} from "./checkProps/";

//// CHECKSIZE BOOLEANSIZE
function checkProps(type: "checkSize", props: Size): FlattenSimpleInterpolation;

//// CHECKSIZE SIZE
function checkProps(
  type: "checkSize",
  props: BooleanSizes | Size | CSSProps,
  options: CheckSizeOptions
): FlattenSimpleInterpolation;

///// ALL POSSIBILITIES
function checkProps(
  type: "checkSize",
  props?: CheckSizePossibleProps,
  options?: CheckSizeOptions
): FlattenSimpleInterpolation {
  let result;
  switch (type) {
    case "checkSize":
      if (!options) result = checkSize(props as Size);
      else
        result = checkSize(props as BooleanSizes, options as CheckSizeOptions);
      break;
    default:
      result = css``;
      break;
  }
  return result;
}

export default checkProps;
