import { createGlobalStyle } from "styled-components";
import { Theme } from "./Types/index";

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
  palette: { white: "#fcfcfc" },
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
  palette: { white: "#fcfcfc" },
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
    width: 100%;
    position:fixed;
  }
  h1{
    font-family: 'Epilogue', sans-serif;
    font-weight: 900;
    font-size: -webkit-xxx-large;
  }
  h2{
    font-family: 'Epilogue', sans-serif;
    font-weight: 800;
    font-size: xx-large;
    color: ${(props) => props.theme.headingColor};
  }
  h3{
    font-family: 'Epilogue', sans-serif;
    font-weight: 700;
    font-size: x-large;
  }
  text{
    font-weight: 600;
    font-size: large;
  }
  main{
    height:100%;
    width: fit-content;
  }
  p{
    font-family: 'Epilogue', sans-serif;
    font-size:x-large;
    font-weight: 300;
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
