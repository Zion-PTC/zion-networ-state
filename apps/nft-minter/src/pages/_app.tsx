import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/theme";
import React, { useEffect, useRef, useState } from "react";
import { LayoutProps } from "../components/Types/";
import { HTML } from "@zionstate/ui";
import { CollectionPropsFromApp } from "./collection";
import { MintPropsFromApp } from "./mint";

const useEthereum = HTML.React.lib.hooks.useEthereum;

export type BasePropsFromApp = {
  layout: LayoutProps;
  collection: CollectionPropsFromApp;
  mint: MintPropsFromApp;
};

type AppStyle = { height: number };

const App = styled.div<AppStyle>`
  height: ${(props) => props.height}px;
  width: 100vw;
`;

const rows = 14;
const columns = 8;

type ApplicationProps = {
  Component: any;
  pageProps: BasePropsFromApp;
};

function Application(props: ApplicationProps) {
  const { Component, pageProps } = props;

  const [appHeight, setAppHeight] = useState(0);
  const [theme, setTheme] = useState("light");
  const [componentAreaHeight, setComponentAreaHeight] = useState(0);
  const app = useRef<HTMLDivElement>();
  const navbar = useRef<HTMLHeadingElement>();
  const footer = useRef<HTMLHeadingElement>();

  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [blockSize, setBlockSize] = useState(0);
  const contentArea = useRef<HTMLDivElement>();
  const [showButton, setShowButton] = useState(false);

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  const scrollToTop = () => {
    contentArea.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const collection = {
    parentWidth,
    parentHeight,
    width,
    height,
    blockSize,
    columns,
  };
  pageProps.collection = collection;

  const layout: LayoutProps = {
    contentArea,
    navbar,
    footer,
    handleClick: toggleTheme,
    children: "not set",
    connect: undefined,
    landing: undefined,
    nft: undefined,
    metamask: useEthereum(),
    backToTopHandleClick: scrollToTop,
    showButton: showButton,
    theme: theme == "light" ? lightTheme : darkTheme,
  };
  pageProps.layout = layout;

  // Catches the dimensions of footer and header and set
  // container height to be the diff with window height
  useEffect(() => {
    setAppHeight(window.visualViewport.height);
    setComponentAreaHeight(
      window.visualViewport.height -
        footer.current.clientHeight +
        navbar.current.clientHeight
    );
    // TODO add event listener on resize and on device
    // orientation change
    window.addEventListener("resize", () => console.log("resized"));
  }, []);

  // set the content area height to be the same as the
  // parent element.
  useEffect(() => {
    setParentWidth(contentArea.current.clientWidth);
    setParentHeight(contentArea.current.clientHeight);
  }, [componentAreaHeight]);

  // set the height of the area parent
  useEffect(() => {
    setHeight(parentHeight * 0.99);
  }, [parentHeight]);

  // sets the grid dimension
  // this should probably be conditional as it should happen
  // only in pages where a list of items is shown.
  useEffect(() => {
    setBlockSize(height / rows);
    setWidth((height / rows) * columns);
  }, [height]);

  useEffect(() => {
    contentArea.current.addEventListener("scroll", () => {
      let profileAreaY = window.document
        .getElementById("profile-area")
        .getBoundingClientRect().y;
      let contentAreaY = contentArea.current.getBoundingClientRect().y;
      let scrollPosition = contentAreaY - profileAreaY;

      if (scrollPosition > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App ref={app} height={appHeight}>
        <Component {...pageProps} />
      </App>
    </ThemeProvider>
  );
}
export default Application;
