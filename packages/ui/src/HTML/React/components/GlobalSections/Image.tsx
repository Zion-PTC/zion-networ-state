import { Dispatch, SetStateAction } from "react";
import {
  Area2,
  ImageAreaCss,
} from "../../style/Areas/Area";
import { Img } from "../../style/Img";
import { LoadingWaves } from "../Icons/LoadingTypes";

export type ImageProps = {
  src: string;
  imageLoaded?: boolean;
  handleisLoading?: Dispatch<SetStateAction<boolean>>;
  display?: string;
  fullBorder?: boolean;
};

export const Image = (
  props: ImageProps & ImageAreaCss
) => {
  let displayStatus = props.imageLoaded ? "block" : "none";
  let loadingDisplayStatus = props.imageLoaded
    ? "none"
    : "block";
  let borderTop = props.fullBorder ? "1px" : undefined;
  return (
    <Area2
      className={props.className}
      width={props.width}
      height={props.height}
      css_={{ height: "", width: "" }}
      borderTop={borderTop}
      gridArea={props.gridArea}
      backgroundColor={props.backgroundColor}
    >
      <Img
        onLoad={() => {
          if (props.handleisLoading)
            props.handleisLoading(false);
        }}
        src={props.src}
        alt="nft"
        display={displayStatus}
        maxWidth={props.image?.maxWidth}
        height={props.image?.height}
        width={props.image?.width}
      ></Img>
      <LoadingWaves
        display={loadingDisplayStatus}
      ></LoadingWaves>
    </Area2>
  );
};
