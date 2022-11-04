import { CardHead_v1 as v1 } from "../Head/Head_v1";
import { CardHead_v2 as v2 } from "./Head_v2";
import {
  CardHead_v3 as v3,
  Head_v3Props as v3Props,
} from "../Head/Head_v3";

export type HeadProps = v3Props;

export const CardHead_v1 = v1;
export const CardHead_v2 = v2;
export const CardHead_v3 = v3;

export const Head = v3;
