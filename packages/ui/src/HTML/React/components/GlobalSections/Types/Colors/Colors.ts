export enum Colors {
  white,
  black,
  red,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
}

export type dark = "dark";
export type bright = "bright";
export type colors = keyof typeof Colors;
export type darkColor = `${dark | bright}_${colors}`;
