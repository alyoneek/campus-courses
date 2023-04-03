import api from "@/api";
import { IGropRequest } from "@/api/groups/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { groupsActions } from "./groupsSlice";

export const getGroups = createAsyncThunk("groups/getGroups", async () => {
  const response = await api.groups.getGroups();
  return response.data;
});

export const createGroup = createAsyncThunk(
  "groups/createGroup",
  async (data: IGropRequest, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.groups.createGroup(data);
      dispatch(groupsActions.addGroup(response.data));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

interface IPayloadForUpdate {
  id: string;
  data: IGropRequest;
}

export const updateGroup = createAsyncThunk(
  "groups/updateGroup",
  async (payload: IPayloadForUpdate, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.groups.updateGroup(payload.id, payload.data);
      dispatch(groupsActions.updateGroup(response.data));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
