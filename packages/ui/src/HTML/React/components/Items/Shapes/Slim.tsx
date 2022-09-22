import styled from "styled-components";
import { SlimProps } from "./types";

export const Slim = styled.div<SlimProps>`
  grid-row: span ${(props) => (props.small ? 3 : 6)};
  grid-column: span ${(props) => (props.small ? 3 : 6)};
  background-color: ${(props) => props.backgroundColor};
`;
