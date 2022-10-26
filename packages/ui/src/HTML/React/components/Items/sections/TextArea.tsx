import styled from "styled-components";

export const TextArea = styled.div<{ gridArea?: string }>`
  width: 100%;
  height: 60%;
  background-color: grey;
  grid-area: ${(props) => props.gridArea};
`;
