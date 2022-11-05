import styled, { css } from "styled-components";
import { More_Normal } from "../../../../../Icons/More_Normal";
import { Share } from "../../../../../Icons/Share";
import { SVGButton } from "../../../../../../style/Buttons";

type SocialInfosCss = {
  size?: { small?: boolean; mid?: boolean; big?: boolean };
  className?: string;
  layout?: any;
  theme: FluidTheme;
};

const small = css`
  width: 50vw;
`;

const mid = css`
  width: 60vw;
`;

const big = css`
  width: 70vw;
`;

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
  width: 100%;
  height: 100%;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-areas: "follow . .";
  display: grid;
  ${props => props.size?.big && big}
  ${props => props.size?.mid && mid}
  ${props => props.size?.small && small}
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

export const SocialInfos = SocialInfos_v1;
