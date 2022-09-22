import { utility } from "../global.types";

const ERROR = "Something went wrong";

export function preCheckProp<
  T extends { css?: utility.ZionCss } = { css?: utility.ZionCss }
>(props: T): { css: utility.ZionCss } {
  if (props.css) return props as { css: utility.ZionCss };
  else throw new Error("");
}

export function checkPropAndSetDefault<
  T extends { css: utility.ZionCss },
  P extends keyof utility.ZionCss,
  D extends T["css"][P]
>(props: T, property: P, defaultValue: D): NonNullable<utility.ZionCss[P]> {
  const result = props.css
    ? props.css[property]
      ? props.css[property]
      : defaultValue
    : defaultValue;
  if (!result) throw new Error(ERROR);
  return result;
}
