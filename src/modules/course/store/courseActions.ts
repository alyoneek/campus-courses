import { createAsyncThunk } from "@reduxjs/toolkit";

import { accountActions } from "@/modules/account";
import * as api from "@/modules/course/api";
import {
  ICourseRequest,
  ICourseShortRequest,
  ICourseStatusRequest,
  INotificationRequest,
  IStudentMarkRequest,
  IStudentStatusRequest,
  ITeacherRequest,
} from "@/modules/course/api/types";
import { groupsActions } from "@/modules/groups";

interface IPayload<T> {
  idCourse: string;
  data: T;
}

export const getCourseDetails = createAsyncThunk(
  "courses/getCourseDetails",
  async (idCourse: string, { rejectWithValue }) => {
    try {
      const response = await api.getCourseDetails(idCourse);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);

interface IPayloadForCreateCourse {
  idGroup: string;
  data: ICourseRequest;
}

export const createCourse = createAsyncThunk(
  "groups/create",
  async (payload: IPayloadForCreateCourse, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.createCourse(payload.idGroup, payload.data);
      dispatch(groupsActions.addCourse(response.data));
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: "Невозможно создать" });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/delete",
  async (idCourse: string, { rejectWithValue }) => {
    try {
      await api.deleteCourse(idCourse);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: "Невозможно удалить" });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);

export const editCourse = createAsyncThunk(
  "courses/edit",
  async (payload: IPayload<ICourseShortRequest>, { rejectWithValue }) => {
    try {
      await api.editCourse(payload.idCourse, payload.data);
      return payload.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: "Невозможно отредактировать" });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);

export const changeCourseStatus = createAsyncThunk(
  "courses/changeStatus",
  async (payload: IPayload<ICourseStatusRequest>, { rejectWithValue }) => {
    try {
      const response = await api.changeCourseStatus(
        payload.idCourse,
        payload.data
      );
      return response.data.status;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({
          message: "Невозможно установить статус меньше текущего",
        });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);

export const addTeacherToCourse = createAsyncThunk(
  "courses/addTeacher",
  async (payload: IPayload<ITeacherRequest>, { rejectWithValue }) => {
    try {
      const response = await api.addTeacherToCourse(
        payload.idCourse,
        payload.data
      );
      return response.data.teachers;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({
          message:
            "Этот рользователь уже является преподавателем или студентом",
        });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);

export const addNotificationToCourse = createAsyncThunk(
  "courses/addNotification",
  async (payload: IPayload<INotificationRequest>, { rejectWithValue }) => {
    try {
      await api.addNotificationToCourse(payload.idCourse, payload.data);
      return payload.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: "Невозможно создать уведомление" });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
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
    { rejectWithValue }
  ) => {
    try {
      await api.changeStudentStatus(
        payload.idCourse,
        payload.idStudent,
        payload.data
      );
      return {
        idStudent: payload.idStudent,
        data: payload.data,
      };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({
          message: "Количество учеников превышает максимальное",
        });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);

export const changeStudentMark = createAsyncThunk(
  "courses/changeStudentMark",
  async (
    payload: IStudentPayload<IStudentMarkRequest>,
    { rejectWithValue }
  ) => {
    try {
      await api.changeStudentMark(
        payload.idCourse,
        payload.idStudent,
        payload.data
      );
      return {
        idStudent: payload.idStudent,
        data: payload.data,
      };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: "Невозможно установить отметку" });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);

export const signUpForCourse = createAsyncThunk(
  "courses/signup",
  async (idCourse: string, { rejectWithValue, dispatch }) => {
    try {
      await api.signUpForCourse(idCourse);
      dispatch(getCourseDetails(idCourse));
      dispatch(accountActions.getStudingCourses());
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: "Невозможно записаться на курс" });
      } else {
        return rejectWithValue({ message: "Ошибка соединения" });
      }
    }
  }
);
