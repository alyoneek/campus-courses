const Endpoints = {
  AUTH: {
    SIGNUP: "/registration",
    LOGIN: "/login",
    LOGOUT: "/logout",
  },

  ACCOUNT: {
    ROLES: "/roles",
    PROFILE: "/profile",
    STUDING_COURSES: "/courses/my",
    TEACHING_COURSES: "/courses/teaching",
  },

  GROUPS: {
    ALL_GROUPS: "/groups",
    GROUP_BY_ID: (id: string) => `/groups/${id}`,
    COURSE_IN_GROUP: (idGroup: string) => `/courses/${idGroup}`,
  },

  USERS: {
    ALL_USERS: "/users",
  },

  COURSES: {
    COURSE_BY_ID: (id: string) => `courses/${id}`,
    DETAILS: (id: string) => `/courses/${id}/details`,
    STATUS: (idCourse: string) => `/courses/${idCourse}/status`,
    TEACHERS: (idCourse: string) => `/courses/${idCourse}/teachers`,
    NOTIFICATIONS: (idCourse: string) => `/courses/${idCourse}/notifications`,
    STUDENT_STATUS: (idCourse: string, idStudent: string) =>
      `/courses/${idCourse}/student-status/${idStudent}`,
    STUDENT_MARK: (idCourse: string, idStudent: string) =>
      `/courses/${idCourse}/marks/${idStudent}`,
    SIGN_UP: (idCourse: string) => `/courses/${idCourse}/sign-up`,
  },
};

export default Endpoints;
