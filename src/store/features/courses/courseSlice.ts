import {
  ICourseDescription,
  ICourseInfo,
  INotification,
  IStudent,
  ITeacher,
} from "@/api/courses/types";
import { createSlice } from "@reduxjs/toolkit";
import { getCourseDetails } from "./courseActions";

interface ICoursesState {
  courseInfo: ICourseInfo | null;
  courseDescription: ICourseDescription | null;
  allStudents: IStudent[];
  allTeachers: ITeacher[];
  allNotifications: INotification[];
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: ICoursesState = {
  courseInfo: null,
  courseDescription: null,
  allStudents: [],
  allTeachers: [],
  allNotifications: [],
  status: "init",
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    splitDetailsInfo: (state, { payload }) => {
      const {
        requirements,
        annotations,
        students,
        teachers,
        notifications,
        ...info
      } = payload;

      state.courseInfo = info;
      state.courseDescription = {
        requirements,
        annotations,
      };
      state.allStudents = students;
      state.allTeachers = teachers;
      state.allNotifications = notifications;
    },
  },
  extraReducers: (builder) => {
    // getCourseDetails
    builder.addCase(getCourseDetails.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getCourseDetails.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(getCourseDetails.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload?.message;
    });
  },
});

export const { reducer: coursesReducer, actions: coursesActions } =
  coursesSlice;
