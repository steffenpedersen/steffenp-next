import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { store } from "../app/redux/store";
import DarkThemeProvider from "../components/darkThemeProvider";
import "../styles/global.css";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    font-weight: 500;
    font-family: 'Mukta', sans-serif;
  }

  p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
  }

  pre, code, kbd, samp {
    font-family: 'Ubuntu Mono', monospace;
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
  return (
    <Provider store={store}>
      <DarkThemeProvider>
        <GlobalStyle />

        <Component {...pageProps} />
      </DarkThemeProvider>
    </Provider>
  );
}

export default App;
