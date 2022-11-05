import { MouseEventHandler } from "react";
import { Card } from "../Card";
import { NftPfpProps } from "../CardTypes";

export type BasicCardProps_v1 = {
  slug?: string;
  src?: string;
  clickHandler?: MouseEventHandler<HTMLElement>;
};

export interface CardsProps_v1<
  T extends BasicCardProps_v1
> {
  likeIcon: JSX.Element;
  menuIcon: JSX.Element;
  children: T[];
  type: "nft-pfp" | "album";
  small?: boolean;
  mid?: boolean;
  big?: boolean;
  clickHandler?: MouseEventHandler<HTMLElement>;
}

export type NftPfpCardProps_v1 =
  CardsProps_v1<NftPfpProps>;

export interface ICards_v1 {
  (props: NftPfpCardProps_v1): JSX.Element;
}

export const Cards_v1: ICards_v1 = props => {
  console.log("Cards_v1: ", props);
  const { children } = props;
  return (
    <>
      {children.map((child, i) => (
        <Card key={i} {...props} {...child} />
      ))}
    </>
  );
};
