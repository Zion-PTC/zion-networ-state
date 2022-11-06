import styled from "styled-components";
import { TextArea } from "../../../../style";
import { SVGButton } from "../../../../style/Buttons";

type InfosData = {
  likeIcon?: JSX.Element;
  collection?: string;
  id?: string;
  creator?: string;
};

type InfosCss = {};

// type InfosHandles = {};

export type InfosProps_v1 = InfosData &
  InfosCss &
  FluidStyled;

const NftTitle = TextArea;
const FloorPrice = TextArea;
const PlaceBid = TextArea;
const Likes = TextArea;

const Area_old = styled.div`
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

const JustifiedButton = styled(SVGButton)`
  justify-self: center;
`;

export const Infos_v1 = (props: InfosProps_v1) => {
  return (
    <Area_old {...props}>
      <InfosArea>
        <NftTitle></NftTitle>
        <FloorPrice></FloorPrice>
        <PlaceBid></PlaceBid>
      </InfosArea>
      <SocialArea>
        <LikeIcon>
          <JustifiedButton>
            {props.likeIcon}
          </JustifiedButton>
        </LikeIcon>
        <Likes gridArea="count"></Likes>
      </SocialArea>
    </Area_old>
  );
};
