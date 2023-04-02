import api from "@/api";
import { ILoginRequest, ISignupRequest } from "@/api/account/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "./helpers";

export const signup = createAsyncThunk(
  "account/signup",
  async (data: ISignupRequest, { rejectWithValue }) => {
    try {
      const response = await api.account.signup(data);
      setToken(response.data.token);
      return response.data;
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
  "account/login",
  async (data: ILoginRequest, { rejectWithValue }) => {
    try {
      const response = await api.account.login(data);
      setToken(response.data.token);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const logout = createAsyncThunk("account/logout", async () => {
  await api.account.logout();
});

export const getRoles = createAsyncThunk("account/getRoles", async () => {
  const response = await api.account.getRoles();
  return response.data;
});
