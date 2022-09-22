import styled from "styled-components";
import { LandscapeProps } from "./types";

export const Landscape = styled.div<LandscapeProps>`
  grid-row: span ${(props) => (props.small ? 2 : 4)};
  grid-column: span ${(props) => (props.small ? 3 : 6)};
  background-color: ${(props) => props.backgroundColor};
`;
