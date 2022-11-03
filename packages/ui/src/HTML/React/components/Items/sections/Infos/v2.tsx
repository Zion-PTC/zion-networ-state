import styled from "styled-components";
import { Area, Social, TextArea } from "../../../../style";
import { SVGButton } from "../../../../style/Buttons";
import { InfosProps } from "../Infos";

const NftTitle = TextArea;
const FloorPrice = TextArea;
const PlaceBid = TextArea;
const Likes = TextArea;

const LikeIcon = styled.div`
  width: 100%;
  grid-area: like;
  display: grid;
  place-items: end;
`;

const JustifiedButton = styled(SVGButton)`
  justify-self: center;
`;

export const Infos_v2 = (props: InfosProps) => {
  return (
    <Area cardInfos {...props}>
      <Area infos {...props}>
        <NftTitle {...props}></NftTitle>
        <FloorPrice {...props}></FloorPrice>
        <PlaceBid {...props}></PlaceBid>
      </Area>
      <Social cardInfos {...props}>
        <LikeIcon>
          <JustifiedButton {...props}>
            {props.likeIcon}
          </JustifiedButton>
        </LikeIcon>
        <Likes gridArea="count" {...props}></Likes>
      </Social>
    </Area>
  );
};
