import {
  Details_v2 as v2,
  Details_v2Props as v2Props,
} from "./Details_v2";
import {
  Details_v1 as v1,
  Details_v1Props as v1Props,
} from "./Details_v1";

export type DetailsProps = v2Props;
export const Details = v2;

export const Details_v1 = v1;
export type DetailsProps_v1 = v1Props;
export const Details_v2 = v2;
export type DetailsProps_v2 = v2Props;
