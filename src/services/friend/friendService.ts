import { axiosInstance } from "@/httpClient";
import { IResponse, IResponseSkipCount } from "../type";
import {
  IAddFriend,
  IGetFriends,
  IResponseGetFriends,
} from "./friendServiceType";

export const FriendServices = {
  getFriends: (params: IGetFriends) => {
    return axiosInstance.get<IResponseSkipCount<IResponseGetFriends[]>>(
      "/friend/listFriend",
      { params }
    );
  },
  getListUser: (params: IGetFriends) => {
    return axiosInstance.get<IResponseSkipCount<IResponseGetFriends[]>>(
      "/friend/listUser",
      { params }
    );
  },
  getListFriendRequest: (params: IGetFriends) => {
    return axiosInstance.get<IResponseSkipCount<IResponseGetFriends[]>>(
      "/friend/listFriendRequest",
      { params }
    );
  },
  addFriendRequest: (payload: IAddFriend) => {
    return axiosInstance.post<IResponse<IResponseGetFriends>>(
      "/friend/addFriendRequest",
      payload
    );
  },
  revokeFriendRequest: (payload: IAddFriend) => {
    return axiosInstance.post<IResponse<IResponseGetFriends>>(
      "/friend/revokeFriendRequest",
      payload
    );
  },
  addFriend: (payload: IAddFriend) => {
    return axiosInstance.post<IResponse<IResponseGetFriends>>(
      "/friend/addFriend",
      payload
    );
  },
  deleteFriend: (payload: IAddFriend) => {
    return axiosInstance.delete<IResponse<IResponseGetFriends>>(
      "/friend/deleteFriend",
      { data: payload }
    );
  },
};
