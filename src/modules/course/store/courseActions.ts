import api from "@/api";
import {
  ICourseShortRequest,
  ICourseStatusRequest,
  INotificationRequest,
  IStudentMarkRequest,
  IStudentStatusRequest,
  ITeacherRequest,
} from "@/api/courses/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { coursesActions } from "./courseSlice";

interface IPayload<T> {
  idCourse: string;
  data: T;
}

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

export const deleteCourse = createAsyncThunk(
  "courses/delete",
  async (idCourse: string, { rejectWithValue, dispatch }) => {
    try {
      await api.courses.deleteCourse(idCourse);
      dispatch(coursesActions.deleteCourse());
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const editCourse = createAsyncThunk(
  "courses/delete",
  async (
    payload: IPayload<ICourseShortRequest>,
    { rejectWithValue, dispatch }
  ) => {
    try {
      await api.courses.editCourse(payload.idCourse, payload.data);
      dispatch(coursesActions.editCourseDetails(payload.data));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const changeCourseStatus = createAsyncThunk(
  "courses/changeCourseStatus",
  async (
    payload: IPayload<ICourseStatusRequest>,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await api.courses.changeCourseStatus(
        payload.idCourse,
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

export const addTeacherToCourse = createAsyncThunk(
  "courses/addTeacher",
  async (payload: IPayload<ITeacherRequest>, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.courses.addTeacherToCourse(
        payload.idCourse,
        payload.data
      );
      dispatch(coursesActions.updateTeachers(response.data.teachers));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const addNotificationToCourse = createAsyncThunk(
  "courses/addNotification",
  async (
    payload: IPayload<INotificationRequest>,
    { rejectWithValue, dispatch }
  ) => {
    try {
      await api.courses.addNotificationToCourse(payload.idCourse, payload.data);
      dispatch(coursesActions.addNotification(payload.data));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

interface IStudentPayload<T> extends IPayload<T> {
  idStudent: string;
}

export const changeStudentStatus = createAsyncThunk(
  "courses/changeStudentStatus",
  async (
    payload: IStudentPayload<IStudentStatusRequest>,
    { rejectWithValue, dispatch }
  ) => {
    try {
      await api.courses.changeStudentStatus(
        payload.idCourse,
        payload.idStudent,
        payload.data
      );
      dispatch(
        coursesActions.changeStudentStatus({
          idStudent: payload.idStudent,
          data: payload.data,
        })
      );
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const changeStudentMark = createAsyncThunk(
  "courses/changeStudentMark",
  async (
    payload: IStudentPayload<IStudentMarkRequest>,
    { rejectWithValue, dispatch }
  ) => {
    try {
      await api.courses.changeStudentMark(
        payload.idCourse,
        payload.idStudent,
        payload.data
      );
      dispatch(
        coursesActions.changeStudentMark({
          idStudent: payload.idStudent,
          data: payload.data,
        })
      );
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const signUpForCourse = createAsyncThunk(
  "courses/sign-up",
  async (idCourse: string, { rejectWithValue, dispatch }) => {
    try {
      await api.courses.signUpForCourse(idCourse);
      dispatch(getCourseDetails(idCourse));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);