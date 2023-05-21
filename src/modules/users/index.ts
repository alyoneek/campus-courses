import { getUsers as getUsersAction } from "@modules/users/store/usersActions";
import { getUsers as getUsersSelector } from "@modules/users/store/usersSelectors";
import { usersReducer } from "@modules/users/store/usersSlice";

const usersSelectors = {
  getUsers: getUsersSelector,
};

const usersActions = {
  getUsers: getUsersAction,
};

export { usersReducer, usersSelectors, usersActions };
