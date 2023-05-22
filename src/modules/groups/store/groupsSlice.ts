import { createSlice } from "@reduxjs/toolkit";

import { ICourseShortResponse } from "@/modules/course/api/types";
import { IGropResponse } from "@/modules/groups/api/types";
import {
  createGroup,
  deleteGroup,
  getCourses,
  getGroups,
  updateGroup,
} from "./groupsActions";

interface IGroupsState {
  allGroups: IGropResponse[];
  currentGroupCourses: ICourseShortResponse[];
  error: string | null;
}

const initialState: IGroupsState = {
  allGroups: [],
  currentGroupCourses: [],
  error: null,
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addCourse: (state, { payload }) => {
      state.currentGroupCourses = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGroups.fulfilled, (state, { payload }) => {
      state.allGroups = payload;
    });

    builder.addCase(createGroup.fulfilled, (state, { payload }) => {
      state.allGroups.push(payload);
    });

    builder.addCase(updateGroup.fulfilled, (state, { payload }) => {
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
    });

    builder.addCase(deleteGroup.fulfilled, (state, { payload }) => {
      state.allGroups = state.allGroups.filter((group) => group.id !== payload);
    });

    builder.addCase(getCourses.fulfilled, (state, { payload }) => {
      state.currentGroupCourses = payload;
      state.error = null;
    });

    builder.addCase(getCourses.pending, (state) => {
      state.error = null;
    });

    builder.addCase(getCourses.rejected, (state, { payload }) => {
      state.error = payload?.message;
    });
  },
});

export const { reducer: groupsReducer, actions: groupsActions } = groupsSlice;
