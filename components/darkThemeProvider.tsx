import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { getThemeState } from '../app/redux/themeSlice'
import { darkTheme, lightTheme } from '../pages/_app'

function DarkThemeProvider({ children }) {
    return (
        <ThemeProvider theme={useSelector(getThemeState) ? darkTheme : lightTheme}>
            { children }
        </ThemeProvider>
    )
}

export default DarkThemeProvider
