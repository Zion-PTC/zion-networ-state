import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Epilogue', sans-serif;
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    border-color: ${props => props.theme.borderColor};
    transition: .3s ease;
    margin:0;
    box-sizing: border-box;
    width: 100%;
    position:fixed;
  }
  * {
    margin: 0;
    padding: 0;
  }
  Button{
    background: ${props => props.theme.body};
    border-color: ${props => props.theme.borderColor};
    color: ${props => props.theme.textColor};
  }
  img{
    border-color: ${props => props.theme.borderColor};
  }
`;
