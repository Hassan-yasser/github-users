// redux/slices/favorites-users/FavoritesSlice.ts
import { User } from "@/redux/slices/users/UsersList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favorites: User[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<User>) => {
      const exists = state.favorites.some(
        (user) => user.id == action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (user) => user.id !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
