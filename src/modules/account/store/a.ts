import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "@/modules/account/api";
import { IProfileEditRequest } from "@/modules/account/api/types";

export const editProfile = createAsyncThunk(
  "account/editProfile1",
  async (data: IProfileEditRequest, { rejectWithValue }) => {
    try {
      const response = await api.editProfile(data);
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

// export const getProfile = createAsyncThunk("account/getProfile", async () => {
//   const response = await api.getProfile();
//   return response.data;
// });
