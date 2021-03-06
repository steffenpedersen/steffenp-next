import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import themeSliceReducer from '../redux/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
