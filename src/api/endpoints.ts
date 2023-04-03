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
  },
};

export default Endpoints;
