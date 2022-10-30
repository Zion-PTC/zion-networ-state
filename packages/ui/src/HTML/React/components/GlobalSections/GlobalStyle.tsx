import { createGlobalStyle } from "styled-components";
import { BasicProps } from "./Types";

export type Theme = {
  body: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  headingColor: string;
  primary: BasicProps;
  secondary: BasicProps;
  palette: { white: string };
};

// TODO find where

const black = "#090909";
const white = "#fafafa";

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
  palette: { white: white },
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
  palette: { white: "#fcfcfc" },
};

export const GlobalStyles = createGlobalStyle<{
  theme: Theme;
}>`
  body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: .3s ease;
    margin:0;
    box-sizing: border-box;
    position:fixed;
  }
  h2{
    color: ${props => props.theme.headingColor};
  }
  main{
    height:100%;
  }
`;
