import { IResponseGetFriends } from "@/services/friend/friendServiceType";
import { createSlice } from "@reduxjs/toolkit";
import { getFriendsThunk } from "./friendThunk";

interface FriendState {
  friends: Array<IResponseGetFriends>;
  isLoading: boolean;
  page: number;
  totalPage: number;
}

const initialState: FriendState = {
  friends: [],
  isLoading: false,
  page: 1,
  totalPage: 10,
};

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    clearFriendStore: (state, action) => {
      state.friends = [];
      state.page = 1;
      state.totalPage = 10;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFriendsThunk.fulfilled, (state, action) => {
      const { data: friends, page, totalPage } = action.payload.data;
      state.friends = [...state.friends, ...friends];
      state.isLoading = false;
      state.totalPage = totalPage;
      state.page = page + 1;
    });
  },
});

export const { clearFriendStore } = friendSlice.actions;
export default friendSlice.reducer;
