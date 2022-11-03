export type FluidTheme = {
  body: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  headingColor: string;
  primary: BasicFluidProps;
  secondary: BasicFluidProps;
  palette: {
    white: string;
    grey: string;
    darkgrey: string;
    black: string;
    red?: string;
    orange?: string;
    yellow?: string;
    green?: string;
    blue?: string;
    purple?: string;
  };
};
