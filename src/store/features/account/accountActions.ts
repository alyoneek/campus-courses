import api from "@/api";
import { ILoginRequest, ISignupRequest } from "@/api/account/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
  "account/signup",
  async (data: ISignupRequest, { rejectWithValue }) => {
    try {
      const response = await api.account.signup(data);
      localStorage.setItem("userToken", response.data.token);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ messgae: error.message });
      }
    }
  }
);

export const login = createAsyncThunk(
  "account/login",
  async (data: ILoginRequest, { rejectWithValue }) => {
    try {
      const response = await api.account.login(data);
      localStorage.setItem("userToken", response.data.token);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ messgae: error.message });
      }
    }
  }
);
