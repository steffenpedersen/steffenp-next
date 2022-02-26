import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: true
  },
  reducers: {
    toggleTheme: (state, action: PayloadAction<{ isDarkTheme: boolean }>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isDarkTheme = action.payload.isDarkTheme;
    },
  }
})

// Selectors
export const getThemeState = (state: RootState) => {
  return state.theme.isDarkTheme
};

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
