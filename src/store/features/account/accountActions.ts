import api from "@/api";
import { IProfileEditRequest } from "@/api/account/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRoles = createAsyncThunk("account/getRoles", async () => {
  const response = await api.account.getRoles();
  return response.data;
});

export const getProfile = createAsyncThunk("account/getProfile", async () => {
  const response = await api.account.getProfile();
  return response.data;
});

export const editProfile = createAsyncThunk(
  "account/editProfile",
  async (data: IProfileEditRequest, { rejectWithValue }) => {
    try {
      const response = await api.account.editProfile(data);
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
      const response = await api.account.getStudingCourses();
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
      const response = await api.account.getTeachingCourses();
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
