import {
  BasicCardProps_v1 as v1BasicProps,
  CardsProps_v1 as v1Props,
  Cards_v1 as v1,
} from "./Cards_v1";

export type BasicCardProps = v1BasicProps;

export type CardsProps<T extends BasicCardProps> =
  v1Props<T>;

export const Cards = v1;
