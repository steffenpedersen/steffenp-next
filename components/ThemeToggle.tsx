import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getThemeState, toggleTheme } from "../app/redux/themeSlice";
import Boop from "./Boop";

const SVG = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

function ThemeToggle() {
  const dispatch = useDispatch();
  const isDark = useSelector(getThemeState);

  const onButtonClick = () => {
    dispatch(toggleTheme({ isDarkTheme: !isDark }));
  };

  return (
    <button onClick={onButtonClick}>
      {isDark ? (
        <span aria-label="Light mode" role="img">
          <Boop rotation={20} timing={200}>
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </SVG>
          </Boop>
        </span>
      ) : (
        <span aria-label="Dark mode" role="img">
          <Boop rotation={20} timing={200}>
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </SVG>
          </Boop>
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
