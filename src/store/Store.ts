import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./test/TestSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
