import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface UsersState {
  users: User[];
  searchResults: User[];
  page: number;
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  isSearching: boolean;
}

const initialState: UsersState = {
  users: [],
  searchResults: [],
  page: 1,
  isLoading: false,
  error: null,
  hasMore: true,
  isSearching: false,
};

export const fetchUsers = createAsyncThunk<
  { users: User[]; searchMode: boolean },
  { page: number; search?: string; per_page?: number },
  { rejectValue: string }
>(
  "users/fetchUsers",
  async ({ page, search, per_page }, { rejectWithValue }) => {
    try {
      const url = search
        ? `https://api.github.com/search/users?q=${search}&per_page=${
            per_page ? per_page : 12
          }&page=${page}`
        : `https://api.github.com/users?since=${
            (page - 1) * 12
          }&per_page=${12}`;

      const res = await axios.get(url);
      const users = search ? res.data.items : res.data;

      return { users, searchMode: !!search };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetUsers: (state) => {
      state.isSearching = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        const { users, searchMode } = action.payload;
        console.log("fdnhfid-3211", searchMode);

        if (searchMode) {
          state.isSearching = true;
          state.searchResults = users;
        } else {
          if (users.length === 0) {
            state.hasMore = false;
          } else {
            state.users.push(...users);
            state.page += 1;
          }
          state.isSearching = false;
          state.searchResults = [];
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});
export const { resetUsers } = usersSlice.actions;
export default usersSlice.reducer;
