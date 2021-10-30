import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import themeSliceReducer from '../redux/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, themeSliceReducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
