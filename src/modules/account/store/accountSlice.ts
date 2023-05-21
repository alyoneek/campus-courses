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

interface IAccountState {
  roles: IRole[];
  profile: IProfileResponse;
  studingCourses: ICourseShortResponse[];
  teachingCourses: ICourseShortResponse[];
}

const initialState: IAccountState = {
  roles: [],
  profile: {} as IProfileResponse,
  studingCourses: [],
  teachingCourses: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoles.fulfilled, (state, { payload }) => {
      state.roles = convertRolesResponeToArray(payload);
    });

    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
    });

    builder.addCase(editProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
    });

    builder.addCase(getStudingCourses.fulfilled, (state, { payload }) => {
      state.studingCourses = payload;
    });

    builder.addCase(getTeachingCourses.fulfilled, (state, { payload }) => {
      state.teachingCourses = payload;
    });
  },
});

export const { reducer: accountReducer, actions: accountActions } =
  accountSlice;
