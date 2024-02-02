import { ChatServices } from "@/services/chat/chatService";
import { IHistoryMessage } from "@/services/chat/chatService.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHistoryMessageThunk = createAsyncThunk(
  "historyMessage/get",
  async (params: IHistoryMessage, thunkAPI) => {
    try {
      const response = await ChatServices.getHistoryMessage(params);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
