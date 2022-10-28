import { HTML } from "@zionstate/ui";
import styled from "styled-components";
import { Data, NftData } from "../pages/nft/[id]";
import { BasePropsFromApp } from "../pages/_app";
import Badge from "./Badge";
import { Like, More_Normal, Share } from "./Icons";

const components = HTML.React.components;
const { Elements, Items, Layout, Pages } = components;
const { ContentArea, sections: layoutSections } = Layout;
const { Area } = layoutSections;
const { sections } = Pages;
const {
  Circle: Avatar,
  TextArea,
  InfoSection,
  Social: S,
  Background,
} = sections;
const Social = InfoSection;
const { ButtonTypes } = Elements;
const { SVGButton } = ButtonTypes;
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

const ProfileInfos = styled.div`
  grid-area: infos;
  display: grid;
  place-self: center;
  grid-template-rows: 1.5rem auto;
  grid-template-areas:
    "."
    "content";
`;

export default function Profile(props: ProfileProps) {
  let data = props.data;
  const LikeIcon = Like({ fill: props.layout.theme.primary.borderColor });
  const More_NormalIcon = More_Normal({
    fill: props.layout.theme.primary.borderColor,
  });
  const ShareIcon = Share({ fill: props.layout.theme.primary.borderColor });
  return (
    <ProfileArea id="page">
      <Background
        profilePage
        bottomBackgroundColor={props.background?.bottomBackgroundColor}
      >
        <Avatar
          css_={{
            zIndex: "1",
            gridArea: "image",
            backgroundColor: props.layout.theme.secondary.backgroundColor,
          }}
          size={{ width: "100%", height: "100%" }}
        ></Avatar>
        <ProfileInfos>
          <TextArea
            css_={{
              display: "grid",
              placeItems: "center",
              gridArea: "content",
            }}
          >
            <p>{"<account name>"}</p>
            <p>{"@handle"}</p>
            <InfoSection
              css_={{
                gridTemplateColumns: "1fr 1fr 1fr",
                placeContent: "center",
              }}
              size="mid"
            >
              <TextArea>
                <p>4</p>
                <p>Tracks</p>
              </TextArea>
              <TextArea>
                <p>1,4k</p>
                <p>Followers</p>
              </TextArea>
              <TextArea>
                <p>48</p>
                <p>Following</p>
              </TextArea>
            </InfoSection>
            <InfoSection css={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
              <button></button>
              <SVGButton svg={ShareIcon}></SVGButton>
              <SVGButton svg={More_NormalIcon}></SVGButton>
            </InfoSection>
            <TextArea css_={{ display: "grid", placeItems: "center" }}>
              <p>38 years old up coming raver...</p>
              <p>show more</p>
            </TextArea>
            <Social css_={{ gridTemplateColumns: "1fr 1fr" }} size="big">
              <Badge size="small"></Badge>
              <div>twitter</div>
            </Social>
          </TextArea>
        </ProfileInfos>
        <ContentArea
          id="content-area"
          css={{ gridArea: "content", placeContent: "center" }}
        >
          <Area
            id="area-area"
            width={props.profile.width}
            height={props.profile.height}
            blockSize={props.profile.blockSize}
            columns={props.profile.columns}
          >
            <Cards
              likeIcon={LikeIcon}
              menuIcon={More_NormalIcon}
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
