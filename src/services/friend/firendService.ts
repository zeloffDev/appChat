import { axiosInstance } from "@/httpClient";
import { IResponsePage } from "../type";
import { IGetFriends, IResponseGetFriends } from "./friendServiceType";

export const FriendServices = {
  getFriends: (params: IGetFriends) => {
    return axiosInstance.get<IResponsePage<IResponseGetFriends[]>>(
      "/user/listFriend",
      { params }
    );
  },
};
