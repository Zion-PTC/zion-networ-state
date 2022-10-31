import { BasicProps } from "../types";

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
  };
};
