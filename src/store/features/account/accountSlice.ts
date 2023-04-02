import { createSlice } from "@reduxjs/toolkit";
import { getRoles, login, logout, signup } from "./accountActions";
import { convertRolesResponeToArray, getToken, resetToken } from "./helpers";

export enum Roles {
  isStudent = "Student",
  isTeacher = "Teacher",
  isAdmin = "Admin",
}

export interface IError {
  message: string;
}

interface IAccountState {
  userToken: string | null;
  userRoles: Roles[] | null;
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IAccountState = {
  // userInfo: {}
  userToken: getToken(),
  userRoles: null,
  status: "init",
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    clearState: () => {
      resetToken();
      return {
        ...initialState,
        userToken: getToken(),
      };
    },
  },
  extraReducers: (builder) => {
    // signup
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

    // login
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.userToken = payload.token;
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.status = "error";
      if (payload) state.error = payload.message;
    });

    // logout
    builder.addCase(logout.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(logout.fulfilled, () => {
      resetToken();
      return {
        ...initialState,
        userToken: getToken(),
      };
    });

    builder.addCase(logout.rejected, (state) => {
      state.status = "error";
    });

    // getRoles
    builder.addCase(getRoles.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getRoles.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.userRoles = convertRolesResponeToArray(payload);
    });

    builder.addCase(getRoles.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { reducer: accountReducer, actions: accountActions } =
  accountSlice;
