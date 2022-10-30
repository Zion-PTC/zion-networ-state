import styled, { css } from "styled-components";
import { Prop } from "../../../classes";
// import { Prop } from "../../../classes";
import { BooleanSizes, Size, utility } from "../../../lib";
// import checkCss from "../../../lib/util/checkCss";
// import checkProps from "../../../lib/util/checkProps";
import { CheckSizeOptions } from "../../../lib/util/checkProps/checkSize";

type InfoSectionStyle = (Size | BooleanSizes) & {
  options?: CheckSizeOptions;
} & {
  css_?: utility.ZionCss<
    undefined,
    true,
    | "display"
    | "width"
    | "height"
    | "gridTemplateColumns"
    | "placeContent"
  >;
};

const SIZE = "size";

const sizes = ["small", "mid", "big"];

const configObject = {
  small: { width: "50vw" },
  mid: { width: "60vw" },
  big: { width: "70vw" },
};

const defaultSize = css`
  width: 100%;
`;

const sizeProp = new Prop(
  SIZE,
  ["width"],
  "union",
  sizes,
  configObject,
  defaultSize
);

export const InfoSection = styled.div<InfoSectionStyle>`
  display: grid;
  ${props =>
    sizeProp.checkProps(
      props as { size: "small" | "mid" | "big" }
    )}
  grid-template-columns: ${props =>
    props.css_?.gridTemplateColumns
      ? props.css_.gridTemplateColumns
      : "1fr 1fr"};
`;
