import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/theme";
import React, { useEffect, useRef, useState } from "react";
import { LayoutProps } from "../components/Types/";

export type BasePropsFromApp = {
  layout: LayoutProps;
};

type AppStyle = { height: number };

const App = styled.div<AppStyle>`
  height: ${(props) => props.height}px;
  width: 100vw;
`;

const rows = 14;
const columns = 8;

function Application({ Component, pageProps }) {
  const [appHeight, setAppHeight] = useState(0);
  const [theme, setTheme] = useState("light");
  const [componentAreaHeight, setComponentAreaHeight] = useState(0);
  const app = useRef<HTMLDivElement>();
  const navbar = useRef<HTMLHeadingElement>();
  const footer = useRef<HTMLHeadingElement>();
  // collection
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [blockSize, setBlockSize] = useState(0);
  const contentArea = useRef<HTMLDivElement>();
  //
  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  // TODO create a type for the props sent down to
  // components by _app
  pageProps.handleParentWidth = setParentWidth;
  pageProps.parentWidth = parentWidth;
  pageProps.handleParentHeight = setParentHeight;
  pageProps.parentHeight = parentHeight;
  pageProps.handleWidth = setWidth;
  pageProps.width = width;
  pageProps.handleHeight = setHeight;
  pageProps.height = height;
  pageProps.handleBlockSize = setBlockSize;
  pageProps.blockSize = blockSize;
  pageProps.contentArea = contentArea;
  pageProps.columns = columns;
  //
  pageProps.layout = {};
  pageProps.layout.contentArea = contentArea;
  pageProps.layout.navbar = navbar;
  pageProps.layout.footer = footer;
  pageProps.layout.handleClick = toggleTheme;

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
