import styled, { keyframes } from "styled-components";
import { ImageProps } from "../Image";

type function_componentsDatas = {
  width?: string;
  height?: string;
  maxWidth?: string;
  backgroundColor?: string;
  borderTop?: string;
  gridArea?: string;
  display?: string;
  fullBorder?: boolean;
  imageLoaded: boolean;
  image?: {
    width?: string;
    height?: string;
    maxWidth?: string;
  };
};

type function_componentsCss = {};

type ToEdit = function_componentsDatas &
  function_componentsCss;
type Theme = { theme: FluidTheme };
type FromLibrary = FluidStyled & Theme;

export type function_componentsProps = ToEdit &
  FromLibrary;

export const ImageData = (props: ImageProps) => {
  const handleOnLoad = () => {
    if (props.handleisLoading)
      props.handleisLoading(false);
    console.log("loaded");
  };
  return (
    <div className={props.className} css={props.css}>
      <img
        onLoad={handleOnLoad}
        src={props.src}
        alt="nft"
        id="image"
      ></img>
      <div id="test"></div>
      <div id="loading-waves-container">
        <div id="loading-waves">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

const LoadingAnimation = keyframes`
0% {height:5px;transform:translateY(0px);background:#9b59b6;}
25% {height:30px;transform:translateY(15px);background:#3498db;}
50% {height:5px;transform:translateY(0px);background:#9b59b6;}
100% {height:5px;transform:translateY(0px);background:#9b59b6;}
`;

export const Image_v3 = styled(ImageData)`
  z-index: 1;
  overflow: hidden;
  grid-area: ${props => props.gridArea};
  background-color: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : "transparent"};
  //
  ${props => {
    if (props.borderTop)
      return `border-top: ${props.borderTop} solid;`;
  }}
  border-top: ${props =>
    props.fullBorder ? "1px" : undefined};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  /* #test {
    background-color: yellow;
    width: 100%;
    height: 100%;
    place-self: center;
    position:absolute
  } */
  #image {
    border-image: none;
    display: ${props =>
      props.imageLoaded ? "block" : "none"};
    max-width: ${props => props.image?.maxWidth};
    width: ${props => props.image?.width};
    height: ${props => props.image?.height};
    max-width: ${props =>
      props.maxWidth ? props.maxWidth : "100%"};
    display: ${props =>
      props.display ? props.display : "block"};
    height: ${props =>
      props.height ? props.height : "auto"};
    ${props => props.width && `width: ${props.width};`};
  }
  #loading-waves-container {
    place-self: center;
    grid-area: content;
    position: absolute;
    #loading-waves {
      place-self: center;
      display: ${props =>
        props.css_?.display
          ? props.css_?.display
          : undefined};
      display: ${props => {
        console.log(props);

        return props.imageLoaded ? "none" : "block";
      }};
      position: relative;
      span {
        display: block;
        bottom: 0px;
        width: 9px;
        height: 5px;
        background: #9b59b6;
        position: absolute;
        animation: ${LoadingAnimation} 1.5s infinite
          ease-in-out;
        animation-delay: 0.2s;
      }
      span:nth-child(2) {
        left: 11px;
        animation-delay: 0.3s;
      }
      span:nth-child(3) {
        left: 22px;
        animation-delay: 0.4s;
      }
      span:nth-child(4) {
        left: -11px;
        animation-delay: 0.1s;
      }
      span:nth-child(5) {
        left: -22px;
        animation-delay: 0s;
      }
    }
  }
`;
