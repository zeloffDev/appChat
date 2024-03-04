import { UserServices } from "@/services/user/userService";
import { IParamsInfo, IUserSignIn } from "@/services/user/userService.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInThunk = createAsyncThunk(
  "user/signIn",
  async (payload: IUserSignIn, thunkAPI) => {
    try {
      const response = await UserServices.userSignIn(payload);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userInfoThunk = createAsyncThunk(
  "user/info",
  async (params: IParamsInfo, thunkAPI) => {
    try {
      const response = await UserServices.userInfo(params);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
