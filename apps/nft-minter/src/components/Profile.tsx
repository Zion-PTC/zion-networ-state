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
        <div
          css={`
            width: 100vw;
            height: 5rem;
            background-color: red;
            grid-area: navbar;
          `}
        ></div>
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
