import styled from "styled-components";

// this div shall be placed in a container which provides its dimension.
export const ContentArea = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100%;
  display: grid;
  place-self: center;
  overflow: auto;
`;
