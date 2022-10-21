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

  -webkit-box-shadow: 0px 0px 1px 0.1px #8a8a8a;
  -moz-box-shadow: 0px 0px 1px 0.1px #8a8a8a;
  -o-box-shadow: 0px 0px 1px 0.1px #8a8a8a;
  box-shadow: 0px 0px 1px 0.1px #8a8a8a;
  &:hover {
    cursor: pointer;
  }
  p {
    margin: 0;
    place-self: center;
  }
`;
