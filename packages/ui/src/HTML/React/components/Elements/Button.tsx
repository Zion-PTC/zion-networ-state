import styled from "styled-components";
import { ButtonStyle } from "./Types";

export const Button = styled.button<{ props?: ButtonStyle<{}> }>`
  display: grid;
  line-height: 1.2;
  font-size: 70%;
  height: 70%;
  width: 70%;
  place-self: center;
  border: 0;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  padding: 0;
  border: 1px solid aquamarine;
  &:hover {
    cursor: pointer;
  }
  p {
    margin: 0;
    place-self: center;
  }
`;
