import { HTML } from "@zionstate/ui";
import styled from "styled-components";
import { Data, NftData } from "../pages/nft/[id]";
import { BasePropsFromApp } from "../pages/_app";
import Badge from "./Badge";
import { Like, More_Normal, Share } from "./Icons";
import Twitter from "./Icons/Twitter";

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
          css={{
            zIndex: "1",
            gridArea: "image",
            backgroundColor: secBGColor,
          }}
          size={{ width: "100%", height: "100%" }}
        ></Avatar>
        <ProfileInfos>
          <TextArea
            css={{
              display: "grid",
              placeItems: "center",
              gridArea: "content",
            }}
          >
            <p>{"<account name>"}</p>
            <p>{"@handle"}</p>
            <InfoSection
              css={{
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
            <InfoSection
              css={{ gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              <button></button>
              <SVGButton svg={<Share />}></SVGButton>
              <SVGButton svg={<More_Normal />}></SVGButton>
            </InfoSection>
            <TextArea
              css={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <p>38 years old up coming raver...</p>
              <p>show more</p>
            </TextArea>
            <Social
              size="big"
              css={`
                grid-template-columns: 1fr 1fr;
              `}
            >
              <Badge
                theme={props.layout.theme}
                size="small"
              ></Badge>
              <div
                css={`
                  width: 100%;
                  height: 100%;
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  place-items: center;
                `}
              >
                <div
                  css={`
                    display: grid;
                    width: 100%;
                  `}
                >
                  <Twitter
                    css={`
                      place-self: end;
                    `}
                  ></Twitter>
                </div>
                <p>handle</p>
              </div>
            </Social>
          </TextArea>
        </ProfileInfos>
        <ContentArea
          id="content-area"
          css={{
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
