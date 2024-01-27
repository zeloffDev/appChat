import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import friendSlice from "./friend/friendSlice";
import screenSlice from "./screen/screenSlice";

export const store = configureStore({
  reducer: {
    userStore: userSlice,
    friendStore: friendSlice,
    ScreenStore: screenSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
