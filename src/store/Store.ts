import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import friendSlice from "./friend/friendSlice";
import screenSlice from "./screen/screenSlice";
import chatSlice from "./chat/chatSlice";
import socketSlice from "./socket/socketSlice";

export const store = configureStore({
  reducer: {
    userStore: userSlice,
    friendStore: friendSlice,
    ScreenStore: screenSlice,
    chatStore: chatSlice,
    socketStore: socketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
