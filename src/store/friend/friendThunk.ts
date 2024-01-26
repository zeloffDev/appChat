import { FriendServices } from "@/services/friend/firendService";
import { IGetFriends } from "@/services/friend/friendServiceType";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFriendsThunk = createAsyncThunk(
  "friend/get",
  async (params: IGetFriends, thunkAPI) => {
    try {
      const response = await FriendServices.getFriends(params);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
