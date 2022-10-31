// import { StaticImageData } from "next/image";
import { CssStyled, StyledCss } from "../../lib";
import { NftPfpCardProps } from "./Cards";
import { Album } from "./CardTypes/Album";
import { NftPfp } from "./CardTypes/NftPfp";

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
  likeIcon: JSX.IntrinsicElements["svg"];
  menuIcon: JSX.IntrinsicElements["svg"];
  datas?: Data[];
  type: "nft-pfp" | "album";
  backgroundColor?: string;
  src?: string;
} & StyledCss &
  CssStyled;

export type NftCardProps = CardProps<NftPfpCardProps>;

export function Card<T>(props: CardProps<T>) {
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
