import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "@/api";
import { ILoginRequest, ISignupRequest } from "@/api/auth/types";
import { authActions } from "./authSlice";
import { setEmail, setToken } from "./helpers";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data: ISignupRequest, { rejectWithValue }) => {
    try {
      const response = await api.auth.signup(data);
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
      const response = await api.auth.login(data);
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
    await api.auth.logout();
    dispatch(authActions.clearState());
  }
);
