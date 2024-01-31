import { FriendServices } from "@/services/friend/friendService";
import { IAddFriend, IGetFriends } from "@/services/friend/friendServiceType";
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

export const getListFriendRequestThunk = createAsyncThunk(
  "friendRequest/get",
  async (params: IGetFriends, thunkAPI) => {
    try {
      const response = await FriendServices.getListFriendRequest(params);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getListUserThunk = createAsyncThunk(
  "listUser/get",
  async (params: IGetFriends, thunkAPI) => {
    try {
      const response = await FriendServices.getListUser(params);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addFriendRequestThunk = createAsyncThunk(
  "friendRequest/add",
  async (payload: IAddFriend, thunkAPI) => {
    try {
      const response = await FriendServices.addFriendRequest(payload);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
