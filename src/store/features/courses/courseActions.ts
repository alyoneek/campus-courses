import api from "@/api";
import { ICourseInGroupRequest } from "@/api/groups/types";
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

interface IPayloadForChangeStatus {
  id: string;
  data: ICourseInGroupRequest;
}

export const changeCourseStatus = createAsyncThunk(
  "courses/changeCourseStatus",
  async (payload: IPayloadForChangeStatus, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.courses.changeCourseStatus(
        payload.id,
        payload.data
      );
      dispatch(coursesActions.changeStatus(response.data.status));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
