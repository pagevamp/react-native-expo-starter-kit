import { createSlice } from "@reduxjs/toolkit";

import { User } from "@io/models";

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | undefined;
}

const initialState = {
  isLoggedIn: false,
  user: null,
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState as AuthState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    resetAuthState: () => initialState,
  },
  extraReducers: () => {},
});

export const { setLoggedIn, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
