import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle, DefaultTheme } from "styled-components";
import { useEffect, useState } from "react";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    font-weight: 500;
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
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />

        <Component
          {...pageProps}
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
