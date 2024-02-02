import { IResponseGetFriends } from "@/services/friend/friendServiceType";
import { createSlice } from "@reduxjs/toolkit";
import { getHistoryMessageThunk } from "./chatThunk";
import { IResponseHistoryMessage } from "@/services/chat/chatService.type";

interface ChatState {
  isLoading: boolean;
  friend: IResponseGetFriends;
  historyMessage: IResponseHistoryMessage[];
  skip: number;
  limit: number;
  next: boolean;
}

const initialState: ChatState = {
  isLoading: false,
  friend: {} as IResponseGetFriends,
  historyMessage: [],
  skip: 0,
  limit: 10,
  next: true,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setFriend: (state, action) => {
      state.friend = action.payload;
    },
    clearFriend: (state, action) => {
      state.friend = {} as IResponseGetFriends;
    },
    setMessageReceive: (state, action) => {
      if (state.friend._id === action.payload.senderId) {
        state.historyMessage = [action.payload, ...state.historyMessage];
        state.skip = state.skip + 1;
      }
    },
    setMessageSender: (state, action) => {
      state.historyMessage = [action.payload, ...state.historyMessage];
      state.skip = state.skip + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHistoryMessageThunk.fulfilled, (state, action) => {
      const { data: historyMessage, skip, limit, next } = action.payload.data;
      if (skip === 0) {
        state.historyMessage = [...historyMessage];
      } else {
        state.historyMessage = [...state.historyMessage, ...historyMessage];
      }
      state.skip = skip + limit;
      state.limit = limit;
      state.next = next;
      state.isLoading = false;
    });
  },
});

export const { setFriend, clearFriend, setMessageSender, setMessageReceive } =
  chatSlice.actions;
export default chatSlice.reducer;
