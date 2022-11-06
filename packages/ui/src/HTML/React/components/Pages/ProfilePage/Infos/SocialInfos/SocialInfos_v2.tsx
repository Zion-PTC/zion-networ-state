import styled, { css } from "styled-components";
import { PropsWithChildren } from "react";
import { SVGButton } from "../../../../../style/Buttons";
import { Share } from "../../../../Icons/Share";
import { More_Normal } from "../../../../Icons/More_Normal";

type SocialInfos_v2Datas = {
  size?: { small?: boolean; mid?: boolean; big?: boolean };
  className?: string;
  layout?: any;
  theme: FluidTheme;
};

type SocialInfos_v2Css = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = SocialInfos_v2Datas & SocialInfos_v2Css;
type FromLibrary = FluidStyled;

export type SocialInfos_v2Props = ToEdit & FromLibrary;

export const SocialInfos_v2Data = (
  props: PropsWithChildren<SocialInfos_v2Props>
) => {
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
};

const fillable = css`
  width: 100%;
  height: 100%;
`;

export const SocialInfos_v2 = styled(SocialInfos_v2Data)`
  width: 100%;
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
