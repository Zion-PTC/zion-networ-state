import styled from "styled-components";
import { Button } from "../Button";

export const ScrollToTopButton = styled(Button)`
  width: 50px;
  height: 50px;
  z-index: 2;
  position: fixed;
  bottom: 20%;
  right: 20%;
  background: transparent;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 10px #ccc;
  padding: 0;
  margin: 0;
  &:hover {
    background: red;
  }
  &:first-child {
    display: grid;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    width: 100%;
    height: 100%;
  }
`;
