import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { accountReducer } from "./features/account/accountSlice";
import { coursesReducer } from "./features/courses/courseSlice";
import { groupsReducer } from "./features/groups/groupsSlice";
import { usersReducer } from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    groups: groupsReducer,
    users: usersReducer,
    courses: coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
