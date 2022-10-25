import { Dispatch, SetStateAction } from "react";

export type ImageProps = {
  src: string;
  imageLoaded?: boolean;
  handleisLoading?: Dispatch<SetStateAction<boolean>>;
  display?: string;
};
