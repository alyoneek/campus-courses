import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "@/modules/account/api";
import { IProfileEditRequest } from "@/modules/account/api/types";

export const getRoles = createAsyncThunk("account/getRoles", async () => {
  const response = await api.getRoles();
  return response.data;
});

export const getProfile = createAsyncThunk("account/getProfile1", async () => {
  const response = await api.getProfile();
  return response.data;
});

export const editProfile = createAsyncThunk(
  "account/editProfile",
  async (data: IProfileEditRequest, { rejectWithValue }) => {
    try {
      const response = await api.editProfile(data);
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

export const getStudingCourses = createAsyncThunk(
  "account/studingCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getStudingCourses();
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

export const getTeachingCourses = createAsyncThunk(
  "account/teachingCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getTeachingCourses();
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
