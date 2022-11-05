import { StaticImageData } from "next/image";
import styled from "styled-components";
import { Circle } from "../../../style";
import { Background } from "../sections";
import { Content } from "./sections/Content";
import { Infos } from "./sections/Infos";
import { NavBar } from "./sections/NavBar";

export type ProfilePropsFromApp = {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  columns: number;
  theme: FluidTheme;
};

export type BasePropsFromApp = {
  profile: ProfilePropsFromApp;
};

export type Data<D> = { data: D[] };

export interface NftsData {
  [key: string]: NftData;
}

export interface NftData {
  id: number;
  name: string;
  slug: string;
  [key: string]: string | number | StaticImageData[];
  src: string;
}
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

export type ProfilePage_v1Props = Data<NftData> &
  BasePropsFromApp & {
    background?: { bottomBackgroundColor?: string };
    className?: string;
    size?: {
      small?: boolean;
      mid?: boolean;
      big?: boolean;
    };
    theme: FluidTheme;
  };

const ProfileArea = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  height: 100%;
  width: 100vw;
  position: relative;
  overflow: auto;
`;

const Avatar = styled(Circle)`
  z-index: 1;
  grid-area: image;
  background-color: ${props => {
    return props.theme.secondary.backgroundColor;
  }};
`;

const BackgroundStyled = styled(Background)`
  grid-template-rows: 40vw 40vw auto auto 3rem auto;
`;

// TODO #4 la pagina non scrolla, capire come mai e far
// scollare il contenuto.

export function ProfilePage_v1(
  props: ProfilePage_v1Props
) {
  return (
    <ProfileArea id="page">
      <BackgroundStyled profilePage {...props.background}>
        <Avatar
          size={{ width: "100%", height: "100%" }}
          theme={props.theme}
        ></Avatar>
        <Infos {...props} />
        <NavBar {...props} />
        <Content {...props} />
      </BackgroundStyled>
    </ProfileArea>
  );
}

export const Profile = ProfilePage_v1;
