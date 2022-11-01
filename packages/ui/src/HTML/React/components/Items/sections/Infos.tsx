import styled from "styled-components";
import { CssStyled, StyledCss } from "../../../lib";
import { SVGButton } from "../../Elements/ButtonTypes";
import { TextArea } from "../../../style/Areas/TextArea";
import { Area, Social } from "../../../style";
import { Icon } from "../../../style/Areas/Icon";

const NftTitle = TextArea;
const FloorPrice = TextArea;
const PlaceBid = TextArea;
const Likes = TextArea;

export type InfosProps = {
  likeIcon?: JSX.Element;
  collection?: string;
  id?: string;
  creator?: string;
} & CssStyled &
  StyledCss;

const JustifiedButton = styled(SVGButton)`
  justify-self: center;
`;

export const Infos_v1 = (props: InfosProps) => {
  return (
    <Area cardInfos {...props}>
      <Area infos>
        <NftTitle></NftTitle>
        <FloorPrice></FloorPrice>
        <PlaceBid></PlaceBid>
      </Area>
      <Social cardInfos>
        <Icon like>
          <JustifiedButton>
            {props.likeIcon}
          </JustifiedButton>
        </Icon>
        <Likes gridArea="count"></Likes>
      </Social>
    </Area>
  );
};

export const Infos = Infos_v1;
