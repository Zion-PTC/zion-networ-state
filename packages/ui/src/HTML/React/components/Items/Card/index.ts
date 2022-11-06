import {
  Card_v3 as v3,
  Card_v3Props as v3Props,
} from "./Card_v3";
import {
  Card_v2 as v2,
  Card_v2Props as v2Props,
} from "./Card_v2";
import {
  Card_v1 as v1,
  Card_v1Props as v1Props,
} from "./Card_v1";

///// EXPORT
export type CardProps = v3Props;
export const Card = v3;
/////////////

export const Card_v1 = v1;
export type Card_v1Props<T> = v1Props<T>;

export const Card_v2 = v2;
export type Card_v2Props = v2Props;

export const Card_v3 = v3;
export type Card_v3Props = v3Props;

export * from "./Head";
export * from "./Infos";
export * from "./Social";
