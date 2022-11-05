import styled from "styled-components";

export const LdsHourglass_v1 = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  z-index: 10;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 100vw;
    height: 100vh;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(
        0.55,
        0.055,
        0.675,
        0.19
      );
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(
        0.215,
        0.61,
        0.355,
        1
      );
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
