import { MouseEventHandler } from "react";
import { CssStyled, StyledCss } from "../../lib";
import { Card } from "./Card";

export type BasicCardProps = {
  slug?: string;
  src?: string;
  clickHandler?: MouseEventHandler<HTMLElement>;
};

export interface CardsProps<T extends BasicCardProps> {
  likeIcon: JSX.IntrinsicElements["svg"];
  menuIcon: JSX.IntrinsicElements["svg"];
  children: T[];
  type: "nft-pfp" | "album";
  small?: boolean;
  mid?: boolean;
  big?: boolean;
  clickHandler?: MouseEventHandler<HTMLElement>;
}
export type NftPfpCardProps = CardsProps<NftPfpCardProps>;

export interface ICards {
  <T extends BasicCardProps>(
    props: CardsProps<T> & StyledCss & CssStyled
  ): JSX.Element;
}

export const Cards: ICards = props => {
  const { children } = props;
  return (
    <>
      {children.map((child, i) => (
        <Card key={i} {...props} {...child} />
      ))}
    </>
  );
};
