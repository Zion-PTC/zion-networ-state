import styled from "styled-components";
import { useEffect, useState } from "react";
import { CssStyled } from "../../lib";
import { Background } from "./sections";
import { Image } from "../GlobalSections";
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
} from "../../style";
import { SVGButton } from "../../style/Buttons";

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

export const ItemPage = styled.div<StyledDefault>`
  display: grid;
  /* grid-template-rows: auto auto; */
  height: 100%;
  position: relative;
`;

type ItemProps = ItemStyle & {
  likeIcon: JSX.Element;
  menuIcon: JSX.Element;
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
} & CssStyled &
  StyledDefault;

export function Item(props: ItemProps) {
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
            {/* TODO like and more svg icon */}
            <SVGButton>{props.likeIcon}</SVGButton>
            <SVGButton>{props.menuIcon}</SVGButton>
          </Social>
          <TextArea css_={{ display: "block" }}>
            <H1>{props.data.title}</H1>
            <P>{props.data.description}</P>
            <P>{props.data.highestBid}</P>
          </TextArea>
          <InfoSection
            css_={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <InfoSub>
              <TextArea>
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
              <TextArea>
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
