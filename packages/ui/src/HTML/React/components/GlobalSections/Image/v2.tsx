import { Area, Img } from "../../../style";
import { LoadingWaves } from "../../Icons/LoadingTypes";
import { ImageProps } from "../Image";

export const Image_v2 = (props: ImageProps) => {
  let displayStatus = props.imageLoaded ? "block" : "none";
  let loadingDisplayStatus = props.imageLoaded
    ? "none"
    : "block";
  let borderTop = props.fullBorder ? "1px" : undefined;
  return (
    <Area
      className={props.className}
      css={props.css}
      imageArea
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
    </Area>
  );
};
