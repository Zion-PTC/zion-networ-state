import styled from "styled-components";
import { ImageProps } from "../Items/sections/Types";
import type { utility } from "../../lib/global.types";
import { LoadingWaves } from "../Icons/LoadingTypes";

export type ImageCss = utility.ZionCss<undefined, true, "display" | "maxWidth">;

export type ImageAreaCss = {
  width: string;
  height: string;
  css?: utility.ZionCss<"width" | "height", true>;
};

const Area = styled.div<ImageAreaCss>`
  z-index: 2;
  background-color: transparent;
  //
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
`;

const Img = styled.img<ImageCss>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  display: ${(props) => (props.display ? props.display : "block")};
  height: auto;
`;

export const Image = (props: ImageProps & ImageAreaCss) => {
  let displayStatus = props.imageLoaded ? "block" : "none";
  let loadingDisplayStatus = props.imageLoaded ? "none" : "block";
  return (
    <Area
      width={props.width}
      height={props.height}
      css={{ height: "", width: "" }}
    >
      <Img
        onLoad={() => {
          if (props.handleisLoading) props.handleisLoading(false);
        }}
        src={props.src}
        alt="nft"
        display={displayStatus}
      ></Img>
      <LoadingWaves display={loadingDisplayStatus}></LoadingWaves>
    </Area>
  );
};
