const endpoints = {
  ALL_GROUPS: "/groups",
  GROUP_BY_ID: (id: string) => `/groups/${id}`,
  COURSES_IN_GROUP: (idGroup: string) => `/courses/${idGroup}`,
};

export default endpoints;
