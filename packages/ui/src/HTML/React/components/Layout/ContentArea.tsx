import styled from "styled-components";
import { ContentAreaProps } from "./Types/ContentArea";

// this div shall be placed in a container which provides its dimension.
export const ContentArea = styled.div<ContentAreaProps>`
  border: 1px solid;
  width: 100%;
  height: 100%;
  display: grid;
  place-self: center;
  ${(props) => (props.overflow ? "overflow: auto;" : "")}
`;
