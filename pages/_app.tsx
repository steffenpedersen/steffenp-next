import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
