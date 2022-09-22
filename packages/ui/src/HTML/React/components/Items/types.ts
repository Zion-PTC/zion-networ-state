export namespace Card {
  export enum CardShapesEnum {
    landscape,
    portrait,
    square,
    slim,
  }
  export type CardShapesTypes = keyof typeof CardShapesEnum;
  export type CardProps = {
    datas?: NftPfp.NftPfpProps[];
    type: "nft-pfp" | "album";
    backgroundColor?: string;
    src: string;
  };
}

export namespace Album {
  export type AlbumProps = {
    small?: boolean;
    normal?: boolean;
    backgroundColor?: string;
    src: string;
  };
}

export enum CardFormats {
  landscape = "landscape",
  portrait = "portrait",
  square = "square",
  slim = "slim",
  resource = "resource",
}

export type CardFormatsTypes = keyof typeof CardFormats;

export interface CardPfp {
  (props: NftPfp.NftPfpProps): JSX.Element;
}

export namespace NftPfp {
  export interface NftPfpProps {
    id?: number;
    name?: string;
    slug?: string;
    small?: boolean;
    mid?: boolean;
    big?: boolean;
    src?: string;
    backgroundColor?: string;
  }
}

export interface CardsProps {
  children: NftPfp.NftPfpProps[];
  small?: boolean;
  mid?: boolean;
  big?: boolean;
}

export interface Cards {
  (props: CardsProps): JSX.Element;
}
