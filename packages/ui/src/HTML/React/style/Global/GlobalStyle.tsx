import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: .3s ease;
    box-sizing: border-box;
    position:fixed;
    #__next {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    }
  }
  * {
    margin: 0;
    padding: 0;
  }
  h2{
    color: ${props => props.theme.headingColor};
  }
  main{
    width: 100%;
    height:100%;
  }
`;
