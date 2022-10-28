import { Shape } from "../Shape";

// export const Slim = styled.div<SlimProps>`
//   grid-row: span ${(props) => (props.small ? 3 : 6)};
//   grid-column: span ${(props) => (props.small ? 3 : 6)};
//   background-color: ${(props) => props.backgroundColor};
// `;

export const Slim = Shape({ small: [4, 1], mid: [8, 2] });
