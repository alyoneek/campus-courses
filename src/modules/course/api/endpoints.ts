const endpoints = {
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
};

export default endpoints;
