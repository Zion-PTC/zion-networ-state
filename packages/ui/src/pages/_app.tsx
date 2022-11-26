import React from "react";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../HTML/React/style/Global";
import { lightTheme } from "../HTML/React/themes";

const theme = lightTheme;

export async function getStaticProps() {
  return { props: { somethin: "true" } };
}

export default function (props: {
  Component: FC;
  pageProps: any;
}) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
}
