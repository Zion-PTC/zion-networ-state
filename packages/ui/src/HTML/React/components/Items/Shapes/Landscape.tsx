import { Shape } from "./Shape";

// Old way, keeping it here for reference.

// export const Landscape2 = styled.div<BasicShapeDivProps>`
//   grid-row: span ${(props) => (props.small ? 2 : 4)};
//   grid-column: span ${(props) => (props.small ? 3 : 6)};
//   background-color: ${(props) => props.backgroundColor};
// `;

export const Landscape = Shape({ small: [4, 2], mid: [8, 5] });
