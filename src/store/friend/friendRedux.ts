import { store } from "../Store";
import {
  addFriend,
  addFriendRequest,
  deleteFriend,
  revokeFriendRequest,
} from "./friendSlice";
import { IAddFriend } from "@/services/friend/friendServiceType";

export const friendRedux = {
  addFriendRequest: (payload: IAddFriend) =>
    store.dispatch(addFriendRequest(payload)),

  revokeFriendRequest: (payload: IAddFriend) =>
    store.dispatch(revokeFriendRequest(payload)),

  addFriend: (payload: IAddFriend) => store.dispatch(addFriend(payload)),

  deleteFriend: (payload: IAddFriend) => store.dispatch(deleteFriend(payload)),
};
