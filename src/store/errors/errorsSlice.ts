import { createSlice } from "@reduxjs/toolkit";

interface IErrorsState {
  error: string | null;
}

const initialState: IErrorsState = {
  error: null,
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, { payload }) => {
        state.error = payload.message;
      }
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.error = null;
      }
    );

    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state) => {
        state.error = null;
      }
    );
  },
});

export const { reducer: errorsReducer } = errorsSlice;
