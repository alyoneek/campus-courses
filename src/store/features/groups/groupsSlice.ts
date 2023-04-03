import { IGropResponse } from "@/api/groups/types";
import { createSlice } from "@reduxjs/toolkit";
import { createGroup, getGroups } from "./groupsActions";

interface IGroupsState {
  allGroups: IGropResponse[];
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IGroupsState = {
  allGroups: [],
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

    builder.addCase(createGroup.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });
  },
});

export const { reducer: groupsReducer, actions: groupsActions } = groupsSlice;
