import styled from "styled-components";

const nft = styled.div``;
const album = styled.div``;

type CardPropsCss = {
  nft?: boolean;
  album?: boolean;
};

export const Card_v2 = styled.div<CardPropsCss>`
  ${props => props.nft && nft}
  ${props => props.album && album}
`;
export type Card_v2Props = "Card_v2Props";
