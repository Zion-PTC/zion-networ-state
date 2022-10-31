import styled from "styled-components";
import {
  CssStyled,
  Position,
  StyledCss,
} from "../../../lib";
import { Button } from "../Button";

const SVGButtonArea = styled(Button)`
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  border-radius: 0;
`;

export type SvgButtonProps = {
  svg?: JSX.IntrinsicElements["svg"];
  handleClick?: () => void;
  position?: Position;
  gridArea?: string;
  justifySelf?: string;
} & CssStyled &
  StyledCss;

export function SVGButton(props: SvgButtonProps) {
  return (
    <SVGButtonArea
      onClick={props.handleClick}
      position={props.position}
      gridArea={props.gridArea}
      child={{ justifySelf: props.justifySelf }}
    >
      <>{props.svg}</>
    </SVGButtonArea>
  );
}
