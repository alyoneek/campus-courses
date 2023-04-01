import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./accountActions";

export interface IError {
  message: string;
}

interface IAccountState {
  userToken: string | null;
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IAccountState = {
  // userInfo: {}
  userToken: localStorage.getItem("userToken"),
  status: "init",
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.userToken = payload.token;
    });

    builder.addCase(signup.rejected, (state, { payload }) => {
      state.status = "error";
      if (payload) state.error = payload.message;
    });
  },
});

export const { reducer: accountReducer, actions: accountActions } =
  accountSlice;
