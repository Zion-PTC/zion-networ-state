import styled from "styled-components";
import { ImageProps } from "../Items/sections/Types";
import type { utility } from "../../lib/global.types";

export type ImageCss = utility.ZionCss<undefined, true, "display" | "maxWidth">;

export type ImageAreaCss = {
  width: string;
  height: string;
  css?: utility.ZionCss<"width" | "height", true>;
};

const Area = styled.div<ImageAreaCss>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid black;
  z-index: 2;
  place-self: center;
  background-color: #fcdde3;
  //
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  background-color: #e5e5e5;
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
  return (
    <Area
      width={props.width}
      height={props.height}
      css={{ height: "", width: "" }}
    >
      <Img src={props.src} alt="nft"></Img>
      <div></div>
    </Area>
  );
};
