import { utility } from "../../../lib";

export type ContentAreaProps = {
  overflow?: string;
  css?: utility.ZionCss<
    "border" | "width" | "height" | "display" | "placeSelf" | "overflow",
    true
  >;
};
