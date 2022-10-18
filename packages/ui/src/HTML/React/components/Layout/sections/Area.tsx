import styled from "styled-components";
import { Dimensions, utility } from "../../../lib";

type AreaStyle = {
  width: number;
  height: number;
  blockSize: number;
  columns: number;
  css?: utility.ZionCss<Dimensions, true>;
};

export const Area = styled.div<AreaStyle>`
  width: ${(props) => props.width}px;
  height: 100%;
  display: grid;
  place-self: center;
  grid-auto-rows: ${(props) => props.blockSize + "px"};
  grid-template-columns: repeat(
    ${(props) => props.columns},
    ${(props) => props.blockSize + "px"}
  );
  overflow: auto;
`;
