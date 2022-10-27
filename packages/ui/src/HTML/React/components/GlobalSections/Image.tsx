import styled from "styled-components";
import { ImageProps } from "../Items/sections/Types";
import type { utility } from "../../lib/global.types";
import { LoadingWaves } from "../Icons/LoadingTypes";

export type ImageCss = utility.ZionCss<undefined, true, "display" | "maxWidth">;

export type ImageAreaCss = {
  width: string;
  height: string;
  css?: utility.ZionCss<"width" | "height", true>;
  maxWidth?: string;
  backgroundColor?: string;
  borderTop?: string;
  gridArea?: string;
  image?: {
    width?: string;
    height?: string;
    maxWidth?: string;
  };
};

const Area = styled.div<ImageAreaCss>`
  z-index: 2;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  //
  ${(props) => {
    if (props.borderTop) return `border-top: ${props.borderTop} solid;`;
  }}
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  overflow: hidden;
  ${(props) => {
    if (props.gridArea) return `grid-area: ${props.gridArea};`;
  }}
`;

const Img = styled.img<ImageCss>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  display: ${(props) => (props.display ? props.display : "block")};
  height: ${(props) => (props.height ? props.height : "auto")};
  ${(props) => props.width && `width: ${props.width};`};
`;

export const Image = (props: ImageProps & ImageAreaCss) => {
  let displayStatus = props.imageLoaded ? "block" : "none";
  let loadingDisplayStatus = props.imageLoaded ? "none" : "block";
  let borderTop = props.fullBorder ? "1px" : undefined;
  return (
    <Area
      width={props.width}
      height={props.height}
      css={{ height: "", width: "" }}
      borderTop={borderTop}
      gridArea={props.gridArea}
      backgroundColor={props.backgroundColor}
    >
      <Img
        onLoad={() => {
          console.log("loaded");

          if (props.handleisLoading) props.handleisLoading(false);
        }}
        src={props.src}
        alt="nft"
        display={displayStatus}
        maxWidth={props.image?.maxWidth}
        height={props.image?.height}
        width={props.image?.width}
      ></Img>
      <LoadingWaves display={loadingDisplayStatus}></LoadingWaves>
    </Area>
  );
};
