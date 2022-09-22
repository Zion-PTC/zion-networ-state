import styled from "styled-components";

export const Area = styled.div<{
  width: number;
  height: number;
  blockSize: number;
  columns: number;
}>`
  border: 1px solid;
  width: ${(props) => props.width}px;
  height: 100%;
  display: grid;
  place-self: center;
  grid-template-rows: ${(props) => props.blockSize + "px"};
  grid-template-columns: repeat(
    ${(props) => props.columns},
    ${(props) => props.blockSize + "px"}
  );
  overflow: auto;
`;
