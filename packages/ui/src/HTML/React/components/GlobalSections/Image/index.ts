import {
  Image_v3 as v3,
  Image_v3Props as v3Props,
} from "./v3";
import { Image_v2 as v2 } from "./v2";
import { Image_v1 as v1 } from "./v1";

////EXPORT
export type ImageProps = v3Props;
export const Image = v3;
//////////

export const Image_v1 = v1;
export const Image_v2 = v2;

export type Image_v3Props = v3Props;
export const Image_v3 = v3;
