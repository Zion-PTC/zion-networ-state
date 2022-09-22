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
  resource,
}

export type CardShapesTypes = keyof typeof CardShapesEnum;

export type BasicShapeDivProps = {
  small?: boolean;
  backgroundColor?: string;
};

export type width = number;

export type height = number;

export type ShapeProps = {
  small: [width, height];
  mid: [width, height];
};
