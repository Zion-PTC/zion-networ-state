import {
  Badge_v2 as v2,
  Badge_v2Props as v2Props,
} from "./Badge_v2";
import { Badge_v1 as v1 } from "./Badge_v1";

export type BadgeProps = Badge_v2Props;
export const Badge = v2;

export const Badge_v1 = v1;

export const Badge_v2 = v2;
export type Badge_v2Props = v2Props;
