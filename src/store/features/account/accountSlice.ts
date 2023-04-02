import { IProfileResponse } from "@/api/account/types";
import { createSlice } from "@reduxjs/toolkit";
import { getProfile, getRoles, login, logout, signup } from "./accountActions";
import {
  convertRolesResponeToArray,
  getEmail,
  getToken,
  resetEmail,
  resetToken,
} from "./helpers";

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
  userEmail: string | null;
  userRoles: Roles[] | null;
  userProfile: IProfileResponse;
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IAccountState = {
  userToken: getToken(),
  userEmail: getEmail(),
  userRoles: null,
  userProfile: {} as IProfileResponse,
  status: "init",
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    clearState: () => {
      resetToken();
      resetEmail();
      return {
        ...initialState,
        userToken: getToken(),
        userEmail: getEmail(),
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
      state.userToken = getToken();
      state.userEmail = getEmail();
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
      state.userToken = getToken();
      state.userEmail = getEmail();
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

    builder.addCase(logout.fulfilled, () => {
      resetToken();
      resetEmail();
      return {
        ...initialState,
        userToken: getToken(),
        userEmail: getEmail(),
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

    // getProfile
    builder.addCase(getProfile.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.userProfile = payload;
    });

    builder.addCase(getProfile.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });
  },
});

export const { reducer: accountReducer, actions: accountActions } =
  accountSlice;
