import styled from "styled-components";
import { SquareProps } from "./types";

export const Square = styled.div<SquareProps>`
  grid-row: span ${(props) => (props.small ? 3 : 6)};
  grid-column: span ${(props) => (props.small ? 3 : 6)};
  background-color: ${(props) => props.backgroundColor};
`;
