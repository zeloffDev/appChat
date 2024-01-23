import { UserServices } from "@/services/user/userService";
import { IUserSignIn } from "@/services/user/userService.type";
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
