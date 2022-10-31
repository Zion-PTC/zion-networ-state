import styled from "styled-components";
import { CssStyled, StyledCss } from "../../../lib";
import { SVGButton } from "../../Elements/ButtonTypes";
import { TextArea } from "./TextArea";

export type InfosProps = {
  likeIcon: JSX.IntrinsicElements["svg"];
  collection?: string;
  id?: string;
  creator?: string;
} & CssStyled &
  StyledCss;

const NftTitle = TextArea;
const FloorPrice = TextArea;
const PlaceBid = TextArea;
const Likes = TextArea;

const Area = styled.div`
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

const InfosArea = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 2fr 1fr 1fr;
  place-items: center;
`;

const SocialArea = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ". ." "like count";
  place-items: center;
`;

const LikeIcon = styled.div`
  width: 100%;
  grid-area: like;
  display: grid;
  place-items: end;
`;

export const Infos = (props: InfosProps) => {
  return (
    <Area {...props}>
      <InfosArea>
        <NftTitle></NftTitle>
        <FloorPrice></FloorPrice>
        <PlaceBid></PlaceBid>
      </InfosArea>
      <SocialArea>
        <LikeIcon>
          <SVGButton
            svg={props.likeIcon}
            justifySelf="end"
          />
        </LikeIcon>
        <Likes gridArea="count"></Likes>
      </SocialArea>
    </Area>
  );
};
