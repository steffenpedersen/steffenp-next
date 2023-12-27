import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getThemeState } from "../app/redux/themeSlice";
import { darkTheme, lightTheme } from "../styles/themes";

function DarkThemeProvider({ children }) {
  return (
    <ThemeProvider theme={useSelector(getThemeState) ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default DarkThemeProvider;
