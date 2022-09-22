import { MouseEventHandler } from "react";

export type AlbumProps = {
  id?: number;
  name?: string;
  slug?: string;
  small?: boolean;
  mid?: boolean;
  big?: boolean;
  src?: string;
  backgroundColor?: string;
  clickHandler?: MouseEventHandler<HTMLElement>;
};
