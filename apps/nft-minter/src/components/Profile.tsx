import { HTML } from "@zionstate/ui";
import styled from "styled-components";
import { Data, NftData } from "../pages/nft/[id]";
import { BasePropsFromApp } from "../pages/_app";
import Badge from "./Badge";
import {
  Like,
  More_Normal,
  Share,
  Twitter,
} from "./Icons";
import ProfileInfos from "./Profile/ProfileInfos";

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
const Social = InfoSection;
const { ButtonTypes, Button } = Elements;
const { Cards } = Items;

export type ProfileProps = Data<NftData> &
  BasePropsFromApp & {
    background?: { bottomBackgroundColor?: string };
  };

const ProfileArea = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  height: 100%;
  width: 100vw;
  position: relative;
`;

const TwitterStyled = styled(Twitter)`
  place-self: end;
  background-color: red;
`;

export default function Profile(props: ProfileProps) {
  let data = props.data;
  // const LikeIcon = Like({
  //   fill: props.layout.theme.primary.borderColor,
  // });
  // const More_NormalIcon = More_Normal({
  //   fill: props.layout.theme.primary.borderColor,
  // });
  // const ShareIcon = Share({
  //   fill: props.layout.theme.primary.borderColor,
  // });
  const secBGColor =
    props.layout.theme.secondary.backgroundColor;
  return (
    <ProfileArea id="page">
      <Background profilePage {...props.background}>
        <Avatar
          css_={{
            zIndex: "1",
            gridArea: "image",
            backgroundColor: secBGColor,
          }}
          size={{ width: "100%", height: "100%" }}
        ></Avatar>
        <ProfileInfos {...props} />
        <ul
          css={`
            width: 100vw;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-areas: tracks album playlist repost;
            list-style-type: none;
            place-content: end;
            height: 5rem;
            border-bottom: 2px solid
              ${props.layout.theme.primary.borderColor};
            grid-area: navbar;
          `}
        >
          <li
            css={`
            display:grid
              grid-area: tracks;
              height: 100%;
              width: 100%;
              &:hover {
  border-bottom: 3px solid ${props.layout.theme.primary.borderColor};
}

            `}
          >
            TRACKS
          </li>
          <li
            css={`
             display:grid
              grid-area: album;
              height: 100%;
              width: 100%;
              &:hover {
  border-bottom: 3px solid ${props.layout.theme.primary.borderColor};
}
            `}
          >
            ALBUM
          </li>
          <li
            css={`
             display:grid
              grid-area: playlist;
              height: 100%;
              width: 100%;
              &:hover {
  border-bottom: 3px solid ${props.layout.theme.primary.borderColor};
}
            `}
          >
            PLAYLISTS
          </li>
          <li
            css={`
             display:grid
              grid-area: repost;
              
              height: 100%;
              width: 100%;
              &:hover {
  border-bottom: 3px solid ${props.layout.theme.primary.borderColor};
}
            `}
          >
            REPOST
          </li>
        </ul>
        <ContentArea
          id="content-area"
          css_={{
            gridArea: "content",
            placeContent: "center",
          }}
        >
          <Area
            id="area-area"
            width={props.profile.width}
            height={props.profile.height}
            blockSize={props.profile.blockSize}
            columns={props.profile.columns}
          >
            <Cards
              likeIcon={<Like />}
              menuIcon={<More_Normal />}
              type="nft-pfp"
            >
              {data}
            </Cards>
          </Area>
          {/*this here under is the infinte scroll loader, we need to create a pagination method and send it a paginated result of the nfts */}
          {/* <Loader
        isLoading={isLoading}
        isLastPage={isLastPage}
        loadMoreCallback={loadMoreCallback}
      /> */}
        </ContentArea>
      </Background>
    </ProfileArea>
  );
}
