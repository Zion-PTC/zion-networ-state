import { NftPfp } from "./CardTypes/NftPfp";
import { NftPfp as NftPfpTypes } from "./types";

export interface CardsProps {
  children: NftPfpTypes.NftPfpProps[];
  small?: boolean;
  mid?: boolean;
  big?: boolean;
}

export interface Cards {
  (props: CardsProps): JSX.Element;
}

export const Cards: Cards = (props: CardsProps): JSX.Element => {
  const { children, small, mid, big } = props;
  return (
    <>
      {children.map((child) => (
        <NftPfp
          small={small}
          mid={mid}
          big={big}
          {...child}
          key={child.slug}
          src={child.src}
        ></NftPfp>
      ))}
    </>
  );
};
