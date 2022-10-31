import styled from "styled-components";
import {
  CssStyled,
  Position,
  StyledCss,
} from "../../../lib";
import { Button } from "../Button";

const ScrollToTopButtonArea = styled(Button)`
  width: auto;
  height: auto;
  z-index: 2;
  background-color: transparent;
  position: ${props =>
    props.position ? "fixed" : "relative"};
  bottom: ${props =>
    props.position?.bottom
      ? props.position?.bottom
      : "10%"};
  right: ${props =>
    props.position?.right ? props.position?.right : "7%"};
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  &:first-child {
    display: grid;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    width: 100%;
    height: 100%;
  }
`;

export type ScrollToTopButton = {
  svg?: JSX.IntrinsicElements["svg"];
  handleClick?: () => void;
  position?: Position;
} & CssStyled &
  StyledCss;

export function ScrollToTopButton(
  props: ScrollToTopButton
) {
  return (
    <ScrollToTopButtonArea
      className={props.className}
      onClick={props.handleClick}
      position={props.position}
      css={props.css}
    >
      <>{props.svg}</>
    </ScrollToTopButtonArea>
  );
}
