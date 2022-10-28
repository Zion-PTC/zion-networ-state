import { calculateSize } from "./calculate/calculateSize";

export function calculate(type: "size", ratio: number, base: number) {
  let result;
  switch (type) {
    case "size":
      result = calculateSize(ratio, base);
      break;

    default:
      break;
  }
  return result;
}
