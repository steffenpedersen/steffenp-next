import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";
import DarkThemeProvider from "../components/DarkThemeProvider";
import { GlobalStyle } from "../styles/global";
import "../styles/global.css";

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
