import styled from "styled-components";
import { CssStyled } from "../../lib";
import { Album } from "./CardTypes/Album";
import { NftPfp, NftPfpProps } from "./CardTypes/NftPfp";

export enum CardFormats {
  landscape = "landscape",
  portrait = "portrait",
  square = "square",
  slim = "slim",
  resource = "resource",
}

export type CardFormatsTypes = keyof typeof CardFormats;

export enum CardShapesEnum {
  landscape,
  portrait,
  square,
  slim,
}

export type CardShapesTypes = keyof typeof CardShapesEnum;

export type CardProps<Data> = {
  likeIcon: JSX.Element;
  menuIcon: JSX.Element;
  datas?: Data[];
  type: "nft-pfp" | "album";
  backgroundColor?: string;
  src?: string;
} & StyledDefault &
  CssStyled &
  NftPfpProps;

export function Card_v1<T>(props: CardProps<T>) {
  let { type } = props;
  let Element: () => JSX.Element;
  switch (type) {
    case "nft-pfp":
      Element = () => <NftPfp {...props}></NftPfp>;
      break;
    case "album":
      Element = () => <Album {...props}></Album>;
      break;
    default:
      Element = () => <NftPfp {...props}></NftPfp>;
      break;
  }
  return <Element></Element>;
}

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

export const Card = Card_v1;
