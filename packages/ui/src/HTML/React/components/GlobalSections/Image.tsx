import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import type {
  CssStyled,
  StyledCss,
  utility,
} from "../../lib/global.types";
import { LoadingWaves } from "../Icons/LoadingTypes";

export type ImageProps = {
  src: string;
  imageLoaded?: boolean;
  handleisLoading?: Dispatch<SetStateAction<boolean>>;
  display?: string;
  fullBorder?: boolean;
};

export type ImageCss = utility.ZionCss<
  undefined,
  true,
  "display" | "maxWidth"
>;

export type ImageAreaCss = {
  width: string;
  height: string;
  maxWidth?: string;
  backgroundColor?: string;
  borderTop?: string;
  gridArea?: string;
  image?: {
    width?: string;
    height?: string;
    maxWidth?: string;
  };
} & CssStyled &
  StyledCss;

const Area = styled.div<ImageAreaCss>`
  z-index: 1;
  background-color: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : "transparent"};
  //
  ${props => {
    if (props.borderTop)
      return `border-top: ${props.borderTop} solid;`;
  }}
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  overflow: hidden;
  ${props => {
    if (props.gridArea)
      return `grid-area: ${props.gridArea};`;
  }}
`;

const Img = styled.img<ImageCss>`
  max-width: ${props =>
    props.maxWidth ? props.maxWidth : "100%"};
  display: ${props =>
    props.display ? props.display : "block"};
  height: ${props =>
    props.height ? props.height : "auto"};
  ${props => props.width && `width: ${props.width};`};
`;

export const Image = (
  props: ImageProps & ImageAreaCss
) => {
  let displayStatus = props.imageLoaded ? "block" : "none";
  let loadingDisplayStatus = props.imageLoaded
    ? "none"
    : "block";
  let borderTop = props.fullBorder ? "1px" : undefined;
  return (
    <Area
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
    </Area>
  );
};
