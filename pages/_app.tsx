import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle, DefaultTheme } from "styled-components";
import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getThemeState } from "../app/redux/themeSlice";
import DarkThemeProvider from "../components/darkThemeProvider";
import { store } from "../app/redux/store";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    font-weight: 500;
  }

  p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    
    font-weight: 400;
  }
`;
export const lightTheme = {
  body: "#f1f1f1",
  text: "#0e0e0e",
};
export const darkTheme = {
  body: "#0e0e0e",
  text: "#f1f1f1",
};

function App({ Component, pageProps }: AppProps) {
  // TODO Save in storage with Redux

  // const [theme, setTheme] = useState("dark");
  // const isDarkTheme = theme === "dark";
  // const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <Provider store={store}>
  
  <DarkThemeProvider>
        <GlobalStyle />

        <Component
          {...pageProps}
        />
      </DarkThemeProvider>
    </Provider>
  );
}

export default App;
