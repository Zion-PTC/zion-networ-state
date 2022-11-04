import styled from "styled-components";
import { useEffect, useState } from "react";
import { Background } from "../sections";
import { Image } from "../../GlobalSections";
import {
  Avatar,
  BottomSpace,
  Circle,
  H1,
  InfoSection,
  InfoSub,
  InfoSubDetails,
  P,
  ProfileId,
  Social,
  TextArea,
} from "../../../style";
import { SVGButton } from "../../../style/Buttons";

type ItemStyle = {
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

type ItemDatas_v1 = {
  likeIcon: JSX.Element;
  menuIcon: JSX.Element;
  data: {
    title: string;
    description: string;
    highestBid: string;
    infosub: {
      info: string;
      creatorField: string;
      royalties: string;
    };
  };
};

type ItemCss_v1 = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

type ToEdit = ItemDatas_v1 & ItemCss_v1;
type Theme = { theme: FluidTheme };
type FromLibrary = FluidStyled & Theme;

export type ItemProps_v1 = ToEdit &
  FromLibrary &
  ItemStyle;

export const ItemPage = styled.div<StyledDefault>`
  display: grid;
  /* grid-template-rows: auto auto; */
  height: 100%;
  position: relative;
`;

export function Item_v1(props: ItemProps_v1) {
  const INFOSUB = "Collection";
  const INFOSUBCREATORFIELD = "Creator";
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [src, setSrc] = useState("");

  useEffect(() => {
    !isLoading
      ? setImageLoaded(true)
      : setImageLoaded(false);
    setSrc(props.src);
  }, [isLoading]);

  const circleBorderColorCheck = function () {
    if (
      !props.background?.bottomSpace?.infoSection?.infosubs
        ?.length
    )
      return "black";
    if (
      !props.background.bottomSpace.infoSection.infosubs[0]
    )
      return "black";
    if (
      !props.background.bottomSpace.infoSection.infosubs[0]
        .infoSubDetails
    )
      return "black";
    if (
      !props.background.bottomSpace.infoSection.infosubs[0]
        .infoSubDetails.avatar
    )
      return "black";
    if (
      !props.background.bottomSpace.infoSection.infosubs[0]
        .infoSubDetails.avatar.circle
    )
      return "black";
    if (
      !props.background.bottomSpace.infoSection.infosubs[0]
        .infoSubDetails.avatar.circle.borderColor
    )
      return "black";
    return props.background.bottomSpace.infoSection
      .infosubs[0].infoSubDetails.avatar.circle
      .borderColor;
  };

  const circleBorderColor = circleBorderColorCheck();
  console.log(props.theme.textColor);

  return (
    <ItemPage css={props.css} className={props.className}>
      <Background
        item
        bottomBackgroundColor={
          props.background?.bottomBackgroundColor
        }
      >
        <Image
          fullBorder={true}
          src={src}
          width="10rem"
          height="10rem"
          imageLoaded={imageLoaded}
          handleisLoading={setIsLoading}
          gridArea="image"
          backgroundColor={
            props.background?.image?.backgroundColor
          }
        ></Image>
        <BottomSpace css_={{ gridArea: "infos" }}>
          <Social>
            <SVGButton {...props}>
              {props.likeIcon}
            </SVGButton>
            <SVGButton {...props}>
              {props.menuIcon}
            </SVGButton>
          </Social>
          <TextArea css_={{ display: "block" }} {...props}>
            <H1>{props.data.title}</H1>
            <P>{props.data.description}</P>
            <P>{props.data.highestBid}</P>
          </TextArea>
          <InfoSection
            css_={{ gridTemplateColumns: "1fr 1fr" }}
            {...props}
          >
            <InfoSub>
              <TextArea {...props}>
                <P bold>{INFOSUBCREATORFIELD}</P>
                <P dimmed>
                  {props.data.infosub.royalties}
                </P>
              </TextArea>
              <InfoSubDetails>
                <Avatar>
                  <Circle
                    borderColor={circleBorderColor}
                  />
                </Avatar>
                <ProfileId></ProfileId>
              </InfoSubDetails>
            </InfoSub>
            <InfoSub>
              <TextArea {...props}>
                <P bold>{INFOSUB}</P>
              </TextArea>
              <InfoSubDetails>
                <Avatar>
                  <Circle
                    borderColor={circleBorderColor}
                  ></Circle>
                </Avatar>
                <ProfileId></ProfileId>
              </InfoSubDetails>
            </InfoSub>
          </InfoSection>
        </BottomSpace>
      </Background>
    </ItemPage>
  );
}
