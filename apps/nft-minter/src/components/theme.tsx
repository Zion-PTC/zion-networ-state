import { createGlobalStyle } from "styled-components";
import { Theme } from "./Types/index";
import { Temporary } from "./types";

// TODO find where

const black = "#090909";
const white = "#fafafa";

export const darkTheme: Temporary = {
  body: black,
  textColor: white,
  backgroundColor: black,
  borderColor: "#fafafa",
};

export const lightTheme: Temporary = {
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
    border-color: ${(props) => props.theme.borderColor};
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
  Button{
    background: ${(props) => props.theme.body};
    border-color: ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.textColor};
  }
  img{
    border-color: ${(props) => props.theme.borderColor};
  }
  Footer{
  }
`;
