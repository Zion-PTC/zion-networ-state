import { MouseEventHandler } from "react";
import { CSSProperties } from "styled-components";
import { Position, Sizes } from "../../../lib";

export type ButtonStyle<T> = {
  theme?: T;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: Sizes;
  position?: Position;
  zIndex?: string;
  gridArea?: string;
  child?: { justifySelf?: string };
  css_?: CSSProperties;
};
