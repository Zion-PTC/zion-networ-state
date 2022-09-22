export enum CardFormats {
  landscape = "landscape",
  portrait = "portrait",
  square = "square",
  slim = "slim",
  resource = "resource",
}

export enum CardShapesEnum {
  landscape,
  portrait,
  square,
  slim,
}

export type CardShapesTypes = keyof typeof CardShapesEnum;
export type CardProps = {
  type: "nft-pfp" | "album";
  backgroundColor?: string;
};

export type LandscapeProps = {
  small?: boolean;
  backgroundColor?: string;
};

export type PortraitProps = {
  small?: boolean;
  backgroundColor?: string;
};

export type SlimProps = {
  small?: boolean;
  backgroundColor?: string;
};

export type SquareProps = {
  small?: boolean;
  backgroundColor?: string;
};
