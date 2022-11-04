export const roundDecimals = (
  num: number,
  decimals: number
) => {
  return Math.round(num * decimals) / decimals;
};
