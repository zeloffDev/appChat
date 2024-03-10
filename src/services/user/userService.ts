import {
  IParamsInfo,
  IResponseUserSignIn,
  IUpdateUserInfo,
  IUserSignIn,
  IUserSignUp,
} from "./userService.type";
import { IResponse } from "../type";
import { axiosInstance } from "@/httpClient";

export const UserServices = {
  userSignIn: (payload: IUserSignIn) => {
    return axiosInstance.post<IResponse<IResponseUserSignIn>>(
      "/user/signIn",
      payload
    );
  },
  userSignUp: (payload: IUserSignIn) => {
    return axiosInstance.post<IResponse<IUserSignUp>>("user/signup", payload);
  },
  userInfo: (params: IParamsInfo) => {
    return axiosInstance.get<IResponse<IResponseUserSignIn>>("user", {
      params,
    });
  },
  updateUserInfo: (payload: IUpdateUserInfo) => {
    return axiosInstance.put<IResponse<IResponseUserSignIn>>(
      "user/update",
      payload
    );
  },
  updateFile: (payload: FormData) => {
    return axiosInstance.post<IResponse<string>>("/upload/cloud", payload);
  },
};
