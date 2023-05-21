import { createAsyncThunk } from "@reduxjs/toolkit";

import { accountActions } from "@/modules/account";
import * as api from "@/modules/course/api";
import {
  ICourseShortRequest,
  ICourseStatusRequest,
  INotificationRequest,
  IStudentMarkRequest,
  IStudentStatusRequest,
  ITeacherRequest,
} from "@/modules/course/api/types";
import { coursesActions } from "./courseSlice";

interface IPayload<T> {
  idCourse: string;
  data: T;
}

export const getCourseDetails = createAsyncThunk(
  "courses/getCourseDetails",
  async (idCourse: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.getCourseDetails(idCourse);
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
      await api.deleteCourse(idCourse);
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
      await api.editCourse(payload.idCourse, payload.data);
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
      const response = await api.changeCourseStatus(
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
      const response = await api.addTeacherToCourse(
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
      await api.addNotificationToCourse(payload.idCourse, payload.data);
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
      await api.changeStudentStatus(
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
      await api.changeStudentMark(
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
      await api.signUpForCourse(idCourse);
      dispatch(getCourseDetails(idCourse));
      dispatch(accountActions.getStudingCourses());
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
