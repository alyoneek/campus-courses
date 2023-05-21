import { IProfileResponse } from "@/modules/account/api/types";
import { createSlice } from "@reduxjs/toolkit";

import { ICourseShortResponse } from "@/modules/course/api/types";
import { convertRolesResponeToArray } from "@modules/account/helpers/rolesResponeToArray";
import { IRole } from "@modules/account/types";
import {
  editProfile,
  getProfile,
  getRoles,
  getStudingCourses,
  getTeachingCourses,
} from "./accountActions";

// import * as api from "@/modules/account/api";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const getRoles = createAsyncThunk("account/getRoles", async () => {
// const response = await api.getRoles();
// return response.data;
// });

// export const getProfile = createAsyncThunk("account/getProfile", async () => {
//   const response = await api.getProfile();
//   return response.data;
// });

export interface IError {
  message: string;
}

interface IAccountState {
  roles: IRole[];
  profile: IProfileResponse;
  studingCourses: ICourseShortResponse[];
  teachingCourses: ICourseShortResponse[];
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IAccountState = {
  roles: [],
  profile: {} as IProfileResponse,
  studingCourses: [],
  teachingCourses: [],
  status: "init",
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getRoles
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

    // // getProfile
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

    // studingCourses
    builder.addCase(getStudingCourses.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getStudingCourses.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.studingCourses = payload;
    });

    builder.addCase(getStudingCourses.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });

    // teachingCourses
    builder.addCase(getTeachingCourses.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getTeachingCourses.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.teachingCourses = payload;
    });

    builder.addCase(getTeachingCourses.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });
  },
});

export const { reducer: accountReducer, actions: accountActions } =
  accountSlice;