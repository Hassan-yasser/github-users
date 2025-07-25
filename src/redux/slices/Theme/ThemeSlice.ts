import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem("dark", state.isDark ? "1" : "0");
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
    resetTheme: (state) => {
      state.isDark = false;
      localStorage.setItem("dark", "0");
    },
  },
});

export const { toggleDarkMode, setDarkMode, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
