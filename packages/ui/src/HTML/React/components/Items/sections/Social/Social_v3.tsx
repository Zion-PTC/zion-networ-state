import styled from "styled-components";
import { LogoZion } from "../../../Icons/LogoZion";

function SocialData() {
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

export const Social_v3 = styled(SocialData)`
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
