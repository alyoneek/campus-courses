import { createSlice } from "@reduxjs/toolkit";

import { IGropResponse } from "@/api/groups/types";
import { ICourseShortResponse } from "@/modules/course/api/types";
import {
  createCourse,
  createGroup,
  deleteGroup,
  getCourses,
  getGroups,
  updateGroup,
} from "./groupsActions";

interface IGroupsState {
  allGroups: IGropResponse[];
  currentGroupCourses: ICourseShortResponse[];
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IGroupsState = {
  allGroups: [],
  currentGroupCourses: [],
  status: "init",
  error: null,
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroup: (state, { payload }) => {
      state.allGroups.push(payload);
    },

    updateGroup: (state, { payload }) => {
      let updatedGroup = state.allGroups.find(
        (group) => group.id === payload.id
      );
      updatedGroup = {
        ...updatedGroup,
        ...payload,
      };
      state.allGroups = state.allGroups.map((group) =>
        group.id === payload.id ? updatedGroup : group
      ) as IGropResponse[];
    },

    deleteGroup: (state, { payload }) => {
      state.allGroups = state.allGroups.filter((group) => group.id !== payload);
    },
  },
  extraReducers: (builder) => {
    // getGroups
    builder.addCase(getGroups.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getGroups.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.allGroups = payload;
    });

    builder.addCase(getGroups.rejected, (state) => {
      state.status = "error";
    });

    // createGroup
    builder.addCase(createGroup.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(createGroup.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(createGroup.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });

    // updateGroup
    builder.addCase(updateGroup.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(updateGroup.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(updateGroup.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });

    // deleteGroup
    builder.addCase(deleteGroup.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(deleteGroup.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(deleteGroup.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });

    // getCourses
    builder.addCase(getCourses.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getCourses.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.currentGroupCourses = payload;
    });

    builder.addCase(getCourses.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });

    // createCourse
    builder.addCase(createCourse.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(createCourse.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.currentGroupCourses = payload;
    });

    builder.addCase(createCourse.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });
  },
});

export const { reducer: groupsReducer, actions: groupsActions } = groupsSlice;
