import styled, { css } from "styled-components";
import { PropsWithChildren } from "react";
import { NftPfpProps } from "../../Items/CardTypes";
import { Infos, InfosProps } from "./Infos";

type toDelete = {
  background?: { bottomBackgroundColor?: string };
};

type ProfilePage_v2Datas = {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  columns: number;
  theme: FluidTheme;
  data: NftPfpProps[];
  infos: InfosProps;
} & toDelete;

type ProfilePage_v2Css = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = ProfilePage_v2Datas & ProfilePage_v2Css;
type FromLibrary = FluidStyled;

export type ProfilePage_v2Props = ToEdit & FromLibrary;

// const BackgroundStyled = styled(Background)`
//   grid-template-rows: 40vw 40vw auto auto 3rem auto;
// `;

// const Avatar = styled(Circle)`
//   z-index: 1;
//   grid-area: image;
//   background-color: ${props => {
//     return props.theme.secondary.backgroundColor;
//   }};
// `;

export const ProfilePageData = (
  props: PropsWithChildren<ProfilePage_v2Props>
) => {
  return (
    <div className={props.className} css={props.css}>
      <div id="bg-upper"></div>
      <div id="circle"></div>
      <Infos {...props.infos} />
      {/* <NavBar {...props} /> */}
      {/* <Content {...props} /> */}
      {/* <BackgroundStyled profilePage {...props.background}>
      </BackgroundStyled> */}
      {props.children}
    </div>
  );
};

const shown = css`
  overflow: none;
`;

export const ProfilePage_v2 = styled(ProfilePageData)`
  display: grid;
  overflow: auto;
  grid-template-columns: 2rem 1fr 2rem;
  grid-template-rows: 2rem 4fr 4fr 1fr 2rem;
  ${props => {
    if (props.infos.isShowMore) return shown;
    return "";
  }}
  grid-template-areas:
    ". . ."
    ". circle ."
    ". infos ."
    ". navbar ."
    ". content .";
  width: 100%;
  height: 100%;
  transition: none;
  #bg-upper {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 15rem;
    background-color: #c4c4c4;
  }
  #circle {
    z-index: 1;
    grid-area: circle;
    place-self: center;
    background-color: red;
    border-radius: 100%;
    width: 15rem;
    height: 15rem;
  }
`;
