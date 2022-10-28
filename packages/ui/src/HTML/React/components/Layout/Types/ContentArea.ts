import { utility } from "../../../lib";

export type ContentAreaProps = {
  overflow?: string;
  css?: utility.ZionCss<
    undefined,
    true,
    | "border"
    | "width"
    | "height"
    | "display"
    | "placeSelf"
    | "overflow"
    | "gridArea"
    | "placeContent"
  >;
};
