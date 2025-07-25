// redux/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import usersSlice from "./slices/users/UsersList";
import ThemeSlice from "./slices/Theme/ThemeSlice";
import { favoritesReducer } from "./PersistSlices/favorites-users/favoritesuUsers";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const rootReducer = combineReducers({
  usersSlice,
  ThemeSlice,
  favoritesSlice: persistReducer(favoritesPersistConfig, favoritesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type SelectorState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
