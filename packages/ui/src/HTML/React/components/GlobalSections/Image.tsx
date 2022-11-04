import { Dispatch, SetStateAction } from "react";
import { Image_v1 } from "./Image/v1";
import { Image_v3 } from "./Image/v3";

export type ImageCss = {
  width?: string;
  height?: string;
  maxWidth?: string;
  backgroundColor?: string;
  borderTop?: string;
  gridArea?: string;
  display?: string;
  fullBorder?: boolean;
  imageLoaded?: boolean;
  image?: {
    width?: string;
    height?: string;
    maxWidth?: string;
  };
} & FluidStyled;

export type ImageHandles = {
  handleisLoading?: Dispatch<SetStateAction<boolean>>;
};

export type ImageDatas = {
  src: string;
};

export type ImageProps = ImageDatas &
  ImageCss &
  ImageHandles &
  FluidStyled;

export const Image = Image_v3;
