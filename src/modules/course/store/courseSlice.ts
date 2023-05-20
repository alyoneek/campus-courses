import {
  ICourseDescription,
  ICourseInfo,
  INotification,
  IStudent,
  ITeacher,
} from "@/api/courses/types";
import { createSlice } from "@reduxjs/toolkit";
import * as CourseActions from "./courseActions";

interface ICoursesState {
  idCourse: string;
  courseInfo: ICourseInfo;
  courseDescription: ICourseDescription;
  allStudents: IStudent[];
  allTeachers: ITeacher[];
  allNotifications: INotification[];
  status: "init" | "loading" | "error" | "success";
  error: string | null;
}

const initialState: ICoursesState = {
  idCourse: "",
  courseInfo: {} as ICourseInfo,
  courseDescription: {} as ICourseDescription,
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
    },

    editCourseDetails: (state, { payload }) => {
      state.courseDescription = payload;
    },

    deleteCourse: () => initialState,

    changeStatus: (state, { payload }) => {
      if (state.courseInfo) state.courseInfo.status = payload;
    },

    updateTeachers: (state, { payload }) => {
      state.allTeachers = payload;
    },

    addNotification: (state, { payload }) => {
      state.allNotifications.push(payload);
    },

    changeStudentStatus: (state, { payload }) => {
      const student = state.allStudents.find(
        (student) => student.id === payload.idStudent
      );
      if (student) student.status = payload.data.status;
    },

    changeStudentMark: (state, { payload }) => {
      const student = state.allStudents.find(
        (student) => student.id === payload.idStudent
      );

      const key = (payload.data.markType.toLowerCase() +
        "Result") as keyof IStudent;
      if (student) (student as any)[key] = payload.data.mark;
    },
  },
  extraReducers: (builder) => {
    // getCourseDetails
    builder.addCase(CourseActions.getCourseDetails.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(CourseActions.getCourseDetails.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(
      CourseActions.getCourseDetails.rejected,
      (state, { payload }) => {
        state.status = "error";
        state.error = payload?.message;
      }
    );

    // changeCourseStatus
    builder.addCase(CourseActions.changeCourseStatus.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(CourseActions.changeCourseStatus.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(
      CourseActions.changeCourseStatus.rejected,
      (state, { payload }) => {
        state.status = "error";
        state.error = payload?.message;
      }
    );

    // addTeacherToCourse
    builder.addCase(CourseActions.addTeacherToCourse.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(CourseActions.addTeacherToCourse.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(
      CourseActions.addTeacherToCourse.rejected,
      (state, { payload }) => {
        state.status = "error";
        state.error = payload?.message;
      }
    );

    // addNotificationToCourse
    builder.addCase(CourseActions.addNotificationToCourse.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(
      CourseActions.addNotificationToCourse.fulfilled,
      (state) => {
        state.status = "success";
      }
    );

    builder.addCase(
      CourseActions.addNotificationToCourse.rejected,
      (state, { payload }) => {
        state.status = "error";
        state.error = payload?.message;
      }
    );

    // changeStudentStatus
    builder.addCase(CourseActions.changeStudentStatus.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(CourseActions.changeStudentStatus.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(
      CourseActions.changeStudentStatus.rejected,
      (state, { payload }) => {
        state.status = "error";
        state.error = payload?.message;
      }
    );

    // changeStudentMark
    builder.addCase(CourseActions.changeStudentMark.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(CourseActions.changeStudentMark.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(
      CourseActions.changeStudentMark.rejected,
      (state, { payload }) => {
        state.status = "error";
        state.error = payload?.message;
      }
    );

    // sign-up
    builder.addCase(CourseActions.signUpForCourse.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(CourseActions.signUpForCourse.fulfilled, (state) => {
      state.status = "success";
    });

    builder.addCase(
      CourseActions.signUpForCourse.rejected,
      (state, { payload }) => {
        state.status = "error";
        state.error = payload?.message;
      }
    );

    // not some
  },
});

export const { reducer: coursesReducer, actions: coursesActions } =
  coursesSlice;
