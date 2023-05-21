import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGropRequest } from "@/modules/groups/api/types";
import * as api from "@modules/groups/api";

export const getGroups = createAsyncThunk("groups/getGroups", async () => {
  const response = await api.getGroups();
  return response.data;
});

export const createGroup = createAsyncThunk(
  "groups/create",
  async (data: IGropRequest, { rejectWithValue }) => {
    try {
      const response = await api.createGroup(data);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

interface IPayloadForUpdateGroup {
  id: string;
  data: IGropRequest;
}

export const updateGroup = createAsyncThunk(
  "groups/update",
  async (payload: IPayloadForUpdateGroup, { rejectWithValue }) => {
    try {
      const response = await api.updateGroup(payload.id, payload.data);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const deleteGroup = createAsyncThunk(
  "groups/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteGroup(id);
      return id;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const getCourses = createAsyncThunk(
  "groups/getCourses",
  async (idGroup: string, { rejectWithValue }) => {
    try {
      const response = await api.getCoursesInGroup(idGroup);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
