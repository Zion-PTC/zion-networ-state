import { utility } from "../global.types";
import { checkPropAndSetDefault, checkSize } from "./checkProps/";

export default <
  T extends { css: utility.ZionCss } & {
    small?: boolean;
    mid?: boolean;
    big?: boolean;
  }
>(
  type: "propsAndSetDefault" | "checkSize",
  props: T,
  property: keyof utility.ZionCss,
  defaultValue: T["css"][keyof utility.ZionCss]
) => {
  let result;
  switch (type) {
    case "propsAndSetDefault":
      result = checkPropAndSetDefault(props, property, defaultValue);
      break;
    case "checkSize":
      result = checkSize(props);
      break;
    default:
      result = "";
      break;
  }
  return props;
};
