import { HTML } from "@zionstate/ui";
import { More_Normal, Share } from "../../Icons";
import styled, { css } from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type comè = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const React = HTML.React;
const components = React.components;
const { styled: st } = React;
const { buttons } = st;
const { SVGButton } = buttons;

type SocialInfosCss = {
  size?: { small?: boolean; mid?: boolean; big?: boolean };
  className?: string;
  layout?: any;
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
      <SVGButton>
        <Share />
      </SVGButton>
      <SVGButton>
        <More_Normal />
      </SVGButton>
    </div>
  );
}

export const SocialInfos_v2 = styled(SocialInfosData)`
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

export const SocialInfos = SocialInfos_v2;
