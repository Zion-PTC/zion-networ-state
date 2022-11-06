import styled from "styled-components";
import { LogoZion } from "../../../Icons/LogoZion";

type Social_v1Datas = {};

type Social_v1Css = {};

type ToEdit = Social_v1Datas & Social_v1Css;
type FromLibrary = StyledDefault;

export type Social_v1Props = ToEdit & FromLibrary;

function Social_v1Data() {
  return (
    <div id="social">
      <button>
        <LogoZion />
      </button>
      <button>
        <LogoZion />
      </button>
      <button>
        <LogoZion />
      </button>
      <div></div>
      <button id="last">
        <div id="svg">
          <LogoZion />
        </div>
      </button>
    </div>
  );
}

export const Social_v1 = styled(Social_v1Data)`
  div {
    overflow: auto;
  }
  #social {
    display: grid;
    overflow: auto;
    grid-template-columns: 1fr 1fr 1fr 5fr 1fr;
    align-items: center;
    border: none;

    button {
      display: grid;
      width: 100%;
      border: none;
      background-color: transparent;
      cursor: pointer;
      #svg {
        place-self: end;
        display: grid;
        place-items: center;
      }
    }
  }
`;
