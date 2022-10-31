import styled from "styled-components";
import { CssStyled, StyledCss, utility } from "../../lib";

export type ContentAreaProps = {
  overflow?: string;
  css?: utility.ZionCss<
    undefined,
    true,
    | "border"
    | "width"
    | "height"
    | "display"
    | "placeSelf"
    | "overflow"
    | "gridArea"
    | "placeContent"
  >;
} & StyledCss &
  CssStyled;

// this div shall be placed in a container which provides its dimension.
export const ContentArea = styled.div<ContentAreaProps>`
  width: 100%;
  height: 100%;
  display: grid;
  place-self: center;
  ${props => (props.overflow ? "overflow: auto;" : "")}
  ${props =>
    props.css?.gridArea &&
    `grid-area: ${props.css.gridArea};`}
  ${props =>
    props.css?.placeContent &&
    `place-content: ${props.css.placeContent};`}
`;
