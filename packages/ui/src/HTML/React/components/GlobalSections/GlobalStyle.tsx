import { createGlobalStyle } from "styled-components";
import { BasicProps } from "./Types";

export type Theme = {
  body: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  headingColor?: string;
  primary?: BasicProps;
  secondary?: BasicProps;
};

// TODO find where

const black = "#090909";
const white = "#fafafa";

export const darkTheme: Theme = {
  body: black,
  textColor: white,
  backgroundColor: black,
  borderColor: "#fafafa",
};

export const lightTheme: Theme = {
  body: "#fafafa",
  textColor: "#090909",
  backgroundColor: "#fafafa",
  borderColor: "#090909",
};

export const GlobalStyles = createGlobalStyle<{
  theme: Theme;
}>`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
    margin:0;
    box-sizing: border-box;
    position:fixed;
  }
  h2{
    color: ${(props) => props.theme.headingColor};
  }
  main{
    height:100%;
  }
`;
