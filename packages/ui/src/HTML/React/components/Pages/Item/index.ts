import {
  Item_v1Props as v1Props,
  Item_v1 as v1,
} from "./Item_v1";

import {
  Item_v2Props as v2Props,
  Item_v2 as v2,
} from "./Item_v2";

//// EXPORT
export type ItemProps = v2Props;
export const Item = v2;
////

export type ItemProps_v1 = v1Props;
export const Item_v1 = v1;
export type Item_v2Props = v2Props;
export const Item_v2 = v2;
