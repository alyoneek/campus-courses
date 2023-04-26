import api from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { coursesActions } from "./courseSlice";

export const getCourseDetails = createAsyncThunk(
  "courses/getCourseDetails",
  async (idCourse: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.courses.getCourseDetails(idCourse);
      dispatch(coursesActions.splitDetailsInfo(response.data));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
