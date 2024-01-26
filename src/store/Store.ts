import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import friendSlice from "./friend/friendSlice";

export const store = configureStore({
  reducer: {
    userStore: userSlice,
    friendStore: friendSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
