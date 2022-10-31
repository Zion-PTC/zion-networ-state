import { BasicProps } from "./BasicProps";

export type Theme = {
  body: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  headingColor: string;
  primary: BasicProps;
  secondary: BasicProps;
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

export type exampleTheme = {
  borderRadius: Theme;

  colors: {
    main: string;
    secondary: string;
  };
};
