import { Shape } from "../Shape";

// export const Portrait = styled.div<PortraitProps>`
//   grid-row: span ${(props) => (props.small ? 7 : 14)};
//   grid-column: span ${(props) => (props.small ? 4 : 8)};
//   background-color: ${(props) => props.backgroundColor};
// `;

export const Portrait = Shape({ small: [4, 7], mid: [8, 14] });
