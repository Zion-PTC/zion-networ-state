import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
0% {height:5px;transform:translateY(0px);background:#9b59b6;}
25% {height:30px;transform:translateY(15px);background:#3498db;}
50% {height:5px;transform:translateY(0px);background:#9b59b6;}
100% {height:5px;transform:translateY(0px);background:#9b59b6;}
`;

export const LoadingIconWave = styled.div`
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
  }
  span:nth-child(2) {
    left: 11px;
    animation-delay: 0.1s;
  }
  span:nth-child(3) {
    left: 22px;
    animation-delay: 0.2s;
  }
  span:nth-child(4) {
    left: 33px;
    animation-delay: 0.3s;
  }
  span:nth-child(5) {
    left: 44px;
    animation-delay: 0.4s;
  }
`;
