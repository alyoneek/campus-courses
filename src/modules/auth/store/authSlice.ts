import { createSlice } from "@reduxjs/toolkit";

import {
  getEmail,
  getToken,
  resetEmail,
  resetToken,
} from "@modules/auth/helpers/localStorage";
import { login, signup } from "./authActions";

interface IAuthState {
  token: string | null;
  email: string | null;
}

const initialState: IAuthState = {
  token: getToken(),
  email: getEmail(),
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
    builder.addCase(signup.fulfilled, (state) => {
      state.token = getToken();
      state.email = getEmail();
    });

    builder.addCase(login.fulfilled, (state) => {
      state.token = getToken();
      state.email = getEmail();
    });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
