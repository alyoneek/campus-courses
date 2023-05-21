import { createAsyncThunk } from "@reduxjs/toolkit";

import { ICourseRequest } from "@/modules/course/api/types";
import { IGropRequest } from "@/modules/groups/api/types";
import * as api from "@modules/groups/api";
import { groupsActions } from "./groupsSlice";

export const getGroups = createAsyncThunk("groups/getGroups", async () => {
  const response = await api.getGroups();
  return response.data;
});

export const createGroup = createAsyncThunk(
  "groups/createGroup",
  async (data: IGropRequest, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.createGroup(data);
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

interface IPayloadForUpdateGroup {
  id: string;
  data: IGropRequest;
}

export const updateGroup = createAsyncThunk(
  "groups/updateGroup",
  async (payload: IPayloadForUpdateGroup, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.updateGroup(payload.id, payload.data);
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

export const deleteGroup = createAsyncThunk(
  "groups/deleteGroup",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      await api.deleteGroup(id);
      dispatch(groupsActions.deleteGroup(id));
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

interface IPayloadForCreateCourse {
  idGroup: string;
  data: ICourseRequest;
}

export const createCourse = createAsyncThunk(
  "groups/createCourse",
  async (payload: IPayloadForCreateCourse, { rejectWithValue }) => {
    try {
      const response = await api.createCourseInGroup(
        payload.idGroup,
        payload.data
      );
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