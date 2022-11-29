import React from "react";
import { FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../HTML/React/style/Global";
import { lightTheme } from "../HTML/React/themes";

const theme = lightTheme;

export async function getStaticProps() {
  return { props: { somethin: "true" } };
}

const bgcolor = `hsl(${210 + 90}, 55%, 75%)`;

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  header {
    background-color: ${bgcolor};
  }
  footer {
    background-color: ${bgcolor};
  }
`;

export default function (props: {
  Component: FC;
  pageProps: any;
}) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <header>I am the header</header>
        <Component {...pageProps}></Component>
        <footer>I am the footer</footer>
      </Layout>
    </ThemeProvider>
  );
}
