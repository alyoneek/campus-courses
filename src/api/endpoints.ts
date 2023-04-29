const Endpoints = {
  ACCOUNT: {
    SIGNUP: "/registration",
    LOGIN: "/login",
    LOGOUT: "/logout",
    ROLES: "/roles",
    PROFILE: "/profile",
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
    COURSE_BY_ID: (id: string) => `/courses/${id}/details`,
    STATUS: (id: string) => `/courses/${id}/status`,
    TEACHERS: (id: string) => `/courses/${id}/teachers`,
  },
};

export default Endpoints;
