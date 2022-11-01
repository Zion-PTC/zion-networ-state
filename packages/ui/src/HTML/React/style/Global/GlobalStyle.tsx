import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
