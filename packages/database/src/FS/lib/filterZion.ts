import { objectInPackJson } from "./mapObject.js";

export function filterZion<
  T = {
    dependencies: objectInPackJson;
    peerDependencies: objectInPackJson;
    devDependencies: objectInPackJson;
  }
>(deps: [string, string][], obj: T, field: keyof T) {
  deps
    .filter((dep) => dep[0][0] === "@")
    .filter((dep) => dep[0][1] === "z")
    .filter((dep) => dep[0][2] === "i")
    .filter((dep) => dep[0][3] === "o")
    .filter((dep) => dep[0][4] === "n")
    .map((arr) => arr[0])
    // TODO trovare solution typescript
    // @ts-expect-error
    .forEach((el) => (obj[field][el] = "*"));
  return obj;
}
