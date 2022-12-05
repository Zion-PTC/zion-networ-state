import React, { FC } from "react";
import {
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { GlobalStyle } from "../../../style/Global";
import { darkTheme, lightTheme } from "../../../themes";
// import "../../HTML/React";

const theme = lightTheme;
const dark = darkTheme;

import styled from "styled-components";

enum layouts {
  main = "main",
  istia = "istia",
}
enum styles {
  defaultStyle = "defaultStyle",
  dark = "dark",
  light = "light",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

interface DefaultNextApp {
  Component: FC;
}

export interface NoizApp_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes>,
    DefaultNextApp {}

export class NoizApp_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface NoizApp_v2State
  extends BaseNoizState<NoizApp_v2Props> {
  theme?: string;
}

export class NoizApp_v2State extends BaseNoizState<NoizApp_v2Props> {}

export interface NoizApp_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    NoizApp_v2Props,
    NoizApp_v2State
  > {}

export class NoizApp_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  NoizApp_v2Props,
  NoizApp_v2State
> {
  // static getDerivedStateFromProps(props, state) {}

  constructor(props: NoizApp_v2Props) {
    super(props);
    const state = new NoizApp_v2State();
    state.theme = "dark";
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }
  main = (props: { Component: FC }) => {
    const { Component } = props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component></Component>
      </ThemeProvider>
    );
  };

  istia(props: NoizApp_v2Props) {
    const Layout = this.standard1;
    return (
      <Layout>
        <header>I am the header</header>
        {props.children}
        <footer>I am the footer</footer>
      </Layout>
    );
  }

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
    new this.Layout({
      name: layouts.istia,
      component: this.istia,
    }),
  ];

  defaultStyle = styled(this.Html)``;

  bgcolor = `hsl(${210 + 90}, 55%, 75%)`;

  standard1 = styled.div`
    display: grid;
    grid-template-rows: 10vh 80vh 10vh;
    overflow: auto;
    grid-template-areas:
      "h"
      "content"
      "f";
    header {
      background-color: ${this.bgcolor};
    }
    footer {
      background-color: ${this.bgcolor};
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  setTheme(theme: string) {
    this.setState({ theme: theme });
  }

  handleToggleTheme(prop: [string, string]) {
    const theme1 = prop[0];
    const theme2 = prop[1];

    this.state.theme == theme1
      ? this.setTheme(theme2)
      : this.setTheme(theme1);
  }

  toggleTheme = () => {};

  componentDidMount() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)")
        .matches
    ) {
      this.setTheme("dark");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", event => {
        const newColorScheme = event.matches
          ? "dark"
          : "light";
        console.log("changedtheme");
        this.setTheme(newColorScheme);
      });
  }
}
