import { Theme } from "../components/GlobalSections/Types";

const black = "#090909";
const white = "#fafafa";
const darkgrey = "hsl(0, 0%, 53%)";
const grey = "hsl(0, 0%, 76%)";

const palette = {
  white: "#fcfcfc",
  grey,
  darkgrey,
  black: "hsl(192, 100%, 1%)",
};

export const darkTheme: Theme = {
  body: black,
  textColor: white,
  backgroundColor: black,
  borderColor: white,
  headingColor: "",
  primary: {
    backgroundColor: black,
    borderColor: white,
    color: white,
  },
  secondary: {
    backgroundColor: white,
    borderColor: black,
    color: black,
  },
  palette,
};

export const lightTheme: Theme = {
  body: white,
  textColor: black,
  backgroundColor: white,
  borderColor: black,
  headingColor: "",
  primary: {
    backgroundColor: white,
    borderColor: black,
    color: black,
  },
  secondary: {
    backgroundColor: black,
    borderColor: white,
    color: white,
  },
  palette,
};
