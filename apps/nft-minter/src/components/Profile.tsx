import { HTML } from "@zionstate/ui";
import styled from "styled-components";
import { Data, NftData } from "../pages/nft/[id]";
import { BasePropsFromApp } from "../pages/_app";
import { ProfileContent } from "./Profile/ProfileContent";
import { ProfileInfos } from "./Profile/ProfileInfos";
import { ProfileNavBar } from "./Profile/ProfileNavBar";

const React = HTML.React;
const components = React.components;
const { Pages } = components;
const { styled: FluidStyled } = React;
const { areas } = FluidStyled;
const { Circle } = areas;
const { sections } = Pages;
const { Background } = sections;

export type ProfileProps = Data<NftData> &
  BasePropsFromApp & {
    background?: { bottomBackgroundColor?: string };
    className?: string;
    size?: {
      small?: boolean;
      mid?: boolean;
      big?: boolean;
    };
  };

const ProfileArea = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  height: 100%;
  width: 100vw;
  position: relative;
`;

const Avatar = styled(Circle)`
  z-index: 1;
  grid-area: image;
  background-color: ${props =>
    props.theme.secondary.backgroundColor};
`;

const BackgroundStyled = styled(Background)`
  grid-template-rows: 40vw 40vw auto auto 3rem auto;
`;

export function Profile_v3(props: ProfileProps) {
  return (
    <ProfileArea id="page">
      <BackgroundStyled profilePage {...props.background}>
        <Avatar
          size={{ width: "100%", height: "100%" }}
        ></Avatar>
        <ProfileInfos {...props} />
        <ProfileNavBar {...props} />
        <ProfileContent {...props} />
      </BackgroundStyled>
    </ProfileArea>
  );
}

export const Profile = Profile_v3;

//PORTATO
