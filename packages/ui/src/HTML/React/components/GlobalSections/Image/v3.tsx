import styled, { keyframes } from "styled-components";
import { ImageProps } from "../Image";

export const ImageData = (props: ImageProps) => {
  const handleOnLoad = () => {
    if (props.handleisLoading)
      props.handleisLoading(false);
  };
  return (
    <div className={props.className} css={props.css}>
      <img
        onLoad={handleOnLoad}
        src={props.src}
        alt="nft"
        id="image"
      ></img>
      <div id="loading-waves">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
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
  /* border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid; */
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  place-items: center;
  ${props => {
    if (props.gridArea)
      return `grid-area: ${props.gridArea};`;
  }}
  img {
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
  div {
    display: ${props =>
      props.css_?.display
        ? props.css_?.display
        : undefined};
    display: ${props =>
      props.imageLoaded ? "none" : "block"};
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
`;
