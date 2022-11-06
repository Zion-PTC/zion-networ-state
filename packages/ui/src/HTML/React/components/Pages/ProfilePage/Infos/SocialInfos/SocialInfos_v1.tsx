import styled from "styled-components";
import { More_Normal } from "../../../../Icons/More_Normal";
import { Share } from "../../../../Icons/Share";
import { SVGButton } from "../../../../../style/Buttons";

type SocialInfosCss = {
  size?: { small?: boolean; mid?: boolean; big?: boolean };
  className?: string;
  layout?: any;
  theme: FluidTheme;
};

export function SocialInfosData(props: SocialInfosCss) {
  return (
    <div className={props.className}>
      <div>
        <button id="follow-btn">
          <p>Follow</p>
        </button>
      </div>
      <SVGButton theme={props.theme}>
        <Share theme={props.theme} />
      </SVGButton>
      <SVGButton theme={props.theme}>
        <More_Normal theme={props.theme} />
      </SVGButton>
    </div>
  );
}

export const SocialInfos_v1 = styled(SocialInfosData)`
  width: 140%;
  height: 100%;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-areas: "follow . .";
  display: grid;
  #follow-btn {
    background-color: red;
    grid-area: follow;
    width: 100%;
    height: 100%;
    place-self: center;
    background-color: #e5e5e5;
    color: ${props => props.theme.palette.darkgrey};
    border-radius: 100px;
    border: 1px solid
      ${props => props.theme.primary.borderColor};
  }
`;
