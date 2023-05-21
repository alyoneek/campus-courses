import {
  ICourseDescription,
  ICourseInfo,
  INotification,
  IStudent,
  ITeacher,
} from "@/modules/course/api/types";
import { createSlice } from "@reduxjs/toolkit";
import * as CourseActions from "./courseActions";

interface ICoursesState {
  idCourse: string;
  courseInfo: ICourseInfo;
  courseDescription: ICourseDescription;
  allStudents: IStudent[];
  allTeachers: ITeacher[];
  allNotifications: INotification[];
}

const initialState: ICoursesState = {
  idCourse: "",
  courseInfo: {} as ICourseInfo,
  courseDescription: {} as ICourseDescription,
  allStudents: [],
  allTeachers: [],
  allNotifications: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      CourseActions.getCourseDetails.fulfilled,
      (state, { payload }) => {
        const {
          requirements,
          annotations,
          students,
          teachers,
          notifications,
          id,
          ...info
        } = payload;

        state.idCourse = id;
        state.courseInfo = info;
        state.courseDescription = {
          requirements,
          annotations,
        };
        state.allStudents = students;
        state.allTeachers = teachers;
        state.allNotifications = notifications;
      }
    );

    builder.addCase(
      CourseActions.editCourse.fulfilled,
      (state, { payload }) => {
        state.courseDescription = payload;
      }
    );

    builder.addCase(CourseActions.deleteCourse.fulfilled, () => {
      return initialState;
    });

    builder.addCase(
      CourseActions.changeCourseStatus.fulfilled,
      (state, { payload }) => {
        if (state.courseInfo) state.courseInfo.status = payload;
      }
    );

    builder.addCase(
      CourseActions.addTeacherToCourse.fulfilled,
      (state, { payload }) => {
        state.allTeachers = payload;
      }
    );

    builder.addCase(
      CourseActions.addNotificationToCourse.fulfilled,
      (state, { payload }) => {
        state.allNotifications.push(payload);
      }
    );

    builder.addCase(
      CourseActions.changeStudentStatus.fulfilled,
      (state, { payload }) => {
        const student = state.allStudents.find(
          (student) => student.id === payload.idStudent
        );
        if (student) student.status = payload.data.status;
      }
    );

    builder.addCase(
      CourseActions.changeStudentMark.fulfilled,
      (state, { payload }) => {
        const student = state.allStudents.find(
          (student) => student.id === payload.idStudent
        );

        const key = (payload.data.markType.toLowerCase() +
          "Result") as keyof IStudent;

        if (student) (student as any)[key] = payload.data.mark;
      }
    );
  },
});

export const { reducer: coursesReducer } = coursesSlice;
