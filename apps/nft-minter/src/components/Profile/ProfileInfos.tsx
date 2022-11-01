import { HTML } from "@zionstate/ui";
import styled from "styled-components";
import { Data, NftData } from "../../pages/nft/[id]";
import { BasePropsFromApp } from "../../pages/_app";
import Badge from "../Badge";
import {
  Like,
  More_Normal,
  Share,
  Twitter,
} from "../Icons";
import { ProfileProps } from "../Profile";
import {
  ProfileDetails,
  SocialInfos,
  ProfileDescription,
  SocialLinks,
} from "./ProfileInfos/";

const React = HTML.React;
const components = React.components;
const { Elements, Items, Pages } = components;
const { styled: FluidStyled } = React;
const { areas, layout } = FluidStyled;
const {
  Circle: Avatar,
  TextArea,
  InfoSection,
  Social: S,
  Area,
} = areas;
const { ContentArea } = layout;
const { sections } = Pages;
const { Background } = sections;
const { ButtonTypes, Button } = Elements;
const { SVGButton } = ButtonTypes;
const { Cards } = Items;

const ProfileInfosArea1 = styled.div`
  grid-area: infos;
  display: grid;
  place-self: center;
  grid-template-rows: 1.5rem auto;
  grid-template-areas:
    "."
    "content";
`;

const ProfileInfosArea = styled.div`
  grid-area: infos;
  margin-top: 1.5rem;
  display: grid;
  place-self: center;
  place-items: center;
  grid-auto-rows: 1.5rem 1.5rem 2rem 2rem 2rem 1.5rem
    3.5rem;
  height: 100%;
`;

export default function ProfileInfos(props: ProfileProps) {
  return (
    <ProfileInfosArea>
      <p>{"<account name>"}</p>
      <p>{"@handle"}</p>
      <ProfileDetails />
      <SocialInfos {...props} />
      <ProfileDescription />
      <a>
        <p>show more</p>
      </a>
      <SocialLinks {...props} />
    </ProfileInfosArea>
    // <ProfileInfosArea>
    //   <TextArea
    //     css={`
    //       grid-auto-rows: 1.5rem 1.5rem 2rem 2rem 2rem
    //         1.5rem 3.5rem;
    //       height: 100%;
    //     `}
    //     css_={{
    //       display: "grid",
    //       placeItems: "center",
    //       gridArea: "content",
    //     }}
    //   >
    //     <p>{"<account name>"}</p>
    //     <p>{"@handle"}</p>
    //     <ProfileDetails />
    //     <SocialInfos {...props} />
    //     <ProfileDescription />
    //     <a>
    //       <p>show more</p>
    //     </a>
    //     <SocialLinks {...props} />
    //   </TextArea>
    // </ProfileInfosArea>
  );
}
