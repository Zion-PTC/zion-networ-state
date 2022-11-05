import styled from "styled-components";
import { Button } from "../Button";

export type SVGButtonProps = {
  stroke?: string;
  width?: string;
  height?: string;
  fill?: string;
  theme: FluidTheme;
};

const SVGButtonArea = styled(Button)`
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  border-radius: 0;
`;

export const SVGButton = styled(SVGButtonArea)``;
