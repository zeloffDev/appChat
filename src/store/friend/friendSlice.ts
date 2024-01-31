import { IResponseGetFriends } from "@/services/friend/friendServiceType";
import { createSlice } from "@reduxjs/toolkit";
import {
  getFriendsThunk,
  getListFriendRequestThunk,
  getListUserThunk,
} from "./friendThunk";

interface FriendState {
  isLoading: boolean;
  listUser: Array<IResponseGetFriends>;
  friendsRequest: Array<IResponseGetFriends>;
  friends: Array<IResponseGetFriends>;
  skip: number;
  limit: number;
  next: boolean;
}

const initialState: FriendState = {
  isLoading: false,
  friends: [],
  listUser: [],
  friendsRequest: [],

  skip: 0,
  limit: 10,
  next: true,
};

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    clearFriendStore: (state, action) => {
      state.friends = [];
      state.listUser = [];
      state.friendsRequest = [];
      state.skip = 0;
      state.limit = 10;
      state.next = true;
    },
    addFriend: (state, action) => {
      const { friendId } = action.payload;
      const newFriendsRequest = [...state.friendsRequest];
      state.friendsRequest = newFriendsRequest.filter(
        (item) => item._id !== friendId
      );
      state.skip = state.skip - 1;
    },
    deleteFriend: (state, action) => {
      const { friendId } = action.payload;
      const newFriends = [...state.friends];
      state.friends = newFriends.filter((item) => item._id !== friendId);
      state.skip = state.skip - 1;
    },
    addFriendRequest: (state, action) => {
      const { friendId, userId } = action.payload;
      const newListUser = [...state.listUser];
      const findIndex = newListUser.findIndex((item) => item._id === friendId);
      const friend = newListUser[findIndex];
      const newFriend = {
        ...friend,
        listFriendRequest: [...friend.listFriendRequest, userId],
      };
      newListUser[findIndex] = newFriend;
      state.listUser = newListUser;
    },
    revokeFriendRequest: (state, action) => {
      const { friendId, userId } = action.payload;
      const newListUser = [...state.listUser];
      const findIndex = newListUser.findIndex((item) => item._id === friendId);
      const friend = newListUser[findIndex];
      const newFriend = {
        ...friend,
        listFriendRequest: friend.listFriendRequest.filter(
          (_id) => _id !== userId
        ),
      };
      newListUser[findIndex] = newFriend;
      state.listUser = newListUser;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getFriendsThunk.fulfilled, (state, action) => {
      const { data: friends, skip, limit, next } = action.payload.data;
      if (skip === 0) {
        state.friends = [...friends];
      } else {
        state.friends = [...state.friends, ...friends];
      }
      state.skip = skip + limit;
      state.limit = limit;
      state.next = next;
      state.isLoading = false;
    });

    builder.addCase(getListUserThunk.fulfilled, (state, action) => {
      const { data: listUser, skip, limit, next } = action.payload.data;
      if (skip === 0) {
        state.listUser = [...listUser];
      } else {
        state.listUser = [...state.listUser, ...listUser];
      }
      state.skip = skip + limit;
      state.limit = limit;
      state.next = next;
      state.isLoading = false;
    });

    builder.addCase(getListFriendRequestThunk.fulfilled, (state, action) => {
      const { data: friendsRequest, skip, limit, next } = action.payload.data;
      if (skip === 0) {
        state.friendsRequest = [...friendsRequest];
      } else {
        state.friendsRequest = [...state.friendsRequest, ...friendsRequest];
      }
      state.skip = skip + limit;
      state.limit = limit;
      state.next = next;
      state.isLoading = false;
    });
  },
});

export const {
  clearFriendStore,
  addFriendRequest,
  revokeFriendRequest,
  addFriend,
  deleteFriend,
} = friendSlice.actions;
export default friendSlice.reducer;
