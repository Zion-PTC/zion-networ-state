import { createGlobalStyle } from "styled-components";

export type BasicProps = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export type Theme = {
  body: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  headingColor: string;
  primary: BasicProps;
  secondary: BasicProps;
};

export const darkTheme = {
  body: "#000",
  textColor: "#fff",
  headingColor: "lightblue",
};
export const lightTheme = {
  body: "#fff",
  textColor: "#000",
  headingColor: "#d23669",
};

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
  }
  h2{
    color: ${(props) => props.theme.headingColor};
  }
`;
