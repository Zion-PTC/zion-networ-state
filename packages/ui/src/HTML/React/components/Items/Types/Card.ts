import { NftPfpProps } from "../CardTypes/Types/NftPfp";

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
  datas?: Data[];
  type: "nft-pfp" | "album";
  backgroundColor?: string;
  src?: string;
};

export type NftCardProps = CardProps<NftPfpProps>;
