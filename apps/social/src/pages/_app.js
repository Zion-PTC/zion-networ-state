import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/theme";
import React, { useState } from "react";

function Application({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default Application;
