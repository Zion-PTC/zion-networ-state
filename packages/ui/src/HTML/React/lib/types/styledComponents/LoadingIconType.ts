import {
  DefaultTheme,
  StyledComponent,
} from "styled-components";
import { BooleanDisplay } from "../../global.types";

export type LoadingIconType = StyledComponent<
  "div",
  DefaultTheme,
  BooleanDisplay,
  never
>;
