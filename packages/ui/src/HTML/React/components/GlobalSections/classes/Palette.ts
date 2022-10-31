import { colors } from "../Types/Colors/Colors";

export type PaletteType = {
  [key in colors]?: string;
};

export class Palette implements PaletteType {
  white?: string;
  black?: string;
  red?: string;
  orange?: string;
  yellow?: string;
  green?: string;
  cyan?: string;
  blue?: string;
  indigo?: string;
  purple?: string;
  magenta?: string;
  violet?: string;
  red_orange?: string;
  red_purple?: string;
  red_magenta?: string;
  red_yellow?: string;
  blue_green?: string;
  blue_purple?: string;
  blue_cyan?: string;
  blue_magenta?: string;
  yellow_orange?: string;
  yellow_green?: string;
  green_yellow?: string;
  green_cyan?: string;
  magenta_red?: string;
  magenta_blue?: string;
  cyan_green?: string;
  cyan_blue?: string;
}
