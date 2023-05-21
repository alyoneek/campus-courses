import { IUserResponse } from "@/modules/users/api/types";
import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersActions";

interface IUsersState {
  allUsers: IUserResponse[];
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: IUsersState = {
  allUsers: [],
  status: "init",
  error: null,
};

const usersSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getUsers
    builder.addCase(getUsers.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.allUsers = payload;
    });

    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });
  },
});

export const { reducer: usersReducer, actions: usersActions } = usersSlice;
