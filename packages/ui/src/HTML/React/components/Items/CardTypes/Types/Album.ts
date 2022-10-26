import { MouseEventHandler } from "react";

export type AlbumProps = {
  likeIcon: JSX.IntrinsicElements["svg"];
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
