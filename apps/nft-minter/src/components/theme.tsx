import { createGlobalStyle } from "styled-components";
import { Theme } from "./Types/index";
import { Temporary } from "./types";

// TODO find where

const black = "#090909";
const white = "#fafafa";

export const darkTheme: Theme = {
  body: black,
  textColor: white,
  backgroundColor: black,
  borderColor: "#fafafa",
  headingColor: "",
  primary: { backgroundColor: black, borderColor: "#fafafa", color: white },
  secondary: { backgroundColor: white, borderColor: black, color: black },
};

export const lightTheme: Theme = {
  body: "#fafafa",
  textColor: "#090909",
  backgroundColor: "#fafafa",
  borderColor: "#090909",
  headingColor: "",
  primary: {
    backgroundColor: "#fafafa",
    borderColor: "#090909",
    color: "#090909",
  },
  secondary: {
    backgroundColor: "#090909",
    borderColor: "#fafafa",
    color: "#fafafa",
  },
};

export const GlobalStyles = createGlobalStyle<{
  theme: Theme;
}>`
  body {
    font-family: 'Epilogue', sans-serif;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    border-color: ${(props) => props.theme.borderColor};
    transition: .3s ease;
    margin:0;
    box-sizing: border-box;
    position:fixed;
  }
  h1{
    font-weight: 900;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem ;
    margin-right: 0.5rem ;
  }
  h2{
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem ;
    margin-right: 0.5rem ;
    color: ${(props) => props.theme.headingColor};
  }
  main{
    height:100%;
    font-weight: 500;
  }
  p{
    font-weight: 500;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem ;
    margin-right: 0.5rem ;
  }
  Button{
    background: ${(props) => props.theme.body};
    border-color: ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.textColor};
  }
  img{
    border-color: ${(props) => props.theme.borderColor};
  }
`;
