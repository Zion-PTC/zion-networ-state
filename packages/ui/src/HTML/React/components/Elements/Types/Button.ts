import { MouseEventHandler } from "react";

export type ButtonStyle<T> = {
  theme?: T;
  primary?: boolean;
  secondary?: boolean;
  size?: "small" | "mid" | "big";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
