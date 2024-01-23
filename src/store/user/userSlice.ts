import { IResponseUserSignIn } from "@/services/user/userService.type";
import { createSlice } from "@reduxjs/toolkit";
import { signInThunk } from "./userThunk";

interface CounterState {
  user: IResponseUserSignIn | null;
}

const initialState: CounterState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      state.user = action.payload.data.data;
    });
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
