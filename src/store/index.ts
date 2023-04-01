import { createStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = createStore({
  // reducer: {
  // }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useStateSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
