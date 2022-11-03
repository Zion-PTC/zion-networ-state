export const checkBorderColor = <
  T extends { borderColor?: string }
>(
  props: T
) => {
  if (!props.borderColor) return "black";
  return props.borderColor;
};
