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
};

export default Endpoints;
