import styled, { StyledComponent } from "styled-components";
import { BasicShapeDivProps, ShapeProps } from "./Types/Shape";

export interface Shape {
  (props: ShapeProps): StyledComponent<"div", any, BasicShapeDivProps, never>;
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
    grid-column: span ${(props) => (props.small ? small[0] : mid[0])};
    grid-row: span ${(props) => (props.small ? small[1] : mid[1])};
    background-color: ${(props) => props.backgroundColor};
  `;
};
