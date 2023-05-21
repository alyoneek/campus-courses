import { createAsyncThunk } from "@reduxjs/toolkit";

import { ILoginRequest, ISignupRequest } from "@/modules/auth/api/types";
import * as api from "@modules/auth/api";
import { setEmail, setToken } from "../helpers/localStorage";
import { authActions } from "./authSlice";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data: ISignupRequest, { rejectWithValue }) => {
    try {
      const response = await api.signup(data);
      setToken(response.data.token);
      setEmail(data.email);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: ILoginRequest, { rejectWithValue }) => {
    try {
      const response = await api.login(data);
      setToken(response.data.token);
      setEmail(data.email);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    await api.logout();
    dispatch(authActions.clearState());
  }
);
