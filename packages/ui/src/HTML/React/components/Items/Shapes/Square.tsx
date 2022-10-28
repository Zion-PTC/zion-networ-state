import { Shape } from "../Shape";

// export const Square = styled.div<SquareProps>`
//   grid-row: span ${(props) => (props.small ? 3 : 6)};
//   grid-column: span ${(props) => (props.small ? 3 : 6)};
//   background-color: ${(props) => props.backgroundColor};
// `;

export const Square = Shape({ small: [4, 4], mid: [8, 8] });
