import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./test/TestSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
