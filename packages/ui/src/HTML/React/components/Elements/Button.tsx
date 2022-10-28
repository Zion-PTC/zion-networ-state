import styled from "styled-components";
import checkCss from "../../lib/util/checkCss";
import { ButtonStyle } from "./Types";

export const Button = styled.button<ButtonStyle<{}>>`
  height: 70%;
  width: 70%;
  line-height: 1.2;
  font-size: 70%;
  place-self: center;
  border: 0;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: grid;
  ${(props) => checkCss("gridArea", props)}
  ${(props) => checkCss("zIndex", props)}
  border: 1px solid ${(props) => props.theme.primary.borderColor};
  position: ${(props) => (props.position ? "fixed" : "static")};
  bottom: ${(props) => {
    if (!props.position) return;
    return props.position.bottom ? props.position.bottom : "10%";
  }};
  right: ${(props) => {
    if (!props.position) return;
    return props.position.right ? props.position.right : "7%";
  }};
  &:first-child {
    display: grid;
    justify-content: center;
    justify-items: center;
    justify-self: ${(props) => {
      if (!props.child || !props.child.justifySelf) return "center";
      return props.child.justifySelf;
    }};
    width: auto;
    height: auto;
  }
  /* -webkit-box-shadow: 0px 0px 1px 0.1px #8a8a8a;
  -moz-box-shadow: 0px 0px 1px 0.1px #8a8a8a;
  -o-box-shadow: 0px 0px 1px 0.1px #8a8a8a;
  box-shadow: 0px 0px 1px 0.1px #8a8a8a; */
  &:hover {
    cursor: pointer;
  }
  text {
    margin: 0;
    place-self: center;
    font-size: x-small;
  }
`;
