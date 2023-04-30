import {
  AnyAction,
  Reducer,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { accountReducer } from "@/store/features/account/accountSlice";
import { authReducer } from "@/store/features/auth/authSlice";
import { coursesReducer } from "@/store/features/courses/courseSlice";
import { groupsReducer } from "@/store/features/groups/groupsSlice";
import { usersReducer } from "@/store/features/users/usersSlice";

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
