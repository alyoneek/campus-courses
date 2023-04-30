import { IProfileResponse } from "@/api/account/types";
import { createSlice } from "@reduxjs/toolkit";

import { editProfile, getProfile, getRoles } from "./accountActions";
import { convertRolesResponeToArray } from "./helpers";

export enum Roles {
  isStudent = "Student",
  isTeacher = "Teacher",
  isAdmin = "Admin",
}

export interface IError {
  message: string;
}

interface IAccountState {
  roles: Roles[] | null;
  profile: IProfileResponse;
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IAccountState = {
  roles: null,
  profile: {} as IProfileResponse,
  status: "init",
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getRoles
    builder.addCase(getRoles.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getRoles.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.roles = convertRolesResponeToArray(payload);
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
      state.profile = payload;
    });

    builder.addCase(getProfile.rejected, (state) => {
      state.status = "error";
    });

    // editProfile
    builder.addCase(editProfile.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(editProfile.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.profile = payload;
    });

    builder.addCase(editProfile.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });
  },
});

export const { reducer: accountReducer, actions: accountActions } =
  accountSlice;
