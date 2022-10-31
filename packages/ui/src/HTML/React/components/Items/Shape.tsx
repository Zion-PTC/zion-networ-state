import styled, {
  StyledComponent,
} from "styled-components";
import {
  CssStyled,
  height,
  StyledCss,
  width,
} from "../../lib";

export enum CardFormats {
  landscape = "landscape",
  portrait = "portrait",
  square = "square",
  slim = "slim",
  resource = "resource",
}

export enum CardShapesEnum {
  landscape,
  portrait,
  square,
  slim,
  resource,
}

export type CardShapesTypes = keyof typeof CardShapesEnum;

export type BasicShapeDivProps = {
  small?: boolean;
  backgroundColor?: string;
};

export type ShapeProps = {
  small: [width, height];
  mid: [width, height];
};

export interface Shape {
  (
    props: ShapeProps & StyledCss & CssStyled
  ): StyledComponent<
    "div",
    any,
    BasicShapeDivProps,
    never
  >;
}
/**
 * This function creates the shapes for the cards which
 * appear in the content area. Different shape will display
 * different types of items.
 * @param props
 * @returns An area in in which cards can be composed.
 */
export const Shape: Shape = function (props) {
  const { small, mid } = props;
  return styled.div<BasicShapeDivProps>`
    grid-column: span
      ${props => (props.small ? small[0] : mid[0])};
    grid-row: span
      ${props => (props.small ? small[1] : mid[1])};
    background-color: ${props => props.backgroundColor};
  `;
};
