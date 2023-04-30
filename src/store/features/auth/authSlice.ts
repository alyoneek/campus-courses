import { createSlice } from "@reduxjs/toolkit";

import { login, logout, signup } from "./authActions";
import { getEmail, getToken, resetEmail, resetToken } from "./helpers";

interface IAuthState {
  token: string | null;
  email: string | null;
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IAuthState = {
  token: getToken(),
  email: getEmail(),
  status: "init",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: () => {
      resetToken();
      resetEmail();
      return {
        ...initialState,
        token: getToken(),
        email: getEmail(),
      };
    },
  },
  extraReducers: (builder) => {
    // signup
    builder.addCase(signup.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(signup.fulfilled, (state) => {
      state.status = "success";
      state.token = getToken();
      state.email = getEmail();
    });

    builder.addCase(signup.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });

    // login
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state) => {
      state.status = "success";
      state.token = getToken();
      state.email = getEmail();
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });

    // logout
    builder.addCase(logout.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(logout.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
