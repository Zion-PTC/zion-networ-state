import { MouseEventHandler } from "react";
import { NftPfpProps } from "../CardTypes/Types/NftPfp";

export type BasicCardProps = {
  slug?: string;
  src?: string;
  clickHandler?: MouseEventHandler<HTMLElement>;
};

export interface CardsProps<T extends BasicCardProps> {
  children: T[];
  type: "nft-pfp" | "album";
  small?: boolean;
  mid?: boolean;
  big?: boolean;
  clickHandler?: MouseEventHandler<HTMLElement>;
}
export type NftPfpCardProps = CardsProps<NftPfpProps>;

export interface ICards {
  <T extends BasicCardProps>(props: CardsProps<T>): JSX.Element;
}
