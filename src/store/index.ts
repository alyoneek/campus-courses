import {
  AnyAction,
  Reducer,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { accountReducer } from "@/modules/account/store/accountSlice";
import { authReducer } from "@/modules/auth/store/authSlice";
import { coursesReducer } from "@/modules/course";
import { groupsReducer } from "@/modules/groups";
import { usersReducer } from "@/modules/users/store/usersSlice";

const combinedReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  groups: groupsReducer,
  users: usersReducer,
  courses: coursesReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "auth/clearState") {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
