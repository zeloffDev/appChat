import { LOCAL_STORE_NAME } from "@/constants/LocalStore";
import { IResponseUserSignIn } from "@/services/user/userService.type";
import {
  deleteLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/LocalStore";
import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, userInfoThunk } from "./userThunk";

interface UserState {
  user: IResponseUserSignIn;
  isLoading: boolean;
}

const getUserLocal = () => {
  let parseUser = {} as IResponseUserSignIn;
  const user = getLocalStorageItem(LOCAL_STORE_NAME.USER);
  if (user) {
    parseUser = JSON.parse(user);
  }
  return parseUser;
};

const initialState: UserState = {
  user: getUserLocal(),
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state, action) => {
      state.user = {} as IResponseUserSignIn;
      deleteLocalStorageItem(LOCAL_STORE_NAME.USER);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userInfoThunk.fulfilled, (state, action) => {
      const user = action.payload.data.data;
      state.user = user;
      state.isLoading = false;
      setLocalStorageItem(LOCAL_STORE_NAME.USER, JSON.stringify(user));
    });
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      const user = action.payload.data.data;
      state.user = user;
      state.isLoading = false;
      setLocalStorageItem(LOCAL_STORE_NAME.USER, JSON.stringify(user));
    });
    builder.addCase(signInThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(signInThunk.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
