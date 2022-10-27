import styled from "styled-components";
import { useEffect, useState } from "react";
import { H1 } from "../Elements/H1";
import { P } from "../Elements/P";
import { Image } from "../GlobalSections/Image";
import { Like } from "../Icons/Like";
import { More } from "../Icons/More";
// import { Cards } from "../Items";
// import { BasicCardProps } from "../Items/Types";
// import { ContentArea } from "../Layout";
// import { Area } from "../Layout/sections";
import { InfoSub, TextArea } from "./sections";
import { Avatar } from "./sections/Avatar";
import { Background } from "./sections/Background";
import { BottomSpace } from "./sections/BottomSpace";
import { Circle } from "./sections/Circle";
import { InfoSection } from "./sections/InfoSection";
import { InfoSubDetails } from "./sections/InfoSubDetails";
import { ProfileId } from "./sections/ProfileId";
import { Social } from "./sections/Social";

export type ItemStyle = {
  src: string;
  background?: {
    bottomBackgroundColor?: string;
    image?: {
      backgroundColor?: string;
    };
    bottomSpace?: {
      social?: {};
      itemInfos?: {};
      infoSection?: {
        infosubs?: {
          textArea?: { p?: {} }[];
          infoSubDetails?: {
            avatar?: {
              circle?: {
                borderColor?: string;
              };
            };
            profileId?: {};
          };
        }[];
      };
    };
  };
  contentArea?: {
    area?: {
      parentWidth: number;
      parentHeight: number;
      width: number;
      height: number;
      blockSize: number;
      columns: number;
    };
    parentWidth: number;
    parentHeight: number;
    width: number;
    height: number;
    blockSize: number;
    columns: number;
  };
};

export const ItemPage = styled.div`
  display: grid;
  /* grid-template-rows: auto auto; */
  height: 100%;
  position: relative;
`;

type ItemProps = ItemStyle & {
  likeIcon: JSX.IntrinsicElements["svg"];
  menuIcon: JSX.IntrinsicElements["svg"];
  data: {
    title: string;
    description: string;
    infosub: {
      info: string;
      creatorField: string;
      royalties: string;
    };
    highestBid: string;
  };
};

export function Item(props: ItemProps) {
  const INFOSUB = "Collection";
  const INFOSUBCREATORFIELD = "Creator";
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [src, setSrc] = useState("");

  useEffect(() => {
    !isLoading ? setImageLoaded(true) : setImageLoaded(false);
    setSrc(props.src);
  }, [isLoading]);

  const circleBorderColorCheck = function () {
    if (!props.background?.bottomSpace?.infoSection?.infosubs?.length)
      return "black";
    if (!props.background.bottomSpace.infoSection.infosubs[0]) return "black";
    if (!props.background.bottomSpace.infoSection.infosubs[0].infoSubDetails)
      return "black";
    if (
      !props.background.bottomSpace.infoSection.infosubs[0].infoSubDetails
        .avatar
    )
      return "black";
    if (
      !props.background.bottomSpace.infoSection.infosubs[0].infoSubDetails
        .avatar.circle
    )
      return "black";
    if (
      !props.background.bottomSpace.infoSection.infosubs[0].infoSubDetails
        .avatar.circle.borderColor
    )
      return "black";
    return props.background.bottomSpace.infoSection.infosubs[0].infoSubDetails
      .avatar.circle.borderColor;
  };

  const circleBorderColor = circleBorderColorCheck();

  return (
    <ItemPage>
      <Background
        bottomBackgroundColor={props.background?.bottomBackgroundColor}
      >
        <Image
          fullBorder={true}
          src={src}
          width="10rem"
          height="10rem"
          imageLoaded={imageLoaded}
          handleisLoading={setIsLoading}
          gridArea="image"
          backgroundColor={props.background?.image?.backgroundColor}
        ></Image>
        <BottomSpace gridArea="infos">
          <Social>
            {/* TODO like and more svg icon */}
            <Like>like</Like>
            <More>more</More>
          </Social>
          <TextArea css={{ display: "block" }}>
            <H1>{props.data.title}</H1>
            <P>{props.data.description}</P>
            <P>{props.data.highestBid}</P>
          </TextArea>
          <InfoSection>
            <InfoSub>
              <TextArea>
                <P bold>{INFOSUBCREATORFIELD}</P>
                <P dimmed>{props.data.infosub.royalties}</P>
              </TextArea>
              <InfoSubDetails>
                <Avatar>
                  <Circle borderColor={circleBorderColor} />
                </Avatar>
                <ProfileId></ProfileId>
              </InfoSubDetails>
            </InfoSub>
            <InfoSub>
              <TextArea>
                <P bold>{INFOSUB}</P>
              </TextArea>
              <InfoSubDetails>
                <Avatar>
                  <Circle borderColor={circleBorderColor}></Circle>
                </Avatar>
                <ProfileId></ProfileId>
              </InfoSubDetails>
            </InfoSub>
          </InfoSection>
        </BottomSpace>
      </Background>
      {/* <ContentArea> */}
      {/* list this values in contentArea and stick Area directly in content Area. I think thas also the CARDS component shall be included inside the content area. */}
      {/* <Area
          width={props.contentArea.width}
          height={props.contentArea.height}
          blockSize={props.contentArea.blockSize}
          columns={props.contentArea.columns}
        >
          <Cards
            likeIcon={props.likeIcon}
            menuIcon={props.menuIcon}
            type="nft-pfp"
          >
            {props.contentArea.data}
          </Cards>
        </Area> */}
      {/*this here under is the infinte scroll loader, we need to create a pagination method and send it a paginated result of the nfts */}
      {/* <Loader
        isLoading={isLoading}
        isLastPage={isLastPage}
        loadMoreCallback={loadMoreCallback}
      /> */}
      {/* </ContentArea> */}
    </ItemPage>
  );
}
