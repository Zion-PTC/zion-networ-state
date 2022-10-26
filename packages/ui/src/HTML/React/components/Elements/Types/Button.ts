import { MouseEventHandler } from "react";

export type Position = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export type ButtonStyle<T> = {
  theme?: T;
  primary?: boolean;
  secondary?: boolean;
  size?: "small" | "mid" | "big";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  position?: Position;
  zIndex?: string;
  gridArea?: string;
  child?: { justifySelf?: string };
};
