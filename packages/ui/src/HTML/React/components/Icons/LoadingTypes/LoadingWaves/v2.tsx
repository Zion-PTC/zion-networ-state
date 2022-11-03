import styled, { keyframes } from "styled-components";
import { LoadingWavesProps } from "../LoadingWaves";

export function LoadingWavesData(
  props: LoadingWavesProps
) {
  return (
    <div css={props.css} className={props.className}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

const LoadingAnimation = keyframes`
0% {height:5px;transform:translateY(0px);background:#9b59b6;}
25% {height:30px;transform:translateY(15px);background:#3498db;}
50% {height:5px;transform:translateY(0px);background:#9b59b6;}
100% {height:5px;transform:translateY(0px);background:#9b59b6;}
`;

export const LoadingWaves_v2 = styled(LoadingWavesData)`
  display: ${props =>
    props.css_?.display ? props.css_?.display : undefined};
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
`;
